import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getApiInfo } from '../helpers'
import './Navbar.css'
import logo from '../imgs/logo.png'

export const citiesList = []
export default function Navbar({onSearch}) {

   const [city, setCity]= useState('')
    
   const handleInput =(e)=>{
    setCity(e.target.value)
    // console.log(city)
   }
   const handleSearch =(e)=>{
    onSearch(city)
   }
   const handleSubmit = (e)=>{
    e.preventDefault()
    setCity('')
   }

  
   
  return (
    <div className='navBar-container'>
        <div>  
            <img src={logo} alt='app-logo'/>
        </div>
        <div className='inputs'>
            <form onSubmit={e=>handleSubmit(e)}>
                <input placeholder='Buscar ciudad ...' type="text" onChange={(e)=>handleInput(e)} value={city}/>
                <button type='submit' onClick={handleSearch}>  </button>
            </form>
        </div>
    </div>
  )
}
