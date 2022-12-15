import React from 'react';


function Card({nombre,imagesource,fechanacimiento,clubes,gol,cantidad}){

  return (
    <div className="card">
      
      <img src={imagesource} alt=""/>
      
      <div className="card-body">
        <div className="nom">
        <h1 className="card-title">{nombre}</h1>
        
      </div>  
      
  <p className="naci">{fechanacimiento}</p>
  <p className="clu">{clubes}</p>
  <img className='gol' src={gol} alt=""/>
  <p className='cantidad'>{cantidad}</p>
  
      </div>
    </div>
  )
}

export default Card;