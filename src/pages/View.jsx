import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { Button } from 'flowbite-react';
import { addTwoWishList } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function View() {
   const {id}=useParams()
  const[product,setProduct]=useState({})
    console.log(id);
 console.log(product);   
    
  const {allProducts}=useSelector(state=>state.productReducer)
  const wishlist =useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const handleWishist=()=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if (existingProduct){
      alert('Product already existing')
    }else{
      dispatch(addTwoWishList(product))
      alert('product Added')
    }
  }
  const handleCart=()=>{
    const existingProduct=cart.find(item=>item.id==product.id)
    if(existingProduct){
      alert('product is existing')
    }
    else{
      dispatch(addToCart(product))
      alert('Product added to cart')
    }
  }
useEffect(()=>{ setProduct(allProducts.find(item=>item.id==id))},[])


  
  return (

<div className="max-w-6xl mx-auto px-4 py-10">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Product Image */}
    <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8 h-[500px]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="max-h-[420px] max-w-full object-contain"
      />
    </div>

    {/* Product Details */}
    <div>

      {/* Category */}
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
        {product.category}
      </p>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-yellow-500 text-lg">
          ★
        </span>

        <span className="font-medium text-gray-700">
          {product.rating?.toFixed(1)}
        </span>

        <span className="text-gray-500">
          Customer Rating
        </span>
      </div>

      {/* Price */}
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        ₹{product.price}
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-7 mb-6">
        {product.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">

        <Button
          onClick={handleCart}
          color="blue"
        >
          Add to Cart
        </Button>

        <Button
          onClick={handleWishist}
          color="light"
        >
          Add to Wishlist
        </Button>

      </div>

      {/* Product Information */}
      <div className="border-t border-gray-200 mt-8 pt-6">

        <div className="flex justify-between py-2">
          <span className="text-gray-500">
            Category
          </span>

          <span className="font-medium text-gray-800">
            {product.category}
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-gray-500">
            Availability
          </span>

          <span className="text-green-600 font-medium">
            In Stock
          </span>
        </div>

      </div>

    </div>

  </div>

</div>


  )
}

export default View
