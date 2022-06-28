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
 import Icon from 'react-native-vector-icons/EvilIcons';
 import LinearGradient from 'react-native-linear-gradient';
 import Head from '../Screens/Components/Header'
 
 
 
 
 
 const Salonforwomen = ( { navigation }) => {
 
   const categories = [
     {
       id: 1,
       title: 'Facial for glow',
       onemore: '₹599 onwords',
       image: require('../assets/sone.png')
     },
     {
       id: 2,
       title: 'Manicure',
       onemore: '₹499 onwords',
 
       image: require('../assets/stwo.png')
     },
     {
       id: 3,
       title: 'Pediure',
       onemore: '₹499 onwords',
 
       image: require('../assets/sthree.png')
     },
     {
       id: 4,
       title: 'Threading',
       onemore: '₹59 onwords',
 
       // title1:'ajdlfjdjfj',
       image: require('../assets/sfour.png')
     },
 
   ]
 
 
   return (<>
   <ScrollView>
     <View style={{ marginHorizontal: 20 }}>
       <Head title="Salon for women" />
 
 
       <View style={{ marginTop: 20 }}>
 
         <FlatList
           style={{ height: 600 }}
           data={categories}
           //  horizontal={true}
           numColumns={2}
           renderItem={({ item }) => {
             return (
               <View style={{ alignContent: 'center', alignItems: 'center' }}>
                 <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF' }}>
                   <Image
                     style={{ borderRadius: 12, borderWidth: 0.5 }}
                     source={item.image}
                   />
 
                <TouchableOpacity onPress={()=>navigation.navigate("Facialforglow")}>
                   <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.title}</Text>
                   </TouchableOpacity>
                   <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400' }}>{item.onemore}</Text>
 
                 </View>
 
 
 
 
               </View>
             )
 
           }}
 
 
 
         />
       </View>
     </View>
     </ScrollView>
   </>
   )
 }
 export default Salonforwomen;