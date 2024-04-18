import React, { useEffect, useState } from 'react';
import './cart.css';
import EmptyCart from '../assets/empty-cart-5521508-4610092.webp';
const Cart = ({ cartProducts }) => {
  let [products,setProducts]=useState([])
  let [show,setShow]=useState(false)
  let totalPrice=0;
  useEffect
  (()=>{
    setProducts(cartProducts)
  })
  
    if(products.length)
    products.forEach((e)=>{
      totalPrice+=e.quantity*e.price})

  console.log(products);
  const showed=()=>{
      setShow(!show)
  }
  const quantityIncrease=(ID)=>{
    setProducts(products.map((e)=>{
      if(e.id==ID){
        e.quantity=e.quantity+1
      }
      return e;
    }))
  }
  const quantityDecrease=(ID)=>{
    setProducts(products.map((e)=>{
      if(e.id==ID && e.quantity>0){
        
          e.quantity+=-1
        }
      
      return e;
    }))
  }
   
  return (
    <main className="cart">
      
      <h1 onClick={showed}>{!show?"Close":"cart"}({products.length})</h1>
      
      {show && (!products.length ? (
        <img src={`${EmptyCart}`} alt="cart" />
      ) : (
        <section>
          {
            products.map((product) => {
              return (
                <article>
                  
                  <img src={product.image} alt="test" /> 
                  <h3>{product.title.slice(0, 10)}</h3> 
                  <h2><span onClick={()=>quantityDecrease(product.id)}>-</span><span>{product.quantity}</span> <span onClick={()=>quantityIncrease(product.id)}>+</span></h2>
                  <p>{product.quantity*product.price}</p>
                  <button >Delete</button>
                </article>)
            })
          }
          <h1>Total Price:<span>{totalPrice.toFixed(2)}</span></h1>
        </section>
       )
     ) }
     <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </main>
  )
  
}

export default Cart
