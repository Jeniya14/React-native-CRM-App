import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity,StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomSwitch from './CustomSwitch';
const Moreinfo = ({ route,navigation }) => {
  const { profileData } = route.params;

 
  const carouselData = [
    { image: profileData.profilepic2},
    { image: profileData.profilepic },
    { image: profileData.profilepic3 },
   
    // Add more images if needed
  ];

  
  const [activeIndex, setActiveIndex] = useState(0);
  const [info,setInfo]=useState(1)
  const onSelectSwitch=(value)=>{
    setInfo(value)
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          onScroll={(event) => {
            // Calculate the active index based on the scroll position
            const offset = event.nativeEvent.contentOffset.x;
            const imageWidth = 412; // Adjust the width to match your images
            const newIndex = Math.round(offset / imageWidth);
            setActiveIndex(newIndex);
          }}
          pagingEnabled={true}
        >
          {carouselData.map((item, index) => (
            <Image key={index} source={item.image} style={styles.carouselImage} />
          ))}
        </ScrollView>

           <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.goBack()}>
            <Feather name='arrow-left' color='white' size={22}/>
           </TouchableOpacity>
      </View>

         <View style={styles.container2}>
               <View style={styles.paginationContainer}>
                  {carouselData.map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.paginationDot,
                        index === activeIndex && styles.paginationActiveDot,
                      ]}
                    />
                  ))}
              </View>

              <View style={{display:'flex',flexDirection:'row',width:390,justifyContent:'space-between'}}>
                <View>
                  <Text style={styles.carouselName}>{profileData.name}</Text>
                  <Text style={{color:'#E4DDDD',fontSize:15, marginLeft:18,textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4}}> {profileData.age} Years | {profileData.height} feet</Text>
                </View>
                <TouchableOpacity style={{borderColor:"white",borderWidth:1,width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:20}} >
                      <FontAwesome name="bookmark-o" color="white" size={18} />
                </TouchableOpacity>
              </View>
             
      </View>
      <View >
        <CustomSwitch selectionMode={1} option1='Personal Info' option2="Expectation" onSelectSwitch={onSelectSwitch}/>
      </View>
     
      {info == 1 &&
        <View style={styles.container3}>
          <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed justo suscipit, at congue arcu tincidunt. Fusce ac dui eu leo aliquet malesuada.</Text>

          <View style={styles.flex}>
            <Text style={styles.title}>Caste</Text>
            <Text style={styles.text}> {profileData.caste}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.title}>Education</Text>
            <Text style={styles.text}> {profileData.education}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.title}>Profession</Text>
            <Text style={styles.text}> {profileData.profession}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.title}>Income</Text>
            <Text style={styles.text}> ${profileData.income} per month</Text>
          </View>
        </View>
        
       
       }
      {info == 2 && 
        <View style={styles.container3}>
            <Text style={{color:'black'}}>Expectation</Text>
        </View>
      }
       <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity style={styles.connectButton} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Connect Request</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer:{
    position:'relative'
  },
  carouselImage: {
    width: 412,
    height: 390,
  },
  carouselName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft:20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4
  },

  container2:{
    position: 'absolute',
    top:290
    
  },
  arrowButton: {
    position: 'absolute',
    top: 50,
    left: 15,
    elevation: 5, // for Android
   
  },
  paginationContainer: {
    flexDirection: 'row',
    marginLeft:17,
    marginTop: 10,
    marginBottom:5
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#E4DDDD', // Inactive dot color
    margin: 5, // Adjust the margin as needed
  },
  paginationActiveDot: {
    backgroundColor: '#F60F54', // Active dot color
  },
  container3:{
    margin:20
  },
  para:{
    color:'black',
    marginBottom:20
  },
  flex:{
    flexDirection:'row',
    marginVertical:5
  },
  title:{
    color:'#8A8A8A',
    fontWeight:'bold',
    fontSize:16,
    width:140
  },
  text:{
    color:'black',
    alignSelf:'center'
  },
   connectButton: {
    backgroundColor: '#F60F54',
     padding: 10,
    width: '100%',
    height:50,       
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingTop:5,
    fontWeight: 'bold',
  },
});

export default Moreinfo;
