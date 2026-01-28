import React from 'react';

export default function BookingModal({service,onClose}){
  if(!service) return null;
  return (
    <div style={{position:'fixed',left:0,top:0,right:0,bottom:0,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',padding:24,width:480,borderRadius:8}}>
        <h3>Book {service.title}</h3>
        <form onSubmit={(e)=>{e.preventDefault(); alert('Booking confirmed'); onClose();}}>
          <label>Full name</label>
          <input required style={{width:'100%',padding:8,marginBottom:8}} />
          <label>Contact phone</label>
          <input required style={{width:'100%',padding:8,marginBottom:8}} />
          <label>Preferred date</label>
          <input type="date" style={{width:'100%',padding:8,marginBottom:8}} />
          <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}>
            <button className="button" type="submit">Confirm Booking</button>
            <button onClick={onClose} type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
