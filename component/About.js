import { StyleSheet, Text, View,ScrollView,TextInput,Button,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import CustomHeader from './CustomHeader';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { DateTimePickerModal } from '@react-native-community/datetimepicker';

const About = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const genderOptions = ['Male', 'Female', 'Other'];
  const heightoptions=['140cm-150cm','150cm-160cm','160cm-170cm','170cm-180cm','180cm-190cm'];
  const casteoption=['Catholic Christian','Muslim','Hindu','Other'];
  const eduoption=['Computer Science','Doctrate','Engineering','Arts','Science'];
  const professionsOption = ["Doctor", "Nurse", "Teacher", "Engineer", "Lawyer", "Accountant", "SoftwareDeveloper", "GraphicDesigner", "UIUXDesigner"];

   const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (date) {
      setSelectedDate(date);
      hideDatePicker();
    }
  };

  return (
    <ScrollView style={styles.container}>
    <CustomHeader title="Tell us about you" />

        <Text style={styles.label1}>Hi, My Name is</Text>
          <View style={styles.inputbox}>
            <TextInput
                style={styles.input}
                placeholder="Enter your name..."
                placeholderTextColor="#B5AAAD" 
                required
            />
         </View>

         <Text style={styles.label}>I am </Text>
         <View style={styles.dropdowninputbox}>
          <SelectDropdown
            data={genderOptions}
            defaultButtonText={''}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'caret-up' : 'caret-down'} color={'#B5AAAD'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            buttonStyle={styles.dropdowninput}
            buttonTextStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownstyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
            onSelect={(selectedItem, index) => {
              setSelectedGender(selectedItem);
            }}
          />
        </View>

        <Text style={styles.label}>My height is </Text>
         <View style={styles.dropdowninputbox}>
        <SelectDropdown
          data={heightoptions}
          defaultButtonText={'Choose your height'}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'caret-up' : 'caret-down'} color={'#B5AAAD'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          buttonStyle={styles.dropdowninput}
          buttonTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownstyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
          onSelect={(selectedItem, index) => {
            setSelectedGender(selectedItem);
          }}
        />
        </View>

        <Text style={styles.label}>I born on </Text>
        <View style={styles.inputbox}>
            <TextInput
                style={styles.input}
                placeholder="Enter your dob"
                placeholderTextColor="#B5AAAD" 
                required
            />
         </View>
        {/* <View>
         <Text onPress={showDatePicker}>Open Date Picker</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={selectedDate}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      <Text>Date of Birth: {selectedDate ? selectedDate.toDateString() : ''}</Text>
      </View> */}

      <Text style={styles.label}>I belong to </Text>
      <View style={styles.dropdowninputbox}>
      <SelectDropdown
          data={casteoption}
          defaultButtonText={'Select your caste'}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'caret-up' : 'caret-down'} color={'#B5AAAD'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          buttonStyle={styles.dropdowninput}
          buttonTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownstyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
          onSelect={(selectedItem, index) => {
            setSelectedGender(selectedItem);
          }}
        />
      </View>

      <Text style={styles.label}>I am living at </Text>
          <View style={styles.inputbox}>
            <TextInput
                style={styles.input}
                placeholder="Enter short address"
                placeholderTextColor="#B5AAAD" 
                required
            />
         </View>

          <Text style={styles.heading}> Professional Info</Text>

          <Text style={styles.label}>I completed/persuing my study in  </Text>
      <View style={styles.dropdowninputbox}>
      <SelectDropdown
          data={eduoption}
          defaultButtonText={'Select Education field'}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'caret-up' : 'caret-down'} color={'#B5AAAD'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          buttonStyle={styles.dropdowninput}
          buttonTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownstyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
          onSelect={(selectedItem, index) => {
            setSelectedGender(selectedItem);
          }}
        />
      </View>

      <Text style={styles.label}>I am Working as </Text>
      <View style={styles.dropdowninputbox}>
      <SelectDropdown
          data={professionsOption}
          defaultButtonText={'Select Education Profession'}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'caret-up' : 'caret-down'} color={'#B5AAAD'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          buttonStyle={styles.dropdowninput}
          buttonTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownstyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
          onSelect={(selectedItem, index) => {
            setSelectedGender(selectedItem);
          }}
        />
      </View>

      <Text style={styles.label}>My monthly income is </Text>
          <View style={styles.inputbox}>
            <TextInput
                style={styles.input}
                placeholder="Enter your income"
                placeholderTextColor="#B5AAAD" 
                required
            />
         </View>

         <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate("AddProfile")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default About;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
    },
    label1:{
      marginHorizontal: 20,
      marginBottom:0,
      color: 'black',
      fontWeight: '400',
      fontSize:18,
      marginTop:20
    },
    label: {
        marginHorizontal: 20,
        marginBottom:0,
        color: 'black',
        fontWeight: '400',
        fontSize:18,

      },
      inputbox:{
        marginBottom: 10,
        marginHorizontal: 18,
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
        fontSize:16
      },
      dropdowninputbox:{
        marginTop:3,
        marginBottom: 20,
        marginHorizontal: 5,
        width: '100%',
      },
      dropdowninput:{
        backgroundColor:'white',
        width: '90%',
        flex: 1,
        height:25
      },
      dropdownText:{
        color:'#B5AAAD',
        textAlign:'left',
        fontSize:17
      },
      dropdownstyle:{
        backgroundColor: '#EFEFEF', 
        marginLeft:10,
        marginTop:10
      },
      dropdownRowStyle:{
        borderBottomColor: '#C5C5C5' ,
        flex:1,
      },
      dropdownRowTxtStyle:{
        textAlign:'left',
        color:'black'
      },
      heading:{
        marginHorizontal: 10,
        marginBottom:20,
        marginTop:20,
        color: 'black',
        fontWeight: '600',
        fontSize:20,
      },
      continueButton: {
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