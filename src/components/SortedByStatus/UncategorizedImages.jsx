import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUncategorized } from '../../services'
import { usePage } from '../../Context/PageContext'
import CatalogNav from '../CatalogNav'
import ImageMap from '../ImageCatalog/ImageMap'
import styles from '../ImageCatalog/imageCatalog.module.css'

export default function UncategorizedImages() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const { pageNumber, setPageNumber } = usePage()
  const navigate = useNavigate()

  // Get & Set all Uncategorized images on render & page number update
  useEffect(() => {
    setLoading(true)
    getUncategorized(pageNumber).then((res) => {
      setImages(res)
    })
    setLoading(false)
  }, [pageNumber])

  const backHomeHandler = () => {
    navigate('/')
    setPageNumber(1)
  }

  return (
    <section className={styles.imageCatalog}>
      {loading && 'Loading!'}
      <CatalogNav />
      <button onClick={backHomeHandler}>Back to Main</button>

      {images !== [] ? (
        <ImageMap
          images={images}
          setImages={setImages}
          pageNumber={pageNumber}
          getImages={getUncategorized}
        />
      ) : (
        <p>No Images are Uncategorized!</p>
      )}

      <CatalogNav />
      <button onClick={backHomeHandler}>Back to Main</button>
    </section>
  )
}
