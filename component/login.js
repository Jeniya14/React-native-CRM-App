import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 

  return (
    <ScrollView style={styles.container}>
        <View style={styles.containerHead}>
        <Text style={styles.header1}>Sign in to</Text >
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
     
        <Text style={styles.label}>Shssss, my Password is</Text>
       <View style={styles.inputbox}>
       <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        placeholderTextColor="#B5AAAD" 
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        required
      />
       <TouchableOpacity  onPress={()=>navigation.navigate("Forgot")}>
                <Text style={{color:"#F60F54",}}>Forgot?</Text>
              </TouchableOpacity>
       </View>
     
      <TouchableOpacity style={styles.loginButton}onPress={()=>navigation.navigate("About")}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.bottomlabel}> Oh ! Not Register yet?</Text>

      <TouchableOpacity style={styles.registerButton} onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.registerButtonText} >Register Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'white',
    padding:10,
    
  },
  containerHead:{
    marginTop:30,
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
    marginLeft: 10,
    marginTop: 20,
    marginBottom:10,
    color: 'black',
    fontWeight: '600',

  },
  inputbox:{
    borderBottomColor:'#B5AAAD',
    borderBottomWidth:1,
    marginBottom: 20,
    marginHorizontal: 10,
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
  loginButton: {
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
  bottomlabel:{
    marginLeft: 10,
    marginTop: 20,
    marginBottom:10,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  registerButton:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '95%',
    marginHorizontal: 10,
    borderColor:'#F60F54',
    borderWidth:1,
    marginVertical:20,
    height:50,
  },
  registerButtonText:{
    color: '#F60F54',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop:5,
  }
});

export default LoginScreen;
