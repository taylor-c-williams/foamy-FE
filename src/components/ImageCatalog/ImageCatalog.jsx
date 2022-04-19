import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './imageCatalog.module.css'
import { updateStatus, getAll } from '../../services'
import zoom from '../../assets/magnifier.png'

export default function ImageCatalog() {
  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAll(pageNumber).then((res) => {
      setImages(res)
    })
    setLoading(false)
  }, [pageNumber, images])

  const navHandler = (pageNumber) => {
    setPageNumber(pageNumber)
    window.scrollTo(0, 0)
  }
  return (
    <section className={styles.imageCatalog}>
      {loading && 'Loading!'}

      <ul className={styles.imageUL}>
        {images.map((image) => (
          <li key={image.url}>
            <Link to={`/${image.id}`}>
              <h1>Image ID: {image.id}</h1>
              <img
                src={image.url}
                className={styles.bioreactorImg}
                alt={image.foamy}
              />
              <section className={styles.status}>
                {image.foamy === true && '🍺'}
                {image.foamy === false && '🚫'}
                {image.foamy === null && '❓'}
              </section>
              <button>
                <img
                  src={zoom}
                  className={styles.zoomIcon}
                  alt={'Click to zoom'}
                />
              </button>
            </Link>
            <button onClick={() => updateStatus(image.id, true)}>Foamy</button>
            <button onClick={() => updateStatus(image.id, false)}>
              Not Foamy
            </button>
          </li>
        ))}
      </ul>

      {pageNumber > 1 && (
        <button onClick={() => navHandler(pageNumber - 1)}>
          Previous Page
        </button>
      )}
      {pageNumber < 350 && (
        <button onClick={() => navHandler(pageNumber + 1)}>Next Page</button>
      )}
    </section>
  )
}
