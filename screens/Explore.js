import React from "react"
import{StyleSheet,View,Button,TextInput,Text}from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import * as Animatable from "react-native-animatable"

import Searchdata from "../Searchdata.json"
import {useState}from "react"  
import { event } from "react-native-reanimated";

function Explore() {
  const [searchTerm,setSearchTerm]=useState("")
    return (
      <View style={{flex:1}}>
        <View style={{ height:70,
        backgroundColor:"#a63a79",
        justifyContent:"center",
        padding:7,
        }}>
          <Animatable.View animation="slideInRight" style={{ height:40,
      backgroundColor:"white",
      flexDirection:"row",
      padding:5,
      alignItems:"center",
      fontSize:24}}>
           <Icon name="ios-search" style={{fontSize:24}}/>
           <TextInput placeholder="Search here for services" style={{fontSize:15,marginLeft:15}} onChange={event=>{setSearchTerm(event.target.value)}}/>
            </Animatable.View>
            

        </View>
        <View style={{alignSelf:"center",margin:10}}>
        {Searchdata.filter((val)=>{
          if(searchTerm=="")
          {
             return val
          }
        }).map((val,key)=>{
              return (
                <View style={{margin:8}}>
                  <Text>
                  {val.service}
                  </Text>
                </View>
              )
            })}
          </View>
      </View>
    );
  }
export default Explore;
