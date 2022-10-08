import React, {useState, useEffect} from 'react';
import {
    Image,
  Text,
  Pressable,
  View,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {images} from './../../constants/index';

const ContactScreen  = () => {
    const {height, width} = useWindowDimensions();
return(
    <View style={[styles.container,{ 
        // backgroundColor:'black', 
        width:width,height:height}]}>
          <Image  source={images.image}style={{width:width,height:"15%"}}/>
          <Text style={{fontSize:22 ,color:'white',marginTop:-45,alignSelf:'center'}}>تواصل معنا   </Text>
          <View style={{paddingVertical:10,marginTop:40,width:"100%",lexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image source={images.ren} style={{width:220,height:220}}/>
          </View>
          <View style={{paddingVertical:15,marginTop:35,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{fontSize:25,fontWeight:'500'}}> تواصل معنا علي : </Text>
          </View>
          <View style={{paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,textDecorationLine:'underline'}}>infa@afaa8.com</Text>
          </View>
          <View style={{paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
          <Text style={{fontSize:18,textDecorationLine:'underline'}}>0096652709005</Text>
          </View>
          <View style={{paddingVertical:5,marginTop:5,paddingHorizontal:20,width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>

          <Text style={{fontSize:18,textDecorationLine:'underline'}}>العنوان : المملكة العربية السعودية </Text>
          </View>
          </View>
)}

export default ContactScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#E8E8E8",
      marginTop: 0,
    //   justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20,
      // paddingBottom:30
    
    }})