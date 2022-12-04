import React from 'react';



function Card({nombre,imagesource,fechanacimiento,clubes}){

  return (
    <div className="card">
      <img src={imagesource} alt=""/>
      <div className="card-body"><div className="nom">
        <h1 className="card-title">{nombre}</h1>
        
      </div>
  <p className="naci">{fechanacimiento}</p>
  <p className="clu">{clubes}</p>
  
      </div>
    </div>
  )
}

export default Card;