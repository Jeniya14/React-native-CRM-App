import { View, Text,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from './CustomHeader';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  
  return (
  
    <ScrollView style={styles.container}>
         <CustomHeader title=" Register to" />
          <View style={styles.containerHead}>
            <Image style={styles.logo} source={require('./assets/logo.png')} resizeMode='contain' />
            <Text style={styles.header1}><Text style={styles.header}>Soul</Text >Meet</Text>
        </View>
        <Text style={styles.label}>My Email Address is</Text>
          <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email Address"
            placeholderTextColor="#B5AAAD" 
            onChangeText={(text) => setUsername(text)}
            value={username}
            required
          />
           </View>
        <Text style={styles.label}>My phone number is</Text> 
          <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your phone number"
            placeholderTextColor="#B5AAAD" 
            onChangeText={(text) => setphoneNo(text)}
            value={phoneNo}
            required
          />
           </View>
        <Text style={styles.label}>Set my Password as</Text>
          < View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            placeholderTextColor="#B5AAAD" 
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            required
          />
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.continueButtonText} >Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'white',
      //  padding:10,
    },
    containerHead:{
      marginTop:10,
      marginBottom:40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header1:{
      color:"black",
      fontSize: 24,
    },
    logo: {
      height:90,
      marginBottom: 10,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'black',
    },
    label: {
      marginLeft: 20,
      marginTop: 20,
      marginBottom:10,
      color: 'black',
      fontWeight: '600',
  
    },
    inputbox:{
      borderBottomColor:'#B5AAAD',
      borderBottomWidth:1,
      marginBottom: 20,
      marginHorizontal: 20,
      width: '90%',
      display:'flex',
      flexDirection:'row'
    },
    input: {
      width: '85%',
      height: 40,
      borderColor:'white',
      borderWidth: 1,
      color:'black',
    },
    continueButton:{
      backgroundColor: '#F60F54',
      padding: 10,
      borderRadius: 5,
      width: '95%',
      height:50,
      marginHorizontal: 10,
      marginTop:90,
      marginVertical:20,
    },
    continueButtonText:{
      color: 'white',
      textAlign: 'center',
      paddingTop:5,
      fontWeight: 'bold',
    }
  })