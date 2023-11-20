import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView  } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Forgot = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <CustomHeader title="Forgot Password" />

      <Text style={styles.para}>Let us know your registered email address and we'll send you password reset instruction </Text>
    
      <View style={styles.inputbox}>
        <View style={{alignSelf:"center"}}>
          <Ionicons name="mail" size={22} color='#F60F54' />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          placeholderTextColor="#B5AAAD" 
          secureTextEntry={true}
          required
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Forgot

const styles = StyleSheet.create({
  para:{
    color :'black',
    textAlign:'center',
    fontSize:18,
    paddingHorizontal:40,
    paddingVertical:100,
    lineHeight:30
  },
  inputbox:{
    marginTop:100,
    borderBottomColor:'#B5AAAD',
    borderBottomWidth:1,
    marginBottom: 20,
    marginHorizontal: 10,
    width: '90%',
    display:'flex',
    flexDirection:'row',

  },
  input: {
    width: '85%',
    height:40,
    borderColor:"transparent",
    marginHorizontal:15,
    borderWidth: 1,
    color:'black',
  },
  submitButton: {
    backgroundColor: '#F60F54',
    padding: 10,
    borderRadius: 5,
    width: '95%',
    height:50,
    marginHorizontal: 10,
    marginVertical:20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingTop:5,
    fontWeight: 'bold',
  },
})