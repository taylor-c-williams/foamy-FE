import { Link } from 'react-router-dom'
import { updateStatus, getAll } from '../../services'
import styles from './imageCatalog.module.css'
import zoom from '../../assets/magnifier.png'

export default function ImageMap({ images, setImages, pageNumber }) {
  async function updateFoamStatus(imageId, status) {
    await updateStatus(imageId, status)
    const res = await getAll(pageNumber)
    setImages(res)
  }

  return (
    <div>
      <ul className={styles.imageUL}>
        {images.map((image) => (
          <li key={image.url}>
            <Link to={`/${image.id}`}>
              <h1>Image ID: {image.id}</h1>
              <img
                src={image.url}
                className={styles.bioreactorImg}
                alt="A cool bioreactor!"
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
            <button onClick={() => updateFoamStatus(image.id, true)}>
              Foamy
            </button>
            <button onClick={() => updateFoamStatus(image.id, false)}>
              Not Foamy
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
