import logo from './logo.svg';
import './App.css';
import { getApiInfo, getDaysData } from './helpers';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CardsCont from './components/CardsCont';
function App() {

  // const [cities, setCities] = useState([])

  // const onSearch = async (city)=>{
  //   const ciudad= await getApiInfo(city)
  //   console.log('onSearch :==>  ', ciudad)
  //   setCities(oldCities => [...oldCities, ciudad])
  // }


  const[cityData, setCityData]=useState('')
  const onSearch = async(city)=>{
    const ciuda = await getDaysData(city);
    setCityData(ciuda)
  }
  return (
    <div className="App">
        <Navbar onSearch={onSearch}/>
        <CardsCont ciudades={cityData}/>
    </div>
  );
}

export default App;

//DEJO ACÁ

/* 
    Tengo que setear los 7 días consecutivos al día de hoy, ver de usar el objeto Date()
    El date lo tengo que poner en formato "YYYY-MM-DD"

    Reconfigurar el componente  Card para ver bien la data
    Que la información sea dinámica:
      -> cliquear en tal día y ver la data de ese día
      -> Que tenga un "focus" en el día de hoy (ej, si es domingo, que el día dom este focus por default)
    
    Reconfigurar el navBar para que busque en torno a los 7 días.
*/