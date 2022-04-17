import { useState, useEffect } from 'react'
import { getAll } from '../../services'
import ImageCatalog from "../../components/ImageCatalog/ImageCatalog"


export default function Home() {

const [images, setImages] = useState([])
const [pageNumber, setPageNumber] = useState(1)
const [loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
  getAll(pageNumber)
    .then((res) => {
      setImages(res)
    })
    .then(() => {
      setLoading(false)
    })
}, [pageNumber])

  return (
    <div>
       hello
      {loading && 'Loading!'}
      <ImageCatalog images={images} />
      {pageNumber > 1 && (
        <button onClick={() => setPageNumber(pageNumber - 1)}>
          Previous Page!
        </button>
      )}
      {pageNumber < 350 && (
        <button onClick={() => setPageNumber(pageNumber + 1)}>
          Next Page!
        </button>
      )}
    </div>
  )
}
