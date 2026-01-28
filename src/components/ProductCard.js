import React from 'react';

export default function ProductCard({product,onAdd}){
  return (
    <div className="card">
      <img src={product.image||'/placeholder.png'} alt={product.title} style={{width:'100%',height:160,objectFit:'cover',borderRadius:8}} />
      <h4>{product.title}</h4>
      <div style={{color:'var(--green-600)',fontWeight:700}}>GHS {product.price}</div>
      <div style={{marginTop:10}}>
        <button className="button" onClick={()=>onAdd(product)}>Add to Cart</button>
        <button style={{marginLeft:8}}>View</button>
      </div>
    </div>
  );
}
