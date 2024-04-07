import { useEffect, useState } from "react";
import { WEATHER_API_KEY } from "../constants/weather";
import useGetDate from "../utils/useGetDate";
// import { useUser } from "../context/UserContext";

const WeatherCard = () => {

    // const [place, setPlace] = useState("")
    // const [temp, setTemp] = useState("")
    const [status, setStatus] = useState("")
    // const [min, setMin] = useState("")
    // const [max, setMax] = useState("")
    // const [wind, setWind] = useState("")
    // const [humidity, setHumidity] = useState("")
    // const [visibility, setVisibility] = useState("")
    const [weather, setWeather] = useState("")
    const {day, dateNum, month, year} = useGetDate()
    // const {user} = useUser()

    useEffect(()=>{
        const fetchData = async()=>{
            const respone = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=1261481&appid=${WEATHER_API_KEY}`)
            const json = await respone.json()
            setWeather(json)
            setStatus(json?.list[0])
        }
        fetchData()
    }, [])
    if(weather === null) return <h1>Loading</h1>
    if(status.length == 0 ) return <h1>Loading</h1>

    const place = weather?.city?.name
    const clouds = status?.weather[0]?.description
    const minTempData = status?.main?.temp_min
    const maxTempData = status?.main?.temp_max
    const temp = status?.main?.temp
    const wind = status?.wind?.speed
    const humidity = status?.main?.humidity;
    const visibility = status?.visibility
    return (
        <>
      <h1 className="text-center my-10 text-2xl font-bold">Hello !</h1>
    <div className=" flex items-center justify-center">
      <div className="flex flex-col bg-white rounded p-4 border-2 shadow-lg w-full max-w-xs">
        <div className="font-bold text-xl">{place}</div>
        <div className="text-sm text-gray-500">{day} {dateNum} {month} {year}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{Math.floor(temp-273.15)}°</div>
          <div className="flex flex-col items-center ml-6">
            <div>{clouds}</div>
            <div className="mt-1">
              <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
              <span className="text-sm font-light text-gray-500">{Math.ceil(maxTempData-273.15)}°C</span>
            </div>
            <div>
              <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
              <span className="text-sm font-light text-gray-500">{Math.floor(minTempData-273.15)}°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{wind}k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{humidity}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{visibility/1000}km</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default WeatherCard;
