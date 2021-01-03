import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image,ScrollView}from "react-native";

function Displaycart({navigation}) {
    return (
     <ScrollView style={styles.container}>
      <View>
     
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvcolorissu.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>color issue</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* Can you face abnormal color on screen</Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View>
    
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvhalfdisplay.webp")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Half Display</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* Half display on screen</Text>
           <Text style={styles.txtdetail} >* </Text>         
         </View>
       </View>

       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvnodisplay.webp")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>No Display</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* Only display problem sound is clear</Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View>

       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvhorizontalline.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Horizontal/Vertical lines</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* Horizontal/Vertical lines on screen </Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View>
        
       
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvflickering.jpeg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Flickering </Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* Flickering on screen </Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View> 
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvwhitedot.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>White Dots </Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* White dots on screen </Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/tvblur.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Blur</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* Blur  on screen </Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View>

       </View>
       </ScrollView>
    );
  }
export default Displaycart;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
        
    },
    cardswraper:{
      marginTop:20,
      width:"90%",
      alignSelf:"center"
    },
    card:{
      height:170,
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
     height:"50%",
     width:"110%",
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
    txtdetail:{
      color:"#777777",
      marginTop:10
    }
})