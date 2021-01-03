import React from "react"
import{StyleSheet,View,Button,TouchableOpacity,ScrollView}from "react-native";
import{Avatar,Title,caption,Text,TouchableRipple, Caption}from "react-native-paper"
//import { MenuItem } from "react-native-paper/lib/typescript/components/Menu/MenuItem";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

const Profile =()=>{
   
    return(
        <View style={styles.container}>
            
           
            
            <View style={styles.userinfosection}>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
                <View style={styles.row}>
                <Icons name="map-marker-radius"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777",}}>Solapur,Maharastra,India</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
                <View style={styles.row}>
                <Icons name="email"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>Pareshmore@gmail</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
                <View style={styles.row}>
                <Icons name="phone"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>7558690098</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>
                 <View style={styles.row}>
                <Icons name="help-box"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>Help Center</Text>
                 </View>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>   
                 <View style={styles.row}>
                <Ionicons name="file-tray-full-sharp"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>My Orders</Text>
                 </View>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>       
                 <View style={styles.row}>
                <Icons name="share"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>Share to Friends</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>        
                 <View style={styles.row}>
                <Icons name="office-building"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>About EasyWay</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>        
                 <View style={styles.row}>
                <Icons name="star"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>Rate to EasyWay</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catagorybutton}onPress={()=>{}}>        
                 <View style={styles.row}>
                <Icons name="account-arrow-right"size={25}color="#777777"/>
                 <Text style={{marginLeft:20,color:"#777777"}}>Refer and Earn</Text>
                 </View>
            </TouchableOpacity>
                
                
            </View>
           
        </View>
    )
    
}
export default Profile;
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    userinfosection:{
        paddingHorizontal:30,
        marginTop:25,
        
        
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:5,
        marginTop:10

    },
   caption:{
       fontSize:14,
       lineHeight:14,
       fontWeight:"500"
   } ,
   row:{
       flexDirection:"row",
       marginBottom:20
   },
   menuwraper:{
       marginTop:10
   },
   MenuItem:{
       flexDirection:"row",
       paddingVertical:10,
       paddingHorizontal:30

   },
   MenuItemtxt:{
       color:"#777777",
       marginLeft:20,
       fontWeight:"600",
       fontSize:16,
       lineHeight:26
   }
})