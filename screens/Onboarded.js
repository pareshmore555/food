import React from "react"
import {StyleSheet,View,Button,Text,Image}from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Onboarding from 'react-native-onboarding-swiper'





const Onboarded =({navigation})=>{
    return(
        
 <Onboarding
 
 onSkip={()=>navigation.replace("MainTab")}
 onDone={()=>navigation.navigate("MainTab")}
    pages={[
      {
      backgroundColor: '#a63a79',
      image: <Image source={require("../assets/sl.jpg")} />,
      title: 'Fast Service',
      subtitle: 'All services is available',
    },
    {
        backgroundColor: '#a63a79',
        image: <Image source={require("../assets/sl2.png")} />,
        title: 'Professional Employe',
        subtitle: 'Cleanest service',
      },
      {
        backgroundColor: '#a63a79',
        image: <Image source={require("../assets/sl3.png")} />,
        title: 'Order Now',
        subtitle: 'reliable infrastructure',
      },
    
    
  ]}
/>
    )
}
export default Onboarded;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
});