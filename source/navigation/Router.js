import * as React from 'react';
import { NavigationContainer, TabActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import styles from '/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/source/pages/SubmittedOrders/styles.js';


import {Image} from 'react-native' ;
console.log(Image); 


const Stack = createNativeStackNavigator();

{/*Creation of Navigation Header */}
const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NavigationHeader"
                component={TabNavigation} 
                options={{
                    title: 'Order'
                 }}
                 size = {30}
                />

                <Stack.Screen name="BackButton"
                    component={TabNavigation}
                    options={{
                        headerTitle: () => {
                            <Image source= {require("/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/assets/svg/back-arrow.svg")}
                            />
                        }
                    }}
                    size={30}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;