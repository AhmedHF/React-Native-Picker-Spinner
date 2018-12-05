/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class SelectedItem extends Component {

    render() {
        const selectedValue = this.props.navigation.getParam('itemdetails',"ahmed");
        console.log(this.props.navigation)
        return (
            <View style={styles.container}>
                <View >
                    <Text>
                        {JSON.stringify(selectedValue)} Your Payment Mode
                    </Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    picker: {
        width: 260,
        height: 50,
    },
    button: {
        marginBottom: 10,
        width: 260,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#F035E0',
        borderRadius: 20,
        zIndex: 100,
    },
});