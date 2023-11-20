import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text style={{ color: '#F60F54', fontSize: 24 , fontWeight: 'bold'}}> <Feather name="arrow-left" size={22} color='#F60F54' /></Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20,color:'black',paddingLeft:30 }}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0, 
    marginVertical:20,
    paddingHorizontal:10,
    backgroundColor:'white',
  }
})

export default CustomHeader;
