import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image}from "react-native";

function Tvrepair({navigation}) {
    return (
     <View style={styles.container}>

      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Displaycart")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/display.jpeg")}style={styles.cardimage} />
          
        </View>
        <Text style={styles.catagorybuttontxt}>Screen/Display</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("InstallationTv")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/installation.png")}style={styles.cardimage} />
        </View>
        <Text style={styles.catagorybuttontxt}>Installation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("UninstallaionTv")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/installation.png")}style={styles.cardimage}/>
        </View>
        <Text style={styles.catagorybuttontxt}>Uninstallation</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Tvspecker")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/speaker.jpg")}style={styles.cardimage} />
          
        </View>
        <Text style={styles.catagorybuttontxt}>Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Tvdead")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/tvdead.jpg")}style={styles.cardimage} />
        </View>
        <Text style={styles.catagorybuttontxt}>Tv Dead</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/qm.png")}style={styles.cardimage}/>
        </View>
        <Text style={styles.catagorybuttontxt}>Other</Text>
        </TouchableOpacity> 
      </View>

    </View>
    );
  }
export default Tvrepair;
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
         width:"100%",
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