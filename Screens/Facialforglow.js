// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

 import React, { useState, useEffect } from 'react';
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
 
 
export default function Facialforglow(props) {

  const data =  props.route.params.userId
    console.log('getIds',data);

  useEffect(() => {
    
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "code": saloneForWomenId
  //   });
  //   console.log('2222222', raw);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
  //   .then(response => response.json())
  //   .then(success => console.log(success))
  //   .catch(error => console.log('error', error));
  }, []) 

  return (
      <>
      <ScrollView>
      <View >
          <Head title="Facial for glow" />
          {/* <Facialglow /> */}
          <View style={{ marginTop: 20 }}>

      <FlatList
        style={{ height: 800, position: 'absolute', marginHorizontal: 20 }}
        data={data}
        //  horizontal={true}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={{ alignContent: 'center', alignItems: 'center', height: 300, width: 300 }}>
              <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF', height: 300, width: 180 }}>
                {/* <Image
                  style={{ borderRadius: 12, borderWidth: 0.5, width: 100, height: 200}}
                  source={{uri : item.images}}
                /> */}
                <Image
                     style={{ borderRadius: 12, width : 135, height : 150, margin: 8}}
                     source={{uri: item.images}}
                   />
                <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500', top: 10 }}>{item.subSalonforWomenName}</Text>
                <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400', top: 10 }}>{item.price}</Text>
                <TouchableOpacity onPress={() => setPopup(true)}>
                  <View style={{ borderRadius: 12, width: 40, height: 40, alignContent: 'center', justifyContent: 'center', backgroundColor: '#5E17EB', left: 100, top: 30 }}>
                    <Plus name='plus' size={20} color={'white'} style={{ textAlign: 'center' }} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>


          )

        }}



      />
      {/* <Diamond visible={Popup} closeCallback={() => setPopup(false)} navigation={navigation} /> */}


    </View>
          <View style={{marginHorizontal:20,right:20}}> 
              <TouchableOpacity onPress={()=>setPopup(true)}>
                  <View style={{ alignItems: 'center',  borderRadius: 12, borderWidth: 1, padding: 20, backgroundColor: '#D8D8D8', borderColor: '#D8D8D8', width: '100%',top:600,justifyContent:'center',marginHorizontal:20}}>
        
                      <Text style={{ color: '#858585', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Proceed</Text>
                
                  </View>

              </TouchableOpacity>
          </View>
           {/* <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/> */}
      </View>
      <View style={{height:1000}}></View>
      </ScrollView>   
      </>
  );
};
 
 
//  const HelloWorldApp = ( {navigation} ) => {
 
  
 
 
//    return (<>
//    

//    </>
//    )
  
//  }
//  export default HelloWorldApp;