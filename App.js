import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer}from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
 
import Onboarded from "./screens/Onboarded"
import MainTab from "./screens/MainTab";

import Appliances from "./subcategory/Appliances"
import Electrician from "./subcategory/Electrician"
import Carpenter from "./subcategory/Carpenter";
import Painter from "./subcategory/Painter"
import Beutician from "./subcategory/Beutician"
import Barber from "./subcategory/Barber"
import HomeCleaner from "./subcategory/HomeCleaner"
import Gasbooking from "./subcategory/Gasbooking"
import Tvrepair from "./sub catogery appliance/Tvrepair"
import Acrepair from "./sub catogery appliance/Acrepair"
import Refrigerator from "./sub catogery appliance/Refrigerator"
import Rorepair from "./sub catogery appliance/Rorepair"
import Geyser from "./sub catogery appliance/Geyser"
import Aircooler from "./sub catogery appliance/Aircooler"
import Plumber from "./subcategory/Plumber"
import Intro from "./screens/Intro"
import Displaycart from "./Addtocart/Displaycart"
import InstallationTv from "./Addtocart/InstallationTv"
import UninstallationTv from "./Addtocart/UninstallationTv"
import Tvspecker from "./Addtocart/Tvspecker"
import Tvdead from "./Addtocart/Tvdead"
import Acservice from "./Addtocart/Acservice"
import Acrepairbook from "./Addtocart/Acrepairbook"
import Acinstalluninstall from "./Addtocart/Acinstalluninstall"
import SingleDoor from "./Addtocart/SingleDoor"
import Sidebysidedoor from "./Addtocart/Sidebysidedoor"
import DoubleDoor from "./Addtocart/DoubleDoor"
import Roinstallation from "./Addtocart/Roinstallation"
import Rouninstalltion from "./Addtocart/Rouninstallation"
import Roservicing from "./Addtocart/Roservicing"
import Rorepairbook from "./Addtocart/Rorepairbook"
import Geyserinstall from "./Addtocart/Geyserinstall"
import Geyseruninstall from "./Addtocart/Geyseruninstall"
import Geyserservicing from "./Addtocart/Gyserservicing"
import Geyserrepair from "./Addtocart/Gyserrepair"
import Geysermaintance from "./Addtocart/Gysermaintance"
import Aircoolerrepair from "./Addtocart/Aircoolerrepair"
import Aircoolerpartreplace from "./Addtocart/Aircoolerpartreplace"
import Aircoolermaintance from "./Addtocart/Aircoolermaintance"
import Switchsocket from "./Addtocart/Switchsocket"
import Fan from "./Addtocart/Fan"
import Lightbook from "./Addtocart/Lightbook"
import McbandFuse from "./Addtocart/McbandFuse"
import Inverter from "./Addtocart/Inverter"
import Wiring from "./Addtocart/Wiring"
import Homepainting from "./Addtocart/Homepainting"
import Waterproofing from "./Addtocart/Waterproofing"
import Walltexured from "./Addtocart/Walltexured"
import Enamelpainting from "./Addtocart/Enamelpainting"
import WoodPolishing from "./Addtocart/WoodPolishing"
import Wallpaper from "./Addtocart/Wallpaper"
import Carcleaning from "./Addtocart/Carcleaning"
import Hatchbackcar from "./Addtocart/Hatchbackcar"
import Compactsuv from "./Addtocart/Compactsuv"
import Suvcar from "./Addtocart/Suvcar"
import Sedancar from "./Addtocart/Sedancar"
import Luxurycar from "./Addtocart/Luxurycar"
import HomeOfficeclean from "./Addtocart/HomeOfficeclean"
import Sofaclean from "./Addtocart/Sofaclean"
import Bathroomclean from "./Addtocart/Bathroomclean"
import Kitchenclean from "./Addtocart/Kitchenclean"
import Carpetclean from "./Addtocart/Carpetclean"
import BasinSink from "./Addtocart/BasinSink"
import Bathfitting from "./Addtocart/Bathfitting"
import Blockage from "./Addtocart/Blockage"
import TapMixer from "./Addtocart/TapMixer"
import Toilet from "./Addtocart/Toilet"
import WaterTank from "./Addtocart/WaterTank"
import Motor from "./Addtocart/Motor"
import Minorinstallation from "./Addtocart/Minorinstallation"
import Bed from "./Addtocart/Bed"
import Cupboard from "./Addtocart/Cupboard"
import Door from "./Addtocart/Door"
import FurnitureRepair from "./Addtocart/FurnitureRepair"
import Window from "./Addtocart/Window"



















const Apstack=createStackNavigator();
const App=()=> {
  return (
    <NavigationContainer>
      <Apstack.Navigator>
      <Apstack.Screen name=" " component={Onboarded} options={{ headerShown: false }}/>
        <Apstack.Screen name="MainTab" component={MainTab}/>
        <Apstack.Screen name="Appliances" component={Appliances} />
        <Apstack.Screen name="Electrician" component={Electrician} />
        <Apstack.Screen name="Carpenter" component={Carpenter} />
        <Apstack.Screen name="Painter" component={Painter} />
        <Apstack.Screen name="Beutician" component={Beutician} />
        <Apstack.Screen name="Barber" component={Barber} />
        <Apstack.Screen name="HomeCleaner" component={HomeCleaner} />
        <Apstack.Screen name="Gasbooking" component={Gasbooking} />
        <Apstack.Screen name="Tvrepair" component={Tvrepair} />
        <Apstack.Screen name="Acrepair" component={Acrepair} />
        <Apstack.Screen name="Refrigerator" component={Refrigerator} />
        <Apstack.Screen name="Rorepair" component={Rorepair} />
        <Apstack.Screen name="Geyser" component={Geyser} />
        <Apstack.Screen name="Aircooler" component={Aircooler} />
        <Apstack.Screen name="Plumber" component={Plumber} />
        <Apstack.Screen name="Intro" component={Intro} />
        <Apstack.Screen name="Displaycart" component={Displaycart} />
        <Apstack.Screen name="InstallationTv" component={InstallationTv} />
        <Apstack.Screen name="UninstallaionTv" component={UninstallationTv} />
        <Apstack.Screen name="Tvspecker" component={Tvspecker} />
        <Apstack.Screen name="Tvdead" component={Tvdead} />
        <Apstack.Screen name="Acservice" component={Acservice} />
        <Apstack.Screen name="Acrepairbook" component={Acrepairbook} />
        <Apstack.Screen name="Acinstalluninstall" component={Acinstalluninstall} />
        <Apstack.Screen name="SingleDoor" component={SingleDoor} />
        <Apstack.Screen name="Sidebysidedoor" component={Sidebysidedoor} />
        <Apstack.Screen name="DoubleDoor" component={DoubleDoor} />
        <Apstack.Screen name="Roinstallation" component={Roinstallation} />
        <Apstack.Screen name="Rouninstalltion" component={Rouninstalltion} />
        <Apstack.Screen name="Roservicing" component={Roservicing} />
        <Apstack.Screen name="Rorepairbook" component={Rorepairbook} />
        <Apstack.Screen name="Geyserinstall" component={Geyserinstall} />
        <Apstack.Screen name="Geyseruninstall" component={Geyseruninstall} />
        <Apstack.Screen name="Geyserservicing" component={Geyserservicing} />
        <Apstack.Screen name="Geyserrepair" component={Geyserrepair} />
        <Apstack.Screen name="Geysermaintance" component={Geysermaintance} />
        <Apstack.Screen name="Aircoolerrepair" component={Aircoolerrepair} />
        <Apstack.Screen name="Aircoolerpartreplace" component={Aircoolerpartreplace} />
        <Apstack.Screen name="Aircoolermaintance" component={Aircoolermaintance} />
        <Apstack.Screen name="Switchsocket" component={Switchsocket} />
        <Apstack.Screen name="Fan" component={Fan} />
        <Apstack.Screen name="Lightbook" component={Lightbook} />
        <Apstack.Screen name="McbandFuse" component={McbandFuse} />
        <Apstack.Screen name="Inverter" component={Inverter} />
        <Apstack.Screen name="Wiring" component={Wiring} />
        <Apstack.Screen name="Homepainting" component={Homepainting} />
        <Apstack.Screen name="Waterproofing" component={Waterproofing} />
        <Apstack.Screen name="Walltexured" component={Walltexured} />
        <Apstack.Screen name="Enamelpainting" component={Enamelpainting} />
        <Apstack.Screen name="WoodPolishing" component={WoodPolishing} />
        <Apstack.Screen name="Wallpaper" component={Wallpaper} />
        <Apstack.Screen name="Carcleaning" component={Carcleaning} />
        <Apstack.Screen name="Hatchbackcar" component={Hatchbackcar} />
        <Apstack.Screen name="Compactsuv" component={Compactsuv} />
        <Apstack.Screen name="Suvcar" component={Suvcar} />
        <Apstack.Screen name="Sedancar" component={Sedancar} />
        <Apstack.Screen name="Luxurycar" component={Luxurycar} />
        <Apstack.Screen name="HomeOfficeclean" component={HomeOfficeclean} />
        <Apstack.Screen name="Sofaclean" component={Sofaclean} />
        <Apstack.Screen name="Bathroomclean" component={Bathroomclean} />
        <Apstack.Screen name="Kitchenclean" component={Kitchenclean} />
        <Apstack.Screen name="Carpetclean" component={Carpetclean} />
        <Apstack.Screen name="BasinSink" component={BasinSink} />
        <Apstack.Screen name="Bathfitting" component={Bathfitting} />
        <Apstack.Screen name="Blockage" component={Blockage} />
        <Apstack.Screen name="TapMixer" component={TapMixer} />
        <Apstack.Screen name="Toilet" component={Toilet} />
        <Apstack.Screen name="WaterTank" component={WaterTank} />
        <Apstack.Screen name="Motor" component={Motor} />
        <Apstack.Screen name="Minorinstallation" component={Minorinstallation} />
        <Apstack.Screen name="Bed" component={Bed} />
        <Apstack.Screen name="Cupboard" component={Cupboard} />
        <Apstack.Screen name="Door" component={Door} />
        <Apstack.Screen name="FurnitureRepair" component={FurnitureRepair} />
        <Apstack.Screen name="Window" component={Window} />
      </Apstack.Navigator>
    </NavigationContainer>
  );
}
export default App;


