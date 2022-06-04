import React, {useState} from "react"
import axios from "axios"

import Context from "../Context"

import Header from "./Header"
import Content from "./Content"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"

const Main = () => {
  const [weather, setWeather] = useState()
  const api_call = async e => {
    e.preventDefault()
    const API_KEY = "267641aa7a40af45352c78f0800476f3"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=${API_KEY}&units=metric`
  const request = axios.get(url)
  const response = await request
    setWeather(response.data.main)
  }
  weather && console.log(weather)
  return (
    <div className="main">
    <Header/>
      <Content>
      <Context.Provider value={{api_call, weather}}>
      <WeatherSearch/>
       { weather && <WeatherData/> }
      </Context.Provider>
      </Content>
    </div>
  )
}
  
  export default Main