import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image}from "react-native";

function Acrepair() {
    return (
      <View>
      <TouchableOpacity onPress={()=>{}}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/ac.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Ac Service</Text>
           
         </View>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>{}}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/ac.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Ac Repair</Text>
          
           <Text style={styles.carddetaila}>water leakage,no cooling,less cooling</Text>
           
         </View>
       </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/ac.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Installation or unInstallation</Text>
           
           
         </View>
       </View>
       </TouchableOpacity>

       </View>
    );
  }
export default Acrepair;
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    cardswraper:{
      marginTop:20,
      width:"90%",
      alignSelf:"center"
    },
    card:{
      height:75,
      marginVertical:10,
      flexDirection:"row",
      shadowColor:"#999",
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    cardimagewraper:{
      flex:1
    },
    cardimage:{
     height:"100%",
     width:"100%",
     alignSelf:'center',
     borderRadius:8,
     borderBottomRightRadius:0,
     borderTopRightRadius:0
    },
    cardinfo:{
      flex:2,
      padding:10,
    borderColor:"#ccc",
    borderWidth:1,
    borderLeftWidth:0,
    borderBottomRightRadius:8,
    borderTopRightRadius:8,
    backgroundColor:"#fff",
    
    },
    cardtitle:{
      fontWeight:"bold",
      

    },
    carddetaila:{
      fontSize:12,
      color:"#444"
    },
})