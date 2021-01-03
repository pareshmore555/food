import React from "react"
import{StyleSheet,View,Button,Text}from "react-native";

function Mybook() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mybook</Text>
      </View>
    );
  }
export default Mybook;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
})