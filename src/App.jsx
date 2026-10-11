

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header'
import Home from './pages/Home'
import View from './pages/View'
import PageFooter from './components/PageFooter'

function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/products/:id' element={<View/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
     </Routes>
     <PageFooter/>
    </>
  )
}

export default App
