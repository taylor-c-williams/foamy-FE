import { Routes, Route } from 'react-router-dom' 
import Home from './views/Home/Home'
import ImageItem from './components/ImageItem/ImageItem'
import FoamyImages from './components/ImageCatalog/FoamyImages'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<ImageItem />}/>
      <Route path="/foamy" element={<FoamyImages />}/>
    </Routes>
    </>
  )
}

export default App
