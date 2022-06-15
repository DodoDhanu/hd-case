import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigation from './TabNavigation';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator();


const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Ordersssss"
                component={TabNavigation} 
                options={{
                    // headerBackground: () => (
                    //     <Image
                    //     style={StyleSheet.absoluteFill}
                    //     image={require('/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/assets/svg/logo.svg')}
                    //     />
                    // )
                 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;