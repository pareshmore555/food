
import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image,ScrollView}from "react-native";

function Door({navigation}) {
    return (
     <ScrollView style={styles.container}>
      <View>
     
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/doorinstallation.webp")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Door Installation</Text>
         
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/doorrepair.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Door Repair</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/doorhinge.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Hinge Installation</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/doorlockinstallation.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Door Lock Installation</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/lock.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Door Lock Replacement</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/lock.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Door Lock Repair</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/lock.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Mess Grill Door Installation</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/doorgrill.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Mess Grill replacement</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/overheaddoorcloser.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Overhead Door Closer Installtion</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
           <Image source={require("../assets/slidingdoor.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Sliding Door Repair</Text>
           
           <View style={{marginLeft:130,marginTop:10}}> 
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
export default Door;
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
     height:"70%",
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