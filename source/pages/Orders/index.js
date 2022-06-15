import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubmittedOrders from '../SubmittedOrders';

import ordersjson from '../../../assets/data/orders.json'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '/Users/dhanudhardas/Documents/dev/HealthDart/case/hd-case/source/pages/SubmittedOrders/styles.js';
import { Button } from 'react-native'


console.log(ordersjson)


const Orders = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>

            <View style={styles.ButtonOrders}>
            <View>
             <Button disabled color = "#F1F5F5" title ="Open Orders" />
            </View>

            <View>
             <Button color = "#F1F5F5"  title ="Submitted Orders" />
            </View>
            </View>

            <View style={{ marginLeft: 25, marginBottom: 15 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Pending Orders</Text>
            </View>

            <ScrollView>
                {
                    ordersjson.map((order) => {
                        return (

                            <View key={order.orderID}>
                                <SubmittedOrders order={order} />
                            </View>)


                    }

                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}


export default Orders;