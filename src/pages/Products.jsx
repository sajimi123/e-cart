import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/productSlice'
import { Button } from 'flowbite-react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

function Products() {
const {loading,allProducts,error}=useSelector(state=>state.productReducer)
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAllProducts())
},[])
  return (
     <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      
      {allProducts.map((item) => (
        <Card
          key={item.id}
          className="max-w-sm overflow-hidden rounded-xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            {item.title}
          </h5>

          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-52 w-full object-cover"
          />

          {/* <p className="text-center text-2xl font-bold text-green-600">
            ₹{item.price}
          </p>

          <p className="text-center">
            Rating: {item.rating} ⭐
          </p> */}

       <Button>  <Link to={`/products/${item.id}`}
            className="mx-auto">
            View more

            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 00-1.414 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link></Button>
        </Card>
      ))}
    </div>
    
  )
}

export default Products
