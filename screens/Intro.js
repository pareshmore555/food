import React from "react"
import {StyleSheet,View,Text,Button}from "react-native"

function Intro({navigation}){
    return(
    <View>
        
      <Button title="submit"onPress={()=>navigation.navigate("MainTab")}style={styles.btn}></Button>
    </View>
     
    )}
export default Intro;
const styles=StyleSheet.create({
    txt:{
        
        alignItems:"center",
        
        alignSelf:"center",
        justifyContent:"center",
        fontWeight:"bold",
        marginTop:50
    },
    btn:{
        alignItems:"center",
        alignSelf:"center",
        marginTop:50,
    
        width:5
    }
})