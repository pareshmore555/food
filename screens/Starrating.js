import React from "react";
import {StyleSheet,Text,View,Button}from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"

const Starrating=(props)=>{
  
    let stars=[]
    for(var i=1;i<5;i++)
    {
        let name="ios-star";
        if(i>props.ratings)
        {
            name="ios-star-outline"
        }
        stars.push((<Ionicons name={name}size={10}style={Styles.stars} key={i}/>))
    }
    return(
        <View style={Styles.container}>
         {stars}
         <Text style={Styles.text}>({props.reviews})</Text>
        </View>
    )

}
export default Starrating;