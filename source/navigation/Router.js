import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import styles from '../components/SubmittedOrders/styles.js';
import { View, Text, Image } from 'react-native';
import logo from '/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/assets/svg/logo.svg';
import blackArrow from '/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/assets/svg/back-arrow.svg';
console.log(Image);


const Stack = createNativeStackNavigator();

{/*Creation of Navigation Header(BackButton Image and logo image in a row with title) */ }
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <View style={styles.NavigationHeaderContainer}>
                    <Image source={{ blackArrow }} style={{ width: 30, height: 30 }} />
                    <Image source={{ logo }} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black' , fontWeight: 'bold', fontSize: 16}}>Orders</Text>
                </View>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;