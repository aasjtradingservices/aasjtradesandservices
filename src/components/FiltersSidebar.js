import React from 'react';

export default function FiltersSidebar({filters, onChange}){
  return (
    <aside style={{width:260}}>
      <div className="card">
        <h4>Filters</h4>
        <div>
          <label>Price Range</label>
          <input type="range" min="0" max="5000" onChange={(e)=>onChange({price:e.target.value})} />
        </div>
        <div>
          <label>Brand</label>
          <select onChange={(e)=>onChange({brand:e.target.value})}>
            <option value="">All</option>
            <option value="BrandA">Brand A</option>
            <option value="BrandB">Brand B</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
