import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import './CardsCont.css'

export default function CardsCont({ciudades}) {
  
  return (
    <div className='cards-container'>
      {/* { ciudades.map((m)=>(
      <Card 
      name ={m.location.name}
      country ={m.location.country}
      maxT={m.forecast.forecastday[0].day.maxtemp_c}
      minT={m.forecast.forecastday[0].day.mintemp_c}
      currentTemp = {m.current.temp_c}
      condition = {m.current.condition.text}
      imgCond = {m.current.condition.icon}
      />
      ))
      } */}

      {ciudades?
      <Card 
      name= {ciudades.location.name}
      country={ciudades.location.country}
      forecast={ciudades.forecast.forecastday}
      current={ciudades.current}
      /> 
      :'no citiy'}
        
     
    

    </div>
  )
}


// tengo la data de las ciudades, ya las llevé a todo los componentes
// Tengo que hacer que se reenderice cada ciudad cada vez que hago un SEARCH