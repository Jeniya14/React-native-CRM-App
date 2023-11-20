  import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
  import React,{useState} from 'react'
  import CustomHeader from './CustomHeader'
  import SelectDropdown from 'react-native-select-dropdown';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import SectionedMultiSelect from 'react-native-sectioned-multi-select';
  import CustomIcon from './CustomIcon';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  export default function Preference({navigation}) {
      const [selected, setSelected] = useState('');
      const [selectedItems, setSelectedItems] = useState([]);
      const minage=['21 yrs','22 yrs','23 yrs','24 yrs','25 yrs','26 yrs','27 yrs','28 yrs','29 yrs','30 yrs','31 yrs','32 yrs','33 yrs','34 yrs','35 yrs','36 yrs','37 yrs','38 yrs','39 yrs','40 yrs','41 yrs','42 yrs','43 yrs','44 yrs','45 yrs','46 yrs','47 yrs','48 yrs','49 yrs','50 yrs','51 yrs','52 yrs','53 yrs','54 yrs','55 yrs','56 yrs','57 yrs','58 yrs','59 yrs',]
      const heightinft=[ "5\"6 ft", "5\"7 ft", "5\"8 ft", "5\"9 ft", "51\"0 ft", "51\"1 ft", "6\"0 ft", "6\"1 ft", "6\"2 ft", "6\"3 ft"
        ]
        const casteoption=['Catholic Christian','Muslim','Hindu','Other'];
        const options = [
          { id: '1', name: 'Academic education ',
          children:[
            { id: '10', name: 'Post Graduate' },
            { id: '11', name: 'Under Graduate' },
          ],
        },
          { id: '2', name: 'Degree in',
          children:[
            { id: '20', name: 'Arts' },
            { id: '21', name: 'Science' },
            { id: '22', name: 'Engineering' },
            { id: '23', name: 'Doctoral' },
          ],
          },
          { id: '3', name: 'Education field',
          children:[
            { id: '30', name: 'Computer Science' },
            { id: '31', name: 'Business Administration ' },
            { id: '32', name: 'Psychology' },
            { id: '33', name: 'Nursing' },
            { id: '34', name: 'Architecture' },
            { id: '35', name: 'Philosophy' },
            { id: '36', name: 'Marine' },
            { id: '37', name: 'Aerospace' },
            { id: '38', name: 'Communication' },
          ],
        }
        ];
        const onSelectedItemsChange = (selectedItems) => {
          setSelectedItems(selectedItems);
        };
        const customIcons = {
          arrowDown: {
            component: CustomIcon,
            name: 'arrow-drop-down', 
            size: 22,
            color: 'black', 
          },
          selectArrowDown:{
            component: CustomIcon,
            name: 'arrow-drop-down', 
            size: 26,
            color: 'grey', 
          },
          search: {
            name: 'search', // search input
            size: 24,
            color: 'black', 
          },
          close: {
            name: 'close', // chip close
            size: 16
          },
          check: {
            name: 'check', // selected item
            size: 16
          },
          arrowUp: {
            name: 'arrow-drop-up', // dropdown toggle
            size: 22
          },
        };
    return (
      <View style={styles.container}>
        
          <View style={styles.header}>
              <CustomHeader title="Set Preference" />
          </View>
        <View style={styles.container1}>
              <Text style={styles.heading1}><Text style={styles.heading}>Age</Text > should be between</Text>
              <View style={styles.flexcontainer}>
                  <View style={styles.containerstart}>
                      <Text style={styles.minmax}>Min</Text>
                      <View style={styles.dropdowninputbox}>
                          <SelectDropdown
                              data={minage}
                              defaultButtonText={'21 yrs'}
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
                                  setSelected(selectedItem);
                              }}
                          />
                      </View>
                  </View>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:20,margin:20}}>-</Text>
                  <View style={styles.containerstart}>
                      <Text style={styles.minmax}>Max</Text>
                      <View style={styles.dropdowninputbox}>
                          <SelectDropdown
                              data={minage}
                              defaultButtonText={'25 yrs'}
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
                                  setSelected(selectedItem);
                              }}
                          />
                      </View>
                  </View>
              </View>
        </View>


        <View style={styles.container1}>
              <Text style={styles.heading1}><Text style={styles.heading}>Height</Text > should be between</Text>
              <View style={styles.flexcontainer}>
                  <View style={styles.containerstart}>
                      <Text style={styles.minmax}>Min</Text>
                      <View style={styles.dropdowninputbox}>
                          <SelectDropdown
                              data={heightinft}
                              defaultButtonText={"5\"6 ft"}
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
                                  setSelected(selectedItem);
                              }}
                          />
                      </View>
                  </View>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:20,margin:20}}>-</Text>
                  <View style={styles.containerstart}>
                      <Text style={styles.minmax}>Max</Text>
                      <View style={styles.dropdowninputbox}>
                          <SelectDropdown
                              data={heightinft}
                              defaultButtonText={"6\"0 ft"}
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
                                  setSelected(selectedItem);
                              }}
                          />
                      </View>
                  </View>
              </View>
        </View>

          <View style={styles.container1}>
              <Text style={styles.heading1}><Text style={styles.heading}>Caste</Text > should be </Text>
              <View style={styles.dropdownInputCaste}>
                          <SelectDropdown
                              data={casteoption}
                              defaultButtonText={"Catholic Christian"}
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
                                  setSelected(selectedItem);
                              }}
                          />
              </View>
          </View>

          
        <View style={styles.container1}>
              <Text style={styles.heading1}><Text style={styles.heading}>Education</Text > should be </Text>
              <SectionedMultiSelect
                items={options}
                uniqueKey="id"
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                searchPlaceholderText=" Search Education   "
                confirmText="Confirm"
                showDropDowns={true}
                subKey="children"
                IconRenderer={Icon}
                icons={customIcons} 
                single={false}
                colors= {{
                    primary: 'black',
                    selectToggleTextColor:'#B5AAAD'
                }}
                readOnlyHeadings={true}
                expandDropDowns={true}
                selectText='Select education'
                  styles={{
                      selectToggleText: { color: '#B5AAAD', fontWeight: 'bold' ,paddingLeft:15},
                      selectToggle: styles.dropdowninputEducation,
                      container: styles.dropdownstyleEduction,
                      itemText: styles.dropdownRowTxtStyle,
                      searchTextInput:styles.dropdownsearch,
                      button:styles.dropdownDoneButton,
                      searchBar:styles.dropdownSerachBackground,
                      chipContainer: {  
                        borderWidth: 0,
                        margin:0 ,
                        paddingRight:5
                      },
                      chipText:{color:'black',fontSize:12,fontWeight:"bold",alignSelf:'center'},
                      chipIcon:{
                          backgroundColor:'#F60F54',
                          borderRadius:10,
                          color:'white',
                          fontSize:12
                      },
                      chipsWrapper:{
                        color:'grey'
                      },
                    separator:{color:'black'},
                }}
              /> 
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity style={styles.preferenceButton} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Save Preferance</Text>
          </TouchableOpacity>
          </View>
          </View>
    
    )
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
        },
      header:{
          backgroundColor:'white'
      },
      container1:{
          backgroundColor:'white',
          marginTop:5,
          paddingHorizontal:20,
          paddingTop:20,
          paddingBottom:10,
          width:'100%'
      },
      heading1:{
          color:"black",
          fontSize: 16,
        },
      heading: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 20,
          color:'black',
        },
        flexcontainer:{
          display:'flex',
          flexDirection:'row', 
          alignItems:"center"
        },
        containerstart:{
          display:'flex',
          flexDirection:'row', 
          alignItems:'baseline',
          borderWidth:1,
          borderColor:'#B5AAAD',
          marginVertical:10,
          paddingLeft:15,
          paddingVertical:5,
          borderRadius:5,
          width:160,
          height:40
        },
        minmax:{
          color:'grey',
          fontWeight:'bold'
        },
        dropdowninputbox:{
          marginTop:3,
          width: 100
        },
        dropdownInputCaste:{
          marginVertical:20,
          width: '100%',
          borderColor:'#B5AAAD',
          borderWidth:1,
          padding:8,
          borderRadius:5,   
          height:40 
        },
        dropdowninput:{
          backgroundColor:'white',
          width: '100%',
          flex: 1,
          height:25
        },
        dropdowninputEducation:{
          width: '100%',
          borderColor:'#B5AAAD',
          borderWidth:1,
          padding:8,
          borderRadius:5,  
          marginTop:20,
        },
        dropdownstyleEduction:{
        color:'black'
        },
        dropdownText:{
          color:'#F60F54',
          textAlign:'left',
          fontSize:17,
          fontWeight:'bold'
        },
        dropdownstyle:{
          backgroundColor: '#EFEFEF', 
          marginLeft:10,
          marginTop:10,
          borderRadius:5,
        },
        dropdownRowStyle:{
          borderBottomColor: '#C5C5C5' ,
          flex:1,
        },
        dropdownRowTxtStyle:{
          textAlign:'left',
          color:'black'
        },
        dropdownsearch:{
          color:'black'
        },
        dropdownDoneButton:{
          backgroundColor:'#51A138'
        },
        dropdownSerachBackground:{
          marginBottom:10
        },
        preferenceButton: {
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
  })