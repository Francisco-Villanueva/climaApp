import React from 'react'
import { Simulate } from 'react-dom/test-utils'
import './daysCard.css'
export default function DaysCard({data}) {

  // console.log('DATA = ', data)

  const dd= new Date(data.date)


  const getWeekDay=(num)=>{
    switch (num){
      case '0':{return 'Lun'}
      case '1':{return 'Mar'}
      case '2':{return 'Mie'}
      case '3':{return 'Jue'}
      case '4':{return 'Vie'}
      case '5':{return 'Sab'}
      case '6':{return 'Dom'}

      default:break;
    }
  }

  const dia =  getWeekDay( dd.getDay(1).toString())
  
  console.log('DIA: ', dd.getDay().toString() , ' ', data.date)
  return (
    <div className='dayCard-container'>
      <b>{dia}</b>
      <img src={data.day.condition.icon} alt="" />
      <b> {data.day.maxtemp_c}°</b>
      <p> {data.day.mintemp_c}°</p>
    </div>
  )
}
