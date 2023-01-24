
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Display } from './display'
import './weaher.css'

interface data {
    name:string,
    main:{
        feels_like:number
        humidity: number
        pressure: number
        temp: number
        temp_max:number
        temp_min: number
    },
    weather:weather[],
    wind:{ 
        deg: number
        speed: number
    }
    sys :{
        country: string
    }
}
interface weather{
    description: string,
    icon: string,
    id: number,
    main: string,
}

export const WeatherInterFace = ():JSX.Element => { 

const [weatherData,setWeatherData] = useState<data[]>([])
const [countaryName,setCountaryName] = useState<string>('')
const [clicked,setClicked] = useState<boolean>(false)
console.log(countaryName)

    const handleClick = () =>{
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countaryName}&appid=2f65f53e319e9993b628e1e8e936c4fb`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setWeatherData([data])
          //console.log(weatherData)
            setClicked(true)
        })
    }
        return (
        <>
    <div>
        <h1 className="text-center text-capitalize my-3">WeatherCheck</h1>
        <div className='container d-flex flex-row justify-content-center'>
            <input type='text' value={countaryName} onChange={(e:ChangeEvent<HTMLInputElement>)=>setCountaryName(e.target.value)}  className="form-control border border-primary w-50 "/>   
            <button onClick={handleClick} className="btn btn-info">Search</button>
        </div>
        {!clicked ? <Display/> :(<>
       {weatherData.map((data) => (
        <div key={data.name} className='container'>
            <h2 className='fs-1 text-md my-3 bg-secondary d-inline-block p-3 rounded-pill'>{data.name}</h2>
            <div className='background'>   
                <div className='box one'>
                    <h3>Humidity</h3>
                    <p>{data.main.humidity}%</p>
                </div>

                <div className='box two'>
                    <h3>Pressure</h3>
                    <p>{data.main.pressure} hPa</p>
                </div>

                <div className='box three'>
                    <h4>Temperature<i className="bi bi-thermometer"></i></h4>
                    <p>{(data.main.temp - 273).toFixed(2)} &deg;C</p>
                    <span>( max: {(data.main.temp_max - 273).toFixed(2)}  &deg;C </span> - <span>min: {(data.main.temp_min - 273).toFixed(2)}  &deg;C )</span>
                </div>

                <div className='box four'>
                    <h4>{data.weather[0].main} <i className="bi bi-cloud"></i></h4>
                    <p>{data.weather[0].description}</p>
                </div>

                <div className='box five'>
                    <h4>Wind <i className="bi bi-wind"></i></h4>
                    <p>{data.wind.deg}  &deg;</p>
                    <p>{data.wind.speed} mph</p>
                </div>

                <div className='box six'>
                    <h4 className='titleDiv'>Region -  {data.sys.country}</h4>
                    <div className='imgDiv'>
                        <img src={`https://flagsapi.com/${data.sys.country}/flat/64.png`} alt='countary' className='pht'/>
                    </div> 
                </div>
         </div>
        </div>
        ))}</>)}
 </div>
 </>
  )
}
