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
   FlatList,
 
 } from 'react-native';
 import AppIntroSlider from 'react-native-app-intro-slider';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 // import { useState } from 'react/cjs/react.production.min';
 import Icon from 'react-native-vector-icons/EvilIcons';
 import Noti from 'react-native-vector-icons/Ionicons';
 import Right from 'react-native-vector-icons/AntDesign';
 import Verified from 'react-native-vector-icons/MaterialIcons';
 import Star from 'react-native-vector-icons/AntDesign';
 
 
 
 
 
 
 const HomeOneScroll = ( { navigation }) => {
   const slider = [
     {
       id: 1,
       title: 'Hair service for men',
       image: require('../assets/smen.png')
     },
     {
       id: 2,
       title: 'Electrician services',
       image: require('../assets/electric.png')
     },
     {
       id: 3,
       title: 'Hair service for men',
       image: require('../assets/smen.png')
     },
     {
       id: 4,
       title: 'Hair service for men',
       // title1:'ajdlfjdjfj',
       image: require('../assets/smen.png')
     }
   ]
 
   const Freelancers = [
     {
       id: 1,
       title: 'Jack Harlow\nElectrician\n4.5',
       image: require('../assets/man.png')
     },
     {
       id: 2,
       title: 'Nina Chen\nCleaner\n4.8',
       image: require('../assets/free.png')
     },
     {
       id: 3,
       title: 'Jack Harlow\nElectrician\n4.5',
       image: require('../assets/man.png')
     },
     {
       id: 4,
       title: 'Nina Chen\nCleaner\n4.8',
       image: require('../assets/free.png')
     },
   ]
   const Item = ({ title }) => (
     <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
     </View>
   );
 
 
   const renderItem = ({ item }) => (
     <Item title={item.title} />
   );
   return (<>
   <ScrollView>
     <View >
 
{/*  
       <View style={{ flexDirection: 'row', borderRadius: 12, borderColor: '#E3E3E3', borderWidth: 1, width: '80%', marginTop: 30 }}>
         <Icon name='search' color={'#757575'} size={30} style={{ marginTop: 10 }} />
 
         <TextInput placeholder='Search for services' style={{ fontSize: 14 }} ></TextInput>
 <TouchableOpacity>
         <View style={{ borderRadius: 15, marginLeft: 150, width: '15%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F3F3' }}>
           <Noti name='notifications' color={'#5E17EB'} size={30} style={{ marginTop: 5 }} />
           <Image
             style={{ height: 8, width: 8, top: -35, left: 5 }}
             source={require('../assets/bindi.png')}
           />
         </View>
         </TouchableOpacity>
 
       </View> */}
       <View >
         <View style={{ marginTop: 20, flexDirection: 'row' }}>
           <Text style={{ fontSize: 20, fontStyle: 'normal', fontWeight: '700', color: 'black' }}>Top Freelancers</Text>
           <Text style={{ fontSize: 12, color: '#757575', marginLeft: 130 }}>explore</Text>
           <Right name='right' color={'#757575'} style={{ marginTop: 3 }} />
           <Right name='right' color={'#757575'} style={{ marginTop: 3 }} />
 
         </View>
 
         <FlatList
           style={{ height: 270 }}
           data={Freelancers}
           horizontal={true}
           renderItem={({ item }) => {
             return (
               <View style={{ alignContent: 'center', alignItems: 'center', padding: 10, margin: 15}}>
                 <Image
                   style={{ padding: 50, borderRadius: 50, width: 60, aspectRatio: 2 / 4 }}
                   source={item.image}
                 />
                 <View style={{ borderRadius: 12, position: 'absolute', top: 80, width: '140%', height: '50%', justifyContent: 'center', backgroundColor: '#F3F3F3' }}>
                   <Text style={{ fontSize: 14, textAlign: 'center', color: 'black', }}>{item.title}</Text>
                   <View style={{ position: 'absolute', top: 40, left: 110 }}>
                     <Verified name='verified' size={20} color={'blue'} />
                   </View>
                   <Star name='star' color={'#F5C443'} style={{ top: -14, left: 40 }} />
                   <TouchableOpacity>
                   <View style={{ borderRadius: 20, marginHorizontal: 10, backgroundColor: '#5E17EB', padding: 5 }}>
                     <Text style={{ textAlign: 'center', fontSize: 14, color: 'white' }}>view profile</Text>
                 
                   </View>
                   </TouchableOpacity>
                 </View>
 
 
 
               </View>
             )
 
           }}
 
 
 
         />
       </View>
 
 
       <ScrollView style={{top:-15,}}>
           <View style={{top:-5}}>
             <TouchableOpacity onPress={()=>navigation.navigate("Salonforwomen")}>
             <Text style={{ fontSize: 20, fontStyle: 'normal', fontWeight: '700', color: 'black' }}>Trending services</Text>
             </TouchableOpacity>
 
           <FlatList
           
             data={slider}
             horizontal={true}
             slider={true}
             renderItem={({ item }) => {
               return (
                 <View style={{ alignContent: 'center', alignItems: 'center', }}>
                   <Image
                     style={{ padding: 40, margin: 10, borderRadius: 12 }}
                     source={item.image}
                   />
 
                   <Text style={{ fontSize: 14, color: 'white', fontWeight: '500', textAlign: 'center', position: 'absolute', top: 140 }}>{item.title}</Text>
 
 
 
                 </View>
               )
 
             }}
 
 
 
 
           />
           </View>
       
       </ScrollView>
 
 
 
     </View>
 
 
 </ScrollView>
 
 
 
   </>
   )
 }
 export default HomeOneScroll;
 const styles = StyleSheet.create({
 
 })