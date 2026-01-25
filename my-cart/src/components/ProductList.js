import React from 'react';
import Product from './Product.js'
export default function ProductList(props) {
  return (
      props.ProductList.map((product,i)=>{
        console
        return < Product product={product} key={i}/>
      })
  )
}

