import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#F1F5F5',
        backgroundColor: '#F1F5F5',
        padding: 10,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20

    },
    containerOne: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    containerThree: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    Image: {
        flex: 1,
        height: 50,
        width: 50,
        alignItems: 'center',
    },
    ButtonOrders: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 40,
        borderColor: '#F1F5F5',
    },
    NavigationHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    }

});
export default styles;