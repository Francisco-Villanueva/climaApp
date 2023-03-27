import React from 'react'
import './Card2.css'
import DaysCard from './DaysCard'
export default function Card({name, country, forecast, current}) {

  // console.log('CARD => ', name, country, forecast, current)
  return (
    <div className='card-container'>
      <div className='top-card'>
        <div className='left-top'>
          <img src={current.condition.icon} alt="" />
          <div className='extra-data'>
          <b>{current.temp_c} °C</b>
            <p>Humedad: {current.humidity}</p>
            <p>Viento a {current.wind_kph} km/h</p>
            <p>Precipitaciones {current.precip_in}%</p>
          </div>
        </div>
        <div className='right-top'>
          <b>{name}</b>
          <p>{country}</p>
          <p className='fechaHoy'>{current.last_updated}</p>
          <p className='fechaHoy'>{current.condition.text}</p>
        </div>
      </div>
      <div className='bottom-card'>
        
        {forecast.map(e=>(<button className='btn-dayCard'><DaysCard data={e}/></button>))}
      </div>
    </div>
  )
}
