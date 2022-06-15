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
                    <View style={{marginLeft:25, marginBottom: 15}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Pending Orders</Text>
        </View>  
            <ScrollView> {/*Loop */}
            {
                ordersjson.map((order) => { 
                    return(                
                    <View key={order.orderID}>
                        <SubmittedOrders  order={order}/> 
                    </View>)


                }

                )
            }
        </ScrollView>
        </SafeAreaView>
    )
}


export default Orders;