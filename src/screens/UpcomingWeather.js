import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

// const Empty = () =>{

//   return (
// <View>
//   <Text>Sorry no items</Text>
// </View>
//   )
// }
const UpcomingWeather = ({weatherData}) => {
  const { container, image } = styles
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtraxtor={(item) => item.dt_txt}
          // ItemSeparatorComponent={()=> <View style={{backgroundColor:'black', height:2}}/>}
          // ListEmptyComponent={<Empty/>}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black'
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather