import React from 'react'

;

function Card({nombre,imagesource,fechanacimiento,clubes}){

  return (
    <div className="card">
      <img src={imagesource} alt=""/>
      <div className="card-body">
        <h1 className="card-title">{nombre}</h1>
      
  <p>{fechanacimiento}</p>
  <p>{clubes}</p>
  <small>late</small>
      </div>
    </div>
  )
}

export default Card;