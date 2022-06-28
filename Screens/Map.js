/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
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
   TouchableOpacity
   
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Header from './Components/Header'
 import MapView from 'react-native-maps';
import Location from 'react-native-vector-icons/Ionicons';

 
 const Map = ({ navigation }) => {
   const des = "An OTP will be sent on given number for varification \n Standard message and data rates apply"
   const add = "89,Bhel Nagar,piplani,Ayodhya\nNagar Extension"
   return ( <>
   <View>
       <Header title="Choose location" />
   </View>
   
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
    
   </View>
   <View style={{padding:30,top:510,borderTopLeftRadius:20,borderTopRightRadius:20}}>
    <View style={{flexDirection:'row'}}>
       <Location name='location' size={20} color={'black'} />
       <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>{add}</Text>
   </View>
   <Text style={{fontSize:14,color:'rgba(117, 117, 117, 1)',left:40,marginTop:10}}>Ayodhya Bypass</Text>
   <TouchableOpacity onPress={()=>navigation.navigate("Otp")}
        style={{ alignItems: 'center',  borderRadius: 20,  padding: 20, backgroundColor: '#3672E9', borderColor: '#5E17EB', width: '100%',marginTop:50}}>
                <Text style={{ color: '#ffffff', fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Confirm Location</Text>
            </TouchableOpacity>
   </View>
   
  
       
       </>
   )
 }

 const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 500,
      width: 400,
      marginTop:70,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
 export default Map;