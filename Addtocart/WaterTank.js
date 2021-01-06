
import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image,ScrollView}from "react-native";

function WaterTank({navigation}) {
    return (
     <ScrollView style={styles.container}>
      <View>
     
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/watertank.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Tank Installtion (upto 500L)</Text>
         
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
           <Image source={require("../assets/watertank.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Tank Installtion (500L-2000L)</Text>
           
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
           <Image source={require("../assets/undergroundwatertank.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Underground tank cleaning(1000L-1500L)</Text>
           
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
           <Image source={require("../assets/undergroundwatertank.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Underground tank cleaning(1500L-3000L)</Text>
           
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
           <Image source={require("../assets/watertankmeter.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Water meter installation</Text>
           
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
           <Image source={require("../assets/watertank.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Tank Leakage</Text>
           
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
export default WaterTank;
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