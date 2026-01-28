import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Header(){
  const navigate = useNavigate();
  const handleSignOut = async ()=>{ try{ await signOut(auth); navigate('/'); }catch(e){console.error(e)} };
  return (
    <header style={{borderBottom:'1px solid #eee'}}>
      <div className="container" style={{display:'flex',alignItems:'center',gap:16}}>
        <Link to="/"><h2 style={{margin:0,color:'var(--green-600)'}}>AASJ Trading Services</h2></Link>
        <div style={{flex:1}}>
          <input placeholder="Search for anything..." style={{width:'60%',padding:10,borderRadius:24,border:'1px solid #eee'}}/>
          <button className="button" style={{marginLeft:8}}>Search</button>
        </div>
        <nav>
          <Link to="/supermarket" style={{marginRight:12}}>Supermarket</Link>
          <Link to="/construction" style={{marginRight:12}}>Construction</Link>
          <Link to="/admin" style={{marginRight:12}}>Admin</Link>
          <button className="button" onClick={handleSignOut} style={{background:'var(--green-500)'}}>Sign Out</button>
        </nav>
      </div>
    </header>
  );
}
