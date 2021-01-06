import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image}from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from "react-native-swiper"

function Carpenter({navigation}) {
    return (
     <View style={styles.container} >
      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Bed")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/bed.jpg")}style={styles.cardimage} />
          
        </View>
        <Text style={styles.catagorybuttontxt}>Bed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Cupboard")}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/cupboard.jpg")}style={styles.cardimage} />
        </View>
        <Text style={styles.catagorybuttontxt}>Cupboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/door.jpg")}style={styles.cardimage}/>
        </View>
        <Text style={styles.catagorybuttontxt}>Door</Text>
        </TouchableOpacity> 
      </View>
    
      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/furniture.png")}style={styles.cardimage} />
          
        </View>
        <Text style={styles.catagorybuttontxt}>Furniture repair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/furniture.png")}style={styles.cardimage} />
        </View>
        <Text style={styles.catagorybuttontxt}>Furniture Assemble</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
        <View style={styles.catagoryicon}>
          <Image source={require("../assets/window.png")}style={styles.cardimage}/>
        </View>
        <Text style={styles.catagorybuttontxt}>Window</Text>
        </TouchableOpacity> 
      </View>

       
      <View style={styles.slidercontainer}>
        <Swiper autoplay height={200}>
        <View style={styles.slide}>
          <Image source={require("../assets/homeaplince.jpg")} 
          resizeMode="cover" 
          style={styles.slideimage} />
          </View>
          <View style={styles.slide}>
          <Image source={require("../assets/barber.jpg")} 
          resizeMode="cover" 
          style={styles.slideimage}     />
          </View>
          <View style={styles.slide}>
          <Image source={require("../assets/ac.jpg")} 
          resizeMode="cover" 
          style={styles.slideimage}     />
          </View>
          <View style={styles.slide}>
          <Image source={require("../assets/electrician.jpg")} 
          resizeMode="cover" 
          style={styles.slideimage}     />
          </View>
          <View style={styles.slide}>
          <Image source={require("../assets/painter.jpg")} 
          resizeMode="cover" 
          style={styles.slideimage}     />
          </View>
        </Swiper>
        </View>

     </View>
           
     
     
     
    );
  }
export default Carpenter;
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
        color:"#de4f35"
      }
  
   
})