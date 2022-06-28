/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   FlatList
 
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Location from 'react-native-vector-icons/Ionicons';
 import Noti from 'react-native-vector-icons/Ionicons';
 import Plus from 'react-native-vector-icons/Entypo';
 import LinearGradient from 'react-native-linear-gradient';
 import Head from '../Screens/Components/Header'
 import Facialglow from '../Screens/Components/Facialglow'
 import Diamond from './Diamond'
 
 
 
 
 
 const HelloWorldApp = ( { navigation }) => {
 
   
  const [Popup, setPopup] = useState(false);
 
 
   return (<>
   <ScrollView>
     <View >
       <Head title="Facial for glow" />

       
       <Facialglow />

    <View style={{marginHorizontal:20,right:20}}> 
 <TouchableOpacity onPress={()=>setPopup(true)}>
       <View style={{ alignItems: 'center',  borderRadius: 12, borderWidth: 1, padding: 20, backgroundColor: '#D8D8D8', borderColor: '#D8D8D8', width: '100%',top:600,justifyContent:'center',marginHorizontal:20}}>
     
                 <Text style={{ color: '#858585', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Proceed</Text>
             
             </View>

             </TouchableOpacity>

             </View>
             <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/>
 
             
     </View>
     <View style={{height:1000}}></View>
     </ScrollView>

   </>
   )
  
 }
 export default HelloWorldApp;