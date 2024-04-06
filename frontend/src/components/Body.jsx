import { useEffect } from "react"
import WeatherCard from "./WeatherCard"
import { useNavigate } from "react-router-dom"


const Body = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    try {
      const fetchData = async()=>{
        
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:3000/home",{
          method:"GET",
          headers:{
            "Content-Type": 'application/json',
            "Authorization": `${token}`
          }
        })
        console.log(response)
        if(!response.ok){
          console.log("eroor")
          navigate('/')
          throw new Error("failed to fetch data")
        }
        const data = await response.json()
        if(data.error){
          navigate("/")
          return
        }
      }
      fetchData()
    } catch (error) {
      navigate("/")
    }
    
  })
  return (
    <div>
     <WeatherCard/>
    </div>
  )
}

export default Body
