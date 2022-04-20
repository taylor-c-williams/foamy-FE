import { useNavigate } from 'react-router-dom'
import { usePage } from '../context/PageContext.jsx'
import styles from './ImageCatalog/imageCatalog.module.css'

export default function CatalogNav() {
  const { pageNumber, setPageNumber } = usePage()
  const navigate = useNavigate()

  const navHandler = (pageNumber) => {
    setPageNumber(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <section className={styles.catalogNav}>
      <button onClick={() => navigate('/foamy')}>Get all foamy</button>
      <button onClick={() => navigate('/not-foamy')}>Get all not foamy</button>
      <button onClick={() => navigate('/uncategorized')}>
        Get all uncategorized
      </button>

      <section className={styles.pageNav}>
        {pageNumber > 1 && (
          <button onClick={() => navHandler(pageNumber - 1)}>
            Previous Page
          </button>
        )}

        {pageNumber < 350 && (
          <button onClick={() => navHandler(pageNumber + 1)}>Next Page</button>
        )}
      </section>
    </section>
  )
}
