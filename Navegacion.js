import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./Navegacion/Login";
import Recuperar from "./Navegacion/Recuperar";

import HomeBtn from "./Navegacion/HomeBtn";
import Home3 from "./Navegacion/Home3";



const Stack = createStackNavigator();

function Stacks(){
    return(
        <Stack.Navigator
            initialRouteName="Login"
        >
        <Stack.Screen
            name="Bienvenido"
            component={Login}
            />

        <Stack.Screen
            name="Recuperar"
            component={Recuperar}
            />
        </Stack.Navigator>
    );
}

export default function Navegacion() {
    return (
      <NavigationContainer>
         <Stacks/>  
      </NavigationContainer>
   )
  }
/*const TabNav = createBottomTabNavigator();

function Tabs () {
    return (
        <TabNav.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'green',
            }} >

            <TabNav.Screen 
            name="Home" 
            component={Stacks}
            //component={Home}
            options={{
                tabBarLabel: 'Home', //se utiliza para asignar nombre a la opción del botón
                tabBarIcon:  ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/> //se utiliza renderizar el icon
                ),
                tabBarBadge: 3, //se utiliza para las notificaciones
                headerShown: false, //oculta el header
            }}/>

            <TabNav.Screen name="Home2" component={Home2}/> 
            <TabNav.Screen name="HomeBtn" component={HomeBtn}/> 
            <TabNav.Screen name="Home3" component={Home3}/> 

            
        </TabNav.Navigator>
    )
};

export default function Navegacion() {
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
);
}*/