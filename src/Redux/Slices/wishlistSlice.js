import { createSlice } from "@reduxjs/toolkit";


 const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
      addTwoWishList:(state,action)=>{
         state.push(action.payload)
      },
   deleteItem:(state,action)=>{
    return  state.filter(item=>item.id!=action.payload)
   }
    }
 })
 export const {addTwoWishList,deleteItem}=wishlistSlice.actions
 export default wishlistSlice.reducer