import React from "react"
import{StyleSheet,View,Text}from "react-native";
import{createStackNavigator} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";


import Home1 from "./Home1"
import Explore from "./Explore"
import Mybook from "./Mybook"
import Profile from "./Profile"


  const Tab = createMaterialBottomTabNavigator();
  
  function MainTab() {
    return (
      <Tab.Navigator
        initialRouteName="Home1"
        activeColor="#000000"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Home1"
          component={Home1}
          options={{
            tabBarLabel: 'Home',
            tabBarColor:"#a63a79",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor:"#a63a79",
            tabBarIcon: ({ color }) => (
              <Icon name="paper-plane" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Mybook"
          component={Mybook}
          options={{
            tabBarLabel: 'Mybooking',
            tabBarColor:"#a63a79",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:"#a63a79",
            tabBarIcon: ({ color }) => (
              <Icon name="man" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>
    );
  }
  
  export default function App() {
    return (
     
        <MainTab />
      
    );
  }