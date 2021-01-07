import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image}from "react-native";
import { withTheme } from "react-native-paper";

function Barber({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight:"bold"}}>Only for Mens</Text>
      <TouchableOpacity style={styles.card}onPress={()=>navigation.navigate("PrimeBarber")} >
        <Image source={require("../assets/primebarber.jpg")}style={styles.cardimage} />
        <Text style={styles.cardtxt}>
          Prime
        </Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.card1}onPress={()=>navigation.navigate("ClassicBarber")} >
        <Image source={require("../assets/classicbarber.jpg")}style={styles.cardimage} />

        <Text style={styles.cardtxt}>
          Classic
        </Text>

      </TouchableOpacity>
      
        
    </View>
    
    );
  }
export default Barber;
const styles=StyleSheet.create({
    container:{
        flex:1,
       marginTop:10,
        alignItems:"center",
        
        
    },
    container1:{
      flex:1,
     marginTop:70,
      alignItems:"center"
  },
    cardtxt:{
      fontSize:20,
      padding:10,
      
      
    },
    card:{
      marginBottom:10,
      marginTop:5,
      marginVertical:10,
      marginLeft:"2%",
      backgroundColor:"#fff",
      width:"96%",
      height:"45%",
      shadowColor:"#000",
      shadowOpacity:1,
      shadowOffset:{
        width:3,
        height:3
      }

    },

    card1:{
      marginBottom:80,
      marginTop:0,
      
      width:"96%",
      shadowColor:"#000",
      shadowOpacity:1,
      shadowOffset:{
        width:3,
        height:3
      }

    },
    cardimage:{
     width:"100%",
     height:"50%" ,
     marginTop:1,
     marginBottom:15,
     resizeMode:"cover",
    },
   
})