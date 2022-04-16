import { Routes, Route } from 'react-router-dom' 
import Home from './views/Home/Home'
import ImageItem from './components/ImageItem/ImageItem'

import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<ImageItem />}/>
    </Routes>
    </>
  )
}

export default App
