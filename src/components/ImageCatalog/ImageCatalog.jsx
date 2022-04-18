import { Link } from 'react-router-dom'
import styles from './imageCatalog.module.css'

export default function ImageCatalog({ images }) {
  return (
    <section className={styles.imageCatalog}>
      <ul className={styles.imageUL}>
        {images.map((image) => (
          <li key={image.url}>
            <Link to={`/${image.id}`}>
              {image.id}
              <img src={image.url} alt={image.foamy} />
              <button>Foamy?</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
