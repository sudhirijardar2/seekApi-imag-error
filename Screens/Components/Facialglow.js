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


import Plus from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

import Star from 'react-native-vector-icons/AntDesign';
import Diamond from '../Diamond';






const HelloWorldApp = ({ navigation }) => {
  const [Popup, setPopup] = useState(false);


  const categories = [
    {
      id: 1,
      title: 'Pearl Facial',
      onemore: '₹599 onwords',
      image: require('../../assets/fone.png')
    },
    {
      id: 2,
      title: 'Gold facial',
      onemore: '₹699 onwords',

      image: require('../../assets/ftwo.png')
    },
    {
      id: 3,
      title: 'Diamond facial',
      onemore: '₹799 onwords',

      image: require('../../assets/fthree.png')
    },
    {
      id: 4,
      title: 'Threading',
      onemore: '₹59 onwords',

      // title1:'ajdlfjdjfj',
      image: require('../../assets/sfour.png')
    },

  ]

  return (<>
    

  </>
  )

}
export default HelloWorldApp;