import React, {useEffect, useState} from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingModal from '../components/BookingModal';
import { db } from '../firebase';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';

export default function ConstructionServices(){
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(()=>{
    async function load(){
      try{
        const q = query(collection(db,'constructionServices'), orderBy('title'));
        const snap = await getDocs(q);
        const items = snap.docs.map(d => ({id:d.id, ...d.data()}));
        setServices(items);
      }catch(e){
        console.error(e);
      }
    }
    load();
  },[]);

  return (
    <div className="container">
      <h1>All Construction Services</h1>
      <p>Comprehensive solutions for all your building and renovation needs.</p>
      <div className="card">
        <div className="grid">
          {services.map(s=>(
            <ServiceCard key={s.id} service={s} onBook={(svc)=>setSelected(svc)} />
          ))}
        </div>
      </div>
      <BookingModal service={selected} onClose={()=>setSelected(null)} />
    </div>
  );
}
