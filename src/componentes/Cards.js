import React from 'react'
import Card from './Card'
import emilianomartinez from './emilianomartinez.png';
import francoarmani from './francoarmani.png';
import marcosacuña from './marcosacuna.png';
import nahuelmolina from './nahuelmolina.png';
import nicolasotamendi from'./nicolasotamendi.png';
import germanpezzella from './germanpezzella.png';
import cristianromero from './cristianromero.png';
import rodrigodepaul from './rodrigodepaul.png';
import angeldi from './angeldimaria.png';
import giova from './giova.png';
import leanpare   from './leanpare.png';
import guidorodriguez   from './guidorodriguez.png';
import  julial  from './julial.png';
import  joaco  from './joaco.png';
import  alego  from './alego.png';
import nicogos   from './nicogos.png';
import lauty   from './lauty.png';
import lio   from './lio.png';







const cards =[
    { id:1,
     nombre: 'Emiliano Martinez',
     fechanacimiento:"02-09-1992",
     clubes:"Aston Villa F.C",
     image:emilianomartinez,
     }
    ,{
      id:2,
        nombre:'Franco Armani',
        fechanacimiento:"16-10-1986",
        clubes:"Carp",
        image:francoarmani,        
     },{
        id:3,
        nombre:'Marcos Acuña',
        fechanacimiento:"28-10-1991",
        clubes:"sevilla fc",
        image:marcosacuña,
     },{id:4,
        nombre:'Nahuel Molina',
        fechanacimiento:"06-04-1998",
        clubes:"sevilla fc",
        image:nahuelmolina,

     },{ id:5,
        nombre: 'Nicolas Otamendi',
        fechanacimiento:"12-02-1988",
        clubes:"Aston Villa F.C",
        image:nicolasotamendi,
        }
       ,{
         id:6,
           nombre:'German Pezzela',
           fechanacimiento:"27-06-1991",
           clubes:"Carp",
           image:germanpezzella,        
        },{
           id:7,
           nombre:'Cristian Romero',
           fechanacimiento:"27-04-1998",
           clubes:"sevilla fc",
           image:cristianromero,
        },{id:8,
           nombre:'Rodrigo De Paul',
           fechanacimiento:"24-05-1994",
           clubes:"sevilla fc",
           image:rodrigodepaul,
   
        },{
         id:9,
         nombre:'Angel Di Maria',
         fechanacimiento:"14-02-1988",
         clubes:"sevilla fc",
         image:angeldi,
      },{id:10,
         nombre:'Giovani Lo Celso',
         fechanacimiento:"09-05-1996",
         clubes:"sevilla fc",
         image:giova,
 
      },{id:11,
         nombre:'Leandro Paredes',
         fechanacimiento:"29-06-1994",
         clubes:"Sevilla fc",
         image:leanpare,
 
      },{id:12,
         nombre:'Guido Rodriguez',
         fechanacimiento:"12-05-1994",
         clubes:"sevilla fc",
         image:guidorodriguez,
 
      },{
       id:13,
       nombre:'Julian Alvarez',
       fechanacimiento:"31-01-2000",
       clubes:"sevilla fc",
       image:julial,
    },{id:14,
       nombre:'Joaquin Correa',
       fechanacimiento:"13-08-1994",
       clubes:"sevilla fc",
       image:joaco,

    },{id:15,
       nombre:'Alejandro Gomez',
       fechanacimiento:"15-02-1988",
       clubes:"sevilla fc",
       image:alego,

    },{
      id:16,
      nombre:'Nicolas Gonzales',
      fechanacimiento:"06-05-1998",
      clubes:"sevilla fc",
      image:nicogos,
   },{id:17,
      nombre:'Lautaro Martinez',
      fechanacimiento:"22-08-1997",
      clubes:"sevilla fc",
      image:lauty,

   },{id:18,
      nombre:'Lionel Messi',
      fechanacimiento:"24-05-1987",
      clubes:"sevilla fc",
      image:lio,

   }
]

function Cards() {
    
  return (
  <div className="container d-flex justify-content-center vh-100 ">
    <div className="row">
          {
            cards.map(card=> (
                <div className="col-lg-4" key={card.id}>
               <Card nombre={card.nombre} 
                     imagesource={card.image} 
                     fechanacimiento={card.fechanacimiento} 
                     clubes={card.clubes}/>
                       
                </div>
                      ))
                        }
      </div>
       </div>
  )
  }

export default Cards;