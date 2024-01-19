import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[wrapper,{backgroundColor:'black'}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color={weatherType[weatherCondition].backgroundColor} />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          messageOne={`High : ${temp_max}`}
          messageTwo={`Low : ${temp_min}`}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={[description,{color:weatherType[weatherCondition].backgroundColor}]}
        messageTwoStyles={[message,{color:'white'}]}
        messageOne={(weather[0].description).charAt(0).toUpperCase()+ (weather[0].description).slice(1) }
        messageTwo={weatherType[weatherCondition].message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
    // marginTop: StatusBar.currentHeight || 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'white',
    fontSize: 48 // density independent pixels as react native is unitless
  },
  feels: {
    color: 'white',
    fontSize: 30
  },
  highLow: {
    color: 'white',
    fontSize: 20,
    marginHorizontal:10
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    justifyContent:'center',
    alignSelf:'center',
    fontSize: 48
  },
  message: {
    alignSelf:'center',
    fontSize: 30
  }
})
export default CurrentWeather