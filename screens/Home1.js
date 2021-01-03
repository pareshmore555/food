import React from "react"
import {StyleSheet,View,Button,Text,TouchableOpacity,Image,_ScrollView,TextInput}from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from "react-native-swiper"
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";








function Home1({navigation}) {
    return (
      <ScrollView style={styles.container}>
      <View  style={styles.container}>

      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Appliances")}>
        <View style={styles.catagoryicon}>
          <Icon name="home"size={34} color="#060606"/>
          
        </View>
        <Text style={styles.catagorybuttontxt}>Appliances</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Electrician")}>
        <View style={styles.catagoryicon}>
          <MaterialCommunityIcons name="power-plug"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>Electrician</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Carpenter")}>
        <View style={styles.catagoryicon}>
          <Icon name="ios-hammer"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>Carpenter</Text>
        </TouchableOpacity> 
      </View>
      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Painter")}>
        <View style={styles.catagoryicon}>
          <MaterialCommunityIcons name="format-paint"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>Painter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Beutician")}>
        <View style={styles.catagoryicon}>
          <MaterialCommunityIcons name="hair-dryer"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>Beutician</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Barber")}>
        <View style={styles.catagoryicon}>
          <MaterialCommunityIcons name="hair-dryer"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>Barber</Text>
        </TouchableOpacity> 
      </View>
      <View style={styles.catagorycontainer}>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("HomeCleaner")}>
        <View style={styles.catagoryicon}>
          <Icon name="home"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>HomeCleaner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Gasbooking")}>
        <View style={styles.catagoryicon}>
          <MaterialCommunityIcons name="gas-cylinder"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>GasBooking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catagorybutton}onPress={()=>navigation.navigate("Plumber")}>
        <View style={styles.catagoryicon}>
          <Icon name="ios-hammer"size={34} color="#060606"/>
        </View>
        <Text style={styles.catagorybuttontxt}>Plumber</Text>
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
      
      <View style={styles.cardswraper}>
        <Text>Recently Viewed</Text>
      <TouchableOpacity onPress={()=>{}}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/ac.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Ac Maintance Service</Text>
           <Text>rattings 4/5</Text>
           <Text style={styles.carddetaila}>Service is so amazing </Text>
           
         </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{}}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/barber.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Barber Service</Text>
           <Text>rattings 5/5</Text>
           <Text style={styles.carddetaila}>its very cleaned and perfect cut</Text>
           
         </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{}}>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/painter.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Painting Service</Text>
           <Text>rattings 4/5</Text>
           <Text style={styles.carddetaila}>stuning painting   </Text>
           
         </View>
       </View>
       </TouchableOpacity>
      </View>

      
      
      </View>
      </ScrollView>
  


)};

export default Home1;
const styles=StyleSheet.create({
    container:{
        flex:1,
       
        
        
    },
    catagoryicon:{
    borderWidth:0,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    width:60,
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
     height:200,
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
    borderRadius:8
    },
    slideimage:{
    height:"100%",
    width:"100%",
    borderRadius:8,
    alignSelf:"center"
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
      color:"#a63a79"
    }
});