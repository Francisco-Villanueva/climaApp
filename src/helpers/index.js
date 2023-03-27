import axios from 'axios'

const API_KEY= '3bd5854782964590a61200837232001'
export async function getApiInfo(city){
    const resp = await axios.get (`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
    console.log(resp.data)
    return resp.data
}

export async function getDaysData (city){
 


        const resp = await axios.get (`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
        console.log('DAYS DATA =>  ', resp.data)

    
    return resp.data
}
