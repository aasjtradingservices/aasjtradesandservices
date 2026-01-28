import React from 'react';

export default function ServiceCard({service,onBook}){
  return (
    <div className="card">
      <h4>{service.title}</h4>
      <p style={{color:'var(--muted)'}}>{service.description}</p>
      <div style={{marginTop:10}}>
        <button className="button" onClick={()=>onBook(service)}>Book Now</button>
      </div>
    </div>
  );
}
