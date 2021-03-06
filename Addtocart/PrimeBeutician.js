import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image}from "react-native";

function PrimeBeutician({navigation}) {
    return (
     <View style={styles.container}>

      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("PrimeThreading")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/threading.jpeg")}style={styles.cardimage} />
          
        </View>
        <Text style={styles.catagorybuttontxt}>Threading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("PrimeBleaching")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/bleachgirl.jpg")}style={styles.cardimage} />
        </View>
        <Text style={styles.catagorybuttontxt}>Bleaching</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("PrimeWaxing")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/waxinggirl.jpg")}style={styles.cardimage}/>
        </View>
        <Text style={styles.catagorybuttontxt}>Waxing</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("PrimeFacials")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/facialgirl.jpg")}style={styles.cardimage} />
          
        </View>
        <Text style={styles.catagorybuttontxt}>Facials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("PrimeHaircut")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/haircutgirl.jpg")}style={styles.cardimage} />
        </View>
        <Text style={styles.catagorybuttontxt}>Haircut And Color</Text>
        </TouchableOpacity>
        
      </View>

     

    </View>
    );
  }
export default PrimeBeutician;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
        
    },
    catagoryicon:{
        borderWidth:0,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        width:70,
        height:70,
        borderRadius:30,
        backgroundColor:"#fdeae7"
    
        },
        catagorycontainer:{
         flexDirection:"row",
         width:"90%",
         alignSelf:"center",
         marginTop:20,
         marginTop:10
        },
        catagorybutton:{
         flex:1,
         
         marginHorizontal:0,
         alignSelf:"center"
    
        },
        slidercontainer:{
         height:400,
         width:"90%",
         marginTop:35,
         alignSelf:"center",
         justifyContent:"center",
         borderRadius:8,
         
    
        },
        slide:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"transparent",
        borderRadius:8,
       
        },
        slideimage:{
        height:"100%",
        width:"100%",
        borderRadius:8,
        alignSelf:"center",
        
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
         width:"130%",
         alignSelf:'center',
         borderRadius:8,
         borderBottomRightRadius:0,
         borderTopRightRadius:0,
         
        },
        cardinfo:{
          flex:2,
          padding:10,
        borderColor:"#ccc",
        borderWidth:1,
        borderLeftWidth:0,
        borderBottomRightRadius:8,
        borderTopRightRadius:8,
        backgroundColor:"#fff"
        },
        cardtitle:{
          fontWeight:"bold",
    
        },
        carddetaila:{
          fontSize:12,
          color:"#444"
        },
        catagorybuttontxt:{
          alignSelf:"center",
          marginTop:5,
          color:"#a63a79",
          fontSize:13
        }
})