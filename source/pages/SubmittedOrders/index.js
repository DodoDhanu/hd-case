import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import ordersjson from '../../../assets/data/orders.json'

console.log(ordersjson);



 const SubmittedOrders = (props) => {
    return(

        <View>    

        <View style={{marginLeft:25, marginBottom: 15}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Pending Orders</Text>
        </View>  

        <View style={styles.container}>
            
            <View style={styles.containerOne}>
                <View style={{borderColor: '#F54081', borderWidth: 1, width: 10, height: 10, backgroundColor: '#F54081', borderRadius: 5}} />
                <View style={{marginLeft: 5}}>
                   <Text>{props.order.orderStatus}</Text>
                </View>
                
            </View>

            <View style={styles.containerTwo}>
                 <Text style={{fontWeight: 'bold', fontSize: 16}}>{props.order.pharmacyName}</Text>
                 <MaterialCommunityIcons name="chevron-right" size={30} />
            </View>

            <View style={styles.containerThree}>
                <View>
                    <Text style={{fontSize: 16}}>Sum Total:</Text>
                </View>
            
                <View  style={{marginLeft: 5}}>
                <Text style={{fontSize: 16}}>{props.order.orderTotal}</Text>
                </View>
            </View>

        </View>

        </View>

    )
}

    







export default SubmittedOrders;