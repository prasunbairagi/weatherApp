import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
// import { WEATHER_API_KEY } from '@env'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0e052a31b882a6068f220ab78c25fcbd&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError('Could not fetch Weather')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])

  return [loading, error, weather]
}

export default useGetWeather