import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFoamy } from '../../services'
import styles from './imageCatalog.module.css'

import ImageMap from './ImageMap'

export default function ImageCatalog() {
  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getFoamy(pageNumber).then((res) => {
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
      <ImageMap
        images={images}
        setImages={setImages}
        pageNumber={pageNumber}
        getImages={getFoamy}
      />
    </section>
  )
}
