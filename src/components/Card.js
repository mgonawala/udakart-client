import React from 'react';

export default function Card({imageUrl, name, category, unitPrice}) {
  return(
      <div className="card" >
        <img src="" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Unit Price: {unitPrice}
            </p>
          </div>
      </div>
  )
}