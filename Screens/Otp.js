import React, { Component, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import User from 'react-native-vector-icons/MaterialCommunityIcons';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import OtpInputs from 'react-native-otp-inputs';
// //import OTPInputView from '@twotalltotems/react-native-otp-input';
// import LinearGradient from 'react-native-linear-gradient';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function App({ navigation }) {

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");



  

  return (<>

    {/* <View style={styles.container}>
        <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        />
      </View> */}




    <View style={{ marginHorizontal: 25 }}>

      {/* <Image
        style={styles.tinyLogo}
        source={require('./assets/man.jpg')}
      /> */}
    </View>

    <View>
      <Text style={{ fontSize: 24, fontFamily: 'Poppins-Regular', fontWeight: '700', color: 'black',textAlign:'center',top:150 }}>Enter Verification code</Text>


      <View style={{ marginTop: 180 }}>
        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular',textAlign:'center',fontWeight:'400' }}>we have sent you a Verification code on </Text>
        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', marginTop: 5,textAlign:'center',fontWeight:'500' }}>+91 6390168836</Text>


      </View>

     


      <View style={styles.TopView}>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin1Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin1) => {
              setPin1(pin1);
              if (pin1 != "") {
                pin2Ref.current.focus();
              }

            }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin2Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin2) => {
              setPin2(pin2);
              if (pin2 != "") {
                pin3Ref.current.focus();
              }
            }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin3Ref}

            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin3) => {
              setPin3(pin3);
              if (pin3 != "") {
                pin4Ref.current.focus();
              }
            }}
            style={styles.TextInputText}
          />

        </View>

        <View style={styles.TextInputView}>
          <TextInput
            ref={pin4Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            onChange={(pin4) => {
              setPin4(pin4);
            }}
            style={styles.TextInputText}
          />

        </View>

      </View>

 

      
















      {/* <OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={4}
    code=""
    autoFocusOnLoad={true}
    // codeInputFieldStyle={styles.borderStyleBase}
    // codeInputHighlightStyle={styles.borderStyleHighLighted}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/> */}


     


  

    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
<View style={{marginHorizontal:20,marginTop:60}}>
    <View style={{ alignItems: 'center', marginTop: 80, borderRadius: 12,  padding: 15, backgroundColor: '#5E17EB', borderColor: '#1589FF', width: '100%' }}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Continue</Text>
      </View>
      </View>
      </TouchableOpacity>


    


  </>);


}

const styles = StyleSheet.create({
  // borderStyleBase: {
  //   width: 30,
  //   height: 45
  // },

  // borderStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  // underlineStyleBase: {
  //   width: 30,
  //   height: 45,
  //   borderWidth: 0,
  //   borderBottomWidth: 1,
  // },

  // underlineStyleHighLighted: {
  //   borderColor: "#03DAC6",
  // },

  TextInputView: {
    borderRadius:7,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    //backgroundColor:'#F1F6F7'
    backgroundColor:'white',
    borderColor:'#5E17EB',
    margin:10,
    borderWidth:1


  },
  TextInputText: {
    fontSize: 18,
    color:'#A9A9A9'
  },
  TopView:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'center'
  }

});