import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,

} from 'react-native';
import Register from './component/Register';
import LoginScreen from "./component/login";
import Forgot from './component/Forgot';
import AddProfile from './component/AddProfile';
import TabNavigator from './component/TabNavigator';
import Preference from './component/Preference';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './component/About';
import Moreinfo from './component/Moreinfo';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer >
    <StatusBar backgroundColor={"#B5AAAD"} />
    <Stack.Navigator >
      {/* <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name='Register' component={Register} options={{ 
         header: () => null,
      }}/>
      <Stack.Screen name='Forgot' component={Forgot} options={{ 
         header: () => null,
      }}/>
       <Stack.Screen name='About' component={About} options={{ 
         header: () => null,
      }}/>
      <Stack.Screen name='AddProfile' component={AddProfile} options={{ 
         header: () => null,
      }}/> */}
      <Stack.Screen name='Home1' component={TabNavigator} options={{ 
         header: () => null,
      }}/>
       <Stack.Screen name='Preference' component={Preference} options={{ 
         header: () => null,
      }}/>
      <Stack.Screen name='Moreinfo' component={Moreinfo} options={{ 
         header: () => null,
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
 
  )
}
const styles = StyleSheet.create({
  container:{
     flex:1,
},
})