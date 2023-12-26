import { useEffect, useState } from "react";
import {View,StyleSheet} from 'react-native'
import WeatherScreen from "./WeatherScreen";


export default function WeatherForCity({route}){
    const[weatherDes,setWeatherDes]= useState("")
    const[icon, setIcon]=useState("")
    const [temp, setTemp] = useState(0);
    const [feelsLike,setFeelsLike ] = useState(0);
    const { city } = route.params;
   
    cityWeather = city;
    console.log(cityWeather)
    time = new Date().toLocaleString(); 
    
    APIKEY='Your Key'
    useEffect(()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
        fetch(url).then(response => response.json()
        .then((data) => {
        console.log(data)
        setWeatherDes(data.weather[0].main)
        setIcon(data.weather[0].icon)
        setTemp(data.main.temp)
        setFeelsLike(data.main.feels_like)
         })
         .catch(error => console.log('json error')))
         .catch(error => console.log('netwoek error'))
        },[])


        return(
            <View style={styles.container} >
                <WeatherScreen 
                temp= {temp}
                icon= {icon}
                feelsLike={feelsLike}
                weatherDes ={weatherDes}
                time = {time}
                cityWeather= {cityWeather}
                ></WeatherScreen>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      },
    });