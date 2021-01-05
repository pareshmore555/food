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
      </Apstack.Navigator>
    </NavigationContainer>
  );
}
export default App;


