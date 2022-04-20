import { useEffect, useState } from 'react'
import { getAll } from '../../services'
import { usePage } from '../../context/PageContext'
import ImageMap from './ImageMap'
import CatalogNav from '../CatalogNav'
import styles from './imageCatalog.module.css'

export default function ImageCatalog() {
  const { pageNumber } = usePage()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  // Set images in state, display loading message, rerender on state change
  useEffect(() => {
    setLoading(true)
    getAll(pageNumber).then((res) => {
      setImages(res)
    })
    setLoading(false)
  }, [pageNumber])

  return (
    <section className={styles.imageCatalog}>
      <h1>{loading && 'Loading!'}</h1>
      <CatalogNav />

      <ImageMap images={images} setImages={setImages} pageNumber={pageNumber} />

      <CatalogNav />
    </section>
  )
}
