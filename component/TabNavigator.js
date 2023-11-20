import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import SavedProfile from './SavedProfile';
import Profile from './Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarInactiveTintColor:'#B5AAAD',
      tabBarActiveTintColor:'#F60F54'
      }}>
    <Tab.Screen name="Home" component={Home} options={{
       tabBarButton: CustomTabButton,
       tabBarIcon:({color,size})=>(
        <FontAwesome5 name="user-friends" color={color} size={19}/>
        ),
        tabBarStyle: { paddingHorizontal:20 },
      }}
      />
    <Tab.Screen name="SavedProfile" component={SavedProfile}  options={{ 
       tabBarButton: CustomTabButton,
       tabBarIcon:({color,size})=>(
        <FontAwesome name="bookmark" color={color} size={19}/>
        ),
        tabBarStyle: { paddingHorizontal:20 },
      }} 
       />
    <Tab.Screen name="Chat" component={Chat}  options={{
      tabBarButton: CustomTabButton,
      tabBarBadge:3,
      tabBarBadgeStyle:{fontSize:14},
      tabBarIcon:({color,size})=>(
        <Entypo name="chat" color={color} size={19}/>
        ),
        tabBarStyle: { paddingHorizontal:20 },
      }}
      />
    <Tab.Screen name="Profile" component={Profile}   options={{
      tabBarButton: CustomTabButton,
      tabBarIcon:({color,size})=>(
      <FontAwesome name="user" color={color} size={19} />
      ),
      tabBarStyle: { paddingHorizontal:20 },
    }}
      
      />
  </Tab.Navigator>
  )
}

const CustomTabButton = (props) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [props.style, { borderTopColor: '#F60F54', borderTopWidth: 3}]
        : props.style
    }
  />
);
export default TabNavigator