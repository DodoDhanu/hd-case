import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubmittedOrders from '../SubmittedOrders';

import ordersjson from '../../../assets/data/orders.json'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../SubmittedOrders/styles.js';
import { Button } from 'react-native'


console.log(ordersjson)


const Orders = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>

            {/* 'Open Orders' Button:*/}
            <View style={styles.ButtonOrders}>
            <View>
             <Button disabled color = "#F1F5F5" title ="Open Orders" />
            </View>

            {/* 'Submitted Orders' Button:*/}
            <View>
             <Button color = "#F1F5F5"  title ="Submitted Orders" />
            </View>
            </View>

            {/* Pending orders title:*/}
            <View style={{ marginLeft: 25, marginBottom: 15 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Pending Orders</Text>
            </View>

            {/* map function used to display orders from json file:*/}
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