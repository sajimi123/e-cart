import { createSlice } from "@reduxjs/toolkit";
 const cartSlice=createSlice({
name:'cart',
initialState:[],
reducers:{
    //actions add to cart, increment cart, decreament cart ,remove cart
 addToCart:(state,action)=>{
    const existingItem=state.find(item=>item.id==action.payload.id)
    if(existingItem){
         existingItem.quantity+=1;
         existingItem.totalPrice=existingItem.price*existingItem.quantity
    }else{
         state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
        }
},
 removeItem:(state,action)=>{
    return  state.filter(item=>item.id!=action.payload)
   },
   incrementCart:(state,action)=>{
    const existingItem=state.find(item=>item.id==action.payload.id)
    if(existingItem){
         existingItem.quantity+=1;
         existingItem.totalPrice=existingItem.price*existingItem.quantity
    }
   },
   decrementCart:(state,action)=>{
    const existingItem=state.find(item=>item.id==action.payload.id)
    if(existingItem){
    if(existingItem.quantity>1){
         existingItem.quantity-=1;
         existingItem.totalPrice=existingItem.price*existingItem.quantity
    }}
},emptyCart:(state)=>{
     return[]
}
}
 })
 export const {addToCart,removeItem,incrementCart,decrementCart,emptyCart}=cartSlice.actions
 export default cartSlice.reducer