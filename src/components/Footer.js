import React from 'react';

export default function Footer(){
  return (
    <footer style={{background:'#fff',padding:'32px 0',marginTop:40}}>
      <div className="container" style={{display:'flex',gap:40,flexWrap:'wrap'}}>
        <div style={{flex:1}}>
          <h3>Aasj Trading Services</h3>
          <p>Your one-stop solution for quality products and professional services.</p>
        </div>
        <div>
          <h4>Company</h4>
          <ul style={{listStyle:'none',padding:0}}>
            <li>About Us</li>
            <li>Our Portfolio</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul style={{listStyle:'none',padding:0}}>
            <li>Construction</li>
            <li>Supermarket</li>
            <li>Rentals</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
