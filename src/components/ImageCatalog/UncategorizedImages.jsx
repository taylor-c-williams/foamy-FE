import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUncategorized } from '../../services'
import styles from './imageCatalog.module.css'

import ImageMap from './ImageMap'

export default function UncategorizedImages() {
  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getUncategorized(pageNumber).then((res) => {
      setImages(res)
    })
    setLoading(false)
  }, [pageNumber])

  const navHandler = (pageNumber) => {
    setPageNumber(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <section className={styles.imageCatalog}>
      {loading && 'Loading!'}

      <button onClick={() => navigate('/')}>Back to Main</button>
      <ImageMap images={images} />
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
