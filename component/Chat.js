import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View  style={styles.container}>
      <Text style={{color:'black'}}>Chat</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container:{
      flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})