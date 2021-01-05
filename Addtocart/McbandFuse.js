
import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image,ScrollView}from "react-native";

function McbandFuse({navigation}) {
    return (
     <ScrollView style={styles.container}>
      <View>
     
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/fusereplace.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Fuse Replace</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* </Text>
           <Text style={styles.txtdetail} >* </Text>
         </View>
       </View>
    
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/mcbinstall1.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Single pole mcb installation</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* 2 Pole -</Text>
           <Text style={styles.txtdetail} >* 3 Pole - </Text>    
           <Text style={styles.txtdetail} >* 4 Pole - </Text>      
         </View>
       </View>
       
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/submeterinstall.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Sub meter installation</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* </Text>
           <Text style={styles.txtdetail} >* </Text>         
         </View>
       </View>
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/3phaseswitch.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>3 Phase Changeover Switch Installation</Text>
           <View style={{marginLeft:130}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* </Text>
           <Text style={styles.txtdetail} >* </Text>         
         </View>
       </View>
       
       

        </View>
       </ScrollView>
    );
  }
export default McbandFuse;
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