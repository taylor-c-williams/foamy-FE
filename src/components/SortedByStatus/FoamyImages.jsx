import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFoamy } from '../../services'
import { usePage } from '../../context/PageContext'
import CatalogNav from '../CatalogNav'
import styles from '../ImageCatalog/imageCatalog.module.css'
import ImageMap from '../ImageCatalog/ImageMap'

export default function ImageCatalog() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const { pageNumber, setPageNumber } = usePage()
  const navigate = useNavigate()

  // Get & Set all foamy images on render & page number update
  useEffect(() => {
    setLoading(true)
    getFoamy(pageNumber).then((res) => {
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

      <ImageMap
        images={images}
        setImages={setImages}
        pageNumber={pageNumber}
        getImages={getFoamy}
      />

      <CatalogNav />
      <button onClick={backHomeHandler}>Back to Main</button>
    </section>
  )
}