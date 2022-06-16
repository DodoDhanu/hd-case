import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ordersjson from '../../../assets/data/orders.json'

console.log(ordersjson);


//Formatting for order containers. Each item is put into its own container.
const SubmittedOrders = (props) => {
    return (

        <View>

            <View style={styles.container}>

                {/*Container for order status*/}
                <View style={styles.containerOne}>
                    <View style={{ borderColor: '#F54081', borderWidth: 1, width: 10, height: 10, backgroundColor: '#F54081', borderRadius: 5 }} />
                    <View style={{ marginLeft: 5 }}>
                        <Text>{props.order.orderStatus}</Text>
                    </View>

                </View>

                {/*Container for pharmacy details*/}
                <View style={styles.containerTwo}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.order.pharmacyName}</Text>
                    <MaterialCommunityIcons name="chevron-right" size={30} />
                </View>

                {/*Container for total*/}
                <View style={styles.containerThree}>
                    <View>
                        <Text style={{ fontSize: 16 }}>Sum Total: R</Text>
                    </View>

                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontSize: 16 }}>{props.order.orderTotal}</Text>
                    </View>
                </View>

            </View>

        </View>

    )
}









export default SubmittedOrders;