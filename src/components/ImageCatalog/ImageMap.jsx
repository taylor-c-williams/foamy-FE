import zoom from '../../assets/magnifier.png'
import { updateStatus } from '../../services'
import { Link } from 'react-router-dom'
import styles from './imageCatalog.module.css'

export default function ImageMap({ images }) {
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
            <button onClick={() => updateStatus(image.id, true)}>Foamy</button>
            <button onClick={() => updateStatus(image.id, false)}>
              Not Foamy
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
