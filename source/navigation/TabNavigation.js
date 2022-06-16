import * as React from 'react';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import Consult from '../components/Consult';
import Orders from '../components/Orders';
import Profile from '../components/Profile';


const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

    //Buttons and labelling of bottom tab navgator:
    return(
        <Tab.Navigator>

            {/* Home-page Button */}
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" size={30} />
                )   
            }}
            /> 

            {/* Consult-page Button */}
            <Tab.Screen 
            name="Consult"
            component={Consult} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="message-reply" size={30} />
                )   
            }}
            />

            {/* Order-page Button */}
            <Tab.Screen 
            name="Orders" 
            component={Orders} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart" size={30} />
                )   
            }}
            />

            {/* -page Button */}
            <Tab.Screen 
            name="Profile"
            component={Profile} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-cog" size={30} />
                )   
            }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation