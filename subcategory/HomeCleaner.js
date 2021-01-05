import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image}from "react-native";

function HomeCleaner({navigation}) {
    return (
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("Carcleaning")}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/carclean.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Car Cleaning</Text>
           
         </View>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>navigation.navigate("HomeOfficeclean")}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/homeclean.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Home and Office Cleaning</Text>
          
          
           
         </View>
       </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>navigation.navigate("Sofaclean")}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/sofaclean.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Sofa Cleaning</Text>
           
           
         </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("Bathroomclean")}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/bathroomclean.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Bathroom Cleaning</Text>
           
         </View>
       </View>
       </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>navigation.navigate("Kitchenclean")}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/kitchenclean.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Kitchen Cleaning</Text>
          
          
           
         </View>
       </View>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>navigation.navigate("Carpetclean")}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/carpetclean.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Carpet Cleaning </Text>
           
           
         </View>
       </View>
       </TouchableOpacity>

       </View>
    );
  }
export default HomeCleaner;
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