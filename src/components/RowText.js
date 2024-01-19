import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const RowText = (props) => {
    const{containerStyles,messageOneStyles,messageTwoStyles,messageOne,messageTwo}=props
  return (
    <View style={containerStyles}>
          <Text style={messageOneStyles}>{messageOne}</Text>
          <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})
export default RowText