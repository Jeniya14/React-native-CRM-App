import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) => {
    const [getSelectionMode,setSelectionMode]= useState(selectionMode);
    const updateSwitch=(value)=>{
        setSelectionMode(value)
        onSelectSwitch(value)
    }
  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity activeOpacity={1} onPress={()=>{updateSwitch(1)}} >
                <Text style={{color:getSelectionMode ===1 ? '#F60F54' : 'black',fontSize: 17,padding:10,fontWeight:"bold",marginLeft:5 }}>{option1}</Text>
            </TouchableOpacity>
            {getSelectionMode === 1 && <View style={styles.line} />} 
        </View>
        <View style={{marginLeft:30}}>
            <TouchableOpacity activeOpacity={1} onPress={()=>{updateSwitch(2)}} >
                <Text style={{color:getSelectionMode ===2 ? '#F60F54' : 'black',fontSize: 17,padding:10,fontWeight:"bold",marginLeft:5  }}>{option2}</Text>
            </TouchableOpacity>
            {getSelectionMode === 2 && <View style={styles.line} />} 
        </View>
    </View>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({
    container:{
        height:55,
        backgroundColor:'#E4E4E4',
        width:'100%',
        flexDirection:'row',
       
    },
    line: {
        width: '40%', 
        borderBottomWidth: 3,
        borderBottomColor: '#F60F54', 
        marginTop:5, 
       marginLeft:20
      },
})