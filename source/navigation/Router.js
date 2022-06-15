import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigation from './TabNavigation';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import styles from '/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/source/pages/SubmittedOrders/styles.js';


import {Image} from 'react-native' ;
console.log(Image); 


const Stack = createNativeStackNavigator();


const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Ordersssss"
                component={TabNavigation} 
                options={{
                    headerTitle: () => (
                        
                        <Image
                             style={styles.Image} 
                             source = {require('/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/assets/svg/logo.svg')}
                        />
                    )
                 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;