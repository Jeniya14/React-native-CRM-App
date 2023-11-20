import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from './CustomHeader';

export default function AddProfile({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(Array(6).fill(null))

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const newImage = { uri: response.uri };
        const updatedImages = [...selectedImage];
        const firstEmptyIndex = updatedImages.indexOf(null);
        
        if (firstEmptyIndex !== -1) {
          updatedImages[firstEmptyIndex] = newImage;
          setSelectedImage(updatedImages);
        }
      }
    });
  };

  const deleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <ScrollView style={styles.container}>
       <CustomHeader title="Add profile pictures" />
      <Text style={styles.para}>As per the survey 79.50% of people select profile based on the picture you set as the profile picture. So upload your best up to 6 photos.</Text>

      <View style={styles.imagesContainer}>
        {selectedImage.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            {image ? (
              <>
                <Image source={image} style={styles.image} />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteImage(index)}
                  accessibilityLabel="Delete Image"
                >
                  <Icon name="trash" size={20} color="red" />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={selectImage}
                accessibilityLabel="Select Image"
              >
                <Icon name="camera" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:'baseline'}}>
        <Text style={styles.heading}> Short bio </Text><Text style={{color:'gray'}}>(Optional)</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Describe yourself in few words"
        placeholderTextColor="#D8CCCC" 
        required
      />

      <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.replace("Home1")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
   
  },
  para:{
    color:'grey',
    margin:18,
    lineHeight:20,
    fontSize:15,
  },imagesContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    flexWrap:"wrap",
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  deleteButton: {
    position: 'absolute',
    top: 10, 
    right: 10, 
    backgroundColor: 'transparent',
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 110, 
    borderWidth: 1,
    backgroundColor:'#EEE8E8',
    borderColor: '#D4D4D4',
    borderStyle:"dashed",
    borderRadius: 10,
    margin:13
  },
  heading:{
    marginLeft: 10,
    marginTop:30,
    color: 'black',
    fontWeight: '600',
    fontSize:20,
  },
  input: {
    width: '85%',
    marginLeft: 10,
    height:50,
    borderColor:'white',
    borderWidth: 1,
    color:'black',
    fontSize:16,
  },
  continueButton: {
    backgroundColor: '#F60F54',
    padding: 10,
    borderRadius: 5,
    width: '95%',
    height:50,
    marginHorizontal: 10,
    marginTop:190,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingTop:5,
    fontWeight: 'bold',
  },
});
