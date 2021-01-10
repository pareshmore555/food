
import React from "react"
import{StyleSheet,View,Button,Text,TouchableOpacity,Image,ScrollView}from "react-native";

function PrimeHaircut({navigation}) {
    return (
     <ScrollView style={styles.container}>
      <View>
     
       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/boycut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Boy Cut</Text>
         
           <View style={{marginLeft:130,marginTop:10}}> 
           <TouchableOpacity onPress={()=>{}}>
           <Button title="Book"  ></Button>
           </TouchableOpacity>
           </View>
           <Text style={styles.txtdetail} >* </Text>
           
         </View>
       </View>

       <View style={styles.card}>
         <View style={styles.cardimagewraper}>
           <Image source={require("../assets/babycut.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Baby cut</Text>
           
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
           <Image source={require("../assets/mashroomcut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Mashroom Cut</Text>
           
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
           <Image source={require("../assets/dovecut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Dove Cut</Text>
           
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
           <Image source={require("../assets/applecut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Apple Cut</Text>
           
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
           <Image source={require("../assets/bluntcut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Blunt Cut</Text>
           
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
           <Image source={require("../assets/strightcut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Stright cut</Text>
           
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
           <Image source={require("../assets/ucut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>U cut</Text>
           
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
           <Image source={require("../assets/feathercut.jpeg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Feather cut</Text>
           
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
           <Image source={require("../assets/layercut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>layer cut</Text>
           
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
           <Image source={require("../assets/stepcut.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>step cut</Text>
           
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
           <Image source={require("../assets/headmassage.jpg")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Head Massage</Text>
           
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
           <Image source={require("../assets/hairheighlight.webp")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Hair Heighlight</Text>
           
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
           <Image source={require("../assets/westpipe.png")}resizeMode="cover" style={styles.cardimage}/>
         </View>
         <View style={styles.cardinfo}>
           <Text style={styles.cardtitle}>Hair Spa</Text>
           
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
export default PrimeHaircut;
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
     height:"100%",
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