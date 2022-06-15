import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubmittedOrders from '../SubmittedOrders';

import ordersjson from '../../../assets/data/orders.json'
import { ScrollView } from 'react-native-gesture-handler';

console.log(ordersjson)


const Orders = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
            <ScrollView>
            {/* <Text>{ordersjson[0].orderID}</Text>
            <Text>{ordersjson[0].orderStatus}</Text>
            <Text>{ordersjson[0].pharmacyName}</Text>
            <Text>{ordersjson[0].orderTotal}</Text> */}
            {
                ordersjson.map((order) => { 
                    return(                
                    <>
                        <SubmittedOrders key={order.orderID} order={order}/> 
                    </>)


                }

                )
            }
        </ScrollView>
        </SafeAreaView>
    )
}


export default Orders;