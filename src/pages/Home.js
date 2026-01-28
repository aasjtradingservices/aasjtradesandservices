import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="container">
      <section className="card" style={{padding:40,background:'linear-gradient(180deg,var(--green-50),#fff)'}}>
        <h1 style={{fontSize:34}}>Build, Rent, Buy & Sell Anything</h1>
        <p>Find cars, houses, construction materials, and professional services all in one place.</p>
        <div style={{marginTop:20}}>
          <Link to="/supermarket"><button className="button">Shop Groceries</button></Link>
          <Link to="/construction" style={{marginLeft:12}}><button className="button" style={{background:'transparent',border:'1px solid var(--green-500)',color:'var(--green-600)'}}>Request Construction Service</button></Link>
        </div>
      </section>

      <section style={{marginTop:32}}>
        <h2>Supermarket</h2>
        <div className="grid">
          <div className="card">Product placeholder</div>
          <div className="card">Product placeholder</div>
          <div className="card">Product placeholder</div>
        </div>
      </section>

      <section style={{marginTop:32}}>
        <h2>Explore Our Services</h2>
        <div className="grid">
          <div className="card">Supermarket</div>
          <div className="card">Rentals</div>
          <div className="card">Construction</div>
        </div>
      </section>
    </div>
  );
}
