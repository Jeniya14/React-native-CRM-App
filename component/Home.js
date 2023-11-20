import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { ProfileData } from './model/ProfileData'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Home({navigation}) {
  
  return (
    <ScrollView style={styles.container}>
        <View style={styles.containerHead}>
            <Text style={styles.header1}><Text style={styles.header}>Soul</Text >Meet</Text>
        
            <TouchableOpacity style={styles.preferenceButton} onPress={()=>navigation.navigate("Preference")}>
                <Text style={styles.preferenceButtonText} >Set Preference</Text>
            </TouchableOpacity>
        </View>
        {ProfileData.map((profile) => (
            <View key={profile.id} style={styles.profileContainer}>
              <View style={styles.profileInfo}>
               
                <View style={styles.textContainer}>
                  <Text style={styles.profileName}>{profile.name}</Text>
                  <Text style={styles.profileDetail}>{profile.caste}</Text>
                  <Text style={styles.profileDetail1}>{profile.city}</Text>
                 
                  <Text style={styles.profileDetail}>{profile.profession}</Text>
                  <Text style={styles.profileDetail1}>{profile.education}</Text>
                </View>
                <View>
                  <View style={{flex:1,flexDirection:"row",justifyContent:'space-evenly'}}>
                    <Text style={{color:'gray',alignSelf:'center',fontSize:13,fontWeight: 'bold'}}> {profile.age} Years | {profile.height} feet</Text>
                    <TouchableOpacity style={{borderColor:"#F60F54",borderWidth:1,width:30,height:30,alignItems:"center",justifyContent:"center",borderRadius:15}}>
                      <FontAwesome name="bookmark-o" color="#F60F54" size={15} />
                    </TouchableOpacity>
                    
                  </View>
                  <ScrollView horizontal style={{width:200}}>
                    <View style={styles.elevationContainer}><Image source={profile.profilepic} style={styles.profilePic} /></View>
                    <View  style={styles.elevationContainer}><Image source={profile.profilepic2} style={styles.profilePic} /></View>                  
                  </ScrollView>
                </View>
              </View>
              <View style={{flex:1,flexDirection:"row"}}>
              <TouchableOpacity style={styles.Button1} >
                <Text style={styles.buttonText1} onPress={()=>navigation.navigate("Moreinfo", { profileData: profile })}>More info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button2} >
                <Text style={styles.buttonText2}>Connect Request</Text>
              </TouchableOpacity>
              </View>
            </View>
          ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      containerHead:{
        paddingTop:20,
        paddingLeft:20,
        paddingBottom:20,
        justifyContent: 'center',
        backgroundColor:'white',
      display:'flex',
      alignItems:'baseline',
      flexDirection:'row',
      justifyContent:'space-between'
      },
      header1:{
        color:"black",
        fontSize: 20,
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'black',
      },
     preferenceButton:{
        width:'50%',
       alignSelf:'flex-end'
      },
     preferenceButtonText:{
        color: '#F90F55',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop:5,
      },

      profileContainer: {
        
        marginTop: 10,
        backgroundColor:'white',
        paddingVertical:15
      },
      profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
      },
      profilePic: {
        width: 100,
        height: 100,
        borderRadius:5,
      },
      elevationContainer: {
        backgroundColor:"white",
        elevation: 10, // Adjust the elevation level as needed
        shadowColor: '#F60F54',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
     
        borderRadius:5, // Add margin as needed to separate the images
        marginHorizontal:5,
        marginVertical:10
        
      },
      textContainer: {
        marginHorizontal: 15,
        marginVertical:5 
      },
      profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'black',
        paddingBottom:10,
        margin:0,
        paddingTop:0
      },
      profileDetail: {
        fontSize: 13,
        color: 'gray',
        fontWeight: 'bold',
        lineHeight:21
      },
       profileDetail1: {
        paddingBottom:10,
        fontSize: 13,
        color: 'gray',
        fontWeight: 'bold',
      },
      Button1:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        marginHorizontal: 10,
        borderColor:'#F60F54',
        borderWidth:1,
   
        height:40,
      },
      buttonText1:{
        color: '#F60F54',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      Button2:{
        backgroundColor: '#F60F54',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        height:40,
        marginHorizontal: 10,
        elevation: 10, // Adjust the elevation level as needed
        shadowColor: '#F60F54',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      buttonText2:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      }
})