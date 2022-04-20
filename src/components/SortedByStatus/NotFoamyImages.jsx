import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getNotFoamy } from '../../services'
import { usePage } from '../../Context/PageContext'
import CatalogNav from '../CatalogNav'
import styles from '../ImageCatalog/imageCatalog.module.css'
import ImageMap from '../ImageCatalog/ImageMap'

export default function ImageCatalog() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const { pageNumber, setPageNumber } = usePage()
  const navigate = useNavigate()

  // Get & Set all Not Foamy images on render/page number update
  useEffect(() => {
    setLoading(true)
    getNotFoamy(pageNumber).then((res) => {
      setImages(res)
    })
    setLoading(false)
  }, [pageNumber])

  const backHomeHandler = () => {
    navigate('/')
    setPageNumber(1)
  }

  console.log(images)
  return (
    <section className={styles.imageCatalog}>
      {loading && 'Loading!'}
      <CatalogNav />
      <button onClick={backHomeHandler}>Back to Main</button>

      {images === [] ? (
        <ImageMap
          images={images}
          setImages={setImages}
          pageNumber={pageNumber}
          getImages={getNotFoamy}
        />
      ) : (
        <p>No Images Categorized as Not Foamy!</p>
      )}

      <CatalogNav />
      <button onClick={backHomeHandler}>Back to Main</button>
    </section>
  )
}
