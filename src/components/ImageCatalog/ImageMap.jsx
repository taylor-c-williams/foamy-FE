import { Link, useNavigate } from 'react-router-dom'
import { updateStatus } from '../../services'
import styles from './imageCatalog.module.css'
import zoom from '../../assets/magnifier.png'

export default function ImageMap({ images, setImages, pageNumber, getImages }) {
  //
  async function updateFoamStatus(imageId, status) {
    await updateStatus(imageId, status)
    const res = await getImages(pageNumber)
    setImages(res)
  }

  const navigate = useNavigate()

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
            </Link>
            <section className={styles.status}>
              {image.foamy === true && '🍺 Foamy'}
              {image.foamy === false && '🚫 Not Foamy'}
              {image.foamy === null && '❓ Unclassified'}
            </section>
            <div className={styles.buttonsDiv}>
              <button onClick={() => navigate(`/${image.id}`)}>
                <img
                  src={zoom}
                  className={styles.zoomIcon}
                  alt={'Click to zoom'}
                />
              </button>
              <button onClick={() => updateFoamStatus(image.id, true)}>
                Foamy
              </button>
              <button onClick={() => updateFoamStatus(image.id, false)}>
                Not Foamy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
