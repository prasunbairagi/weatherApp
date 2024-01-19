import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import { StatusBar } from 'react-native'

const Tab = createBottomTabNavigator()
const Tabs = ({ weather }) => {
  return (
    <>
    <StatusBar
        backgroundColor="black"  // Set your desired background color
        barStyle="white" // Set the content (text) color
    />
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:
          weatherType[weather.list[0].weather[0].main].backgroundColor,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black'
        },
        headerStyle: {
          backgroundColor: 'black'          
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: weatherType[weather.list[0].weather[0].main].backgroundColor
        },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name={'Current'}
        // component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={
                focused
                  ? weatherType[weather.list[0].weather[0].main].backgroundColor
                  : 'white'
              }
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        // component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={
                focused
                  ? weatherType[weather.list[0].weather[0].main].backgroundColor
                  : 'white'
              }
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        //component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={
                focused
                  ? weatherType[weather.list[0].weather[0].main].backgroundColor
                  : 'white'
              }
            />
          ),
          title: 'My City'
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
    </>
  )
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// })
export default Tabs