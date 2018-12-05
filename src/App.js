/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content, Picker } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'Wallet',
    }
  }
  onValueChange(value) {
    this.setState({
      selectedItem: value
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <View style={styles.picker}>
          <Container>
            <Content>
              <Picker
                mode="dropdown"
                selectedValue={this.state.selectedItem}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Wallet" value="Wallet"/>
                <Picker.Item label="ATM Card" value="ATM Card" />
                <Picker.Item label="Debit Card" value="Debit Card" />
                <Picker.Item label="Credit Card" value="Credit Card" />
                <Picker.Item label="Net Banking" value="Net Banking" />
              </Picker>
            </Content>
          </Container>
        </View>

        <TouchableOpacity style={styles.button} onPress={() =>
          navigate('pickerItem', { itemdetails: this.state.selectedItem })} >
          <Text style={{ alignItems: 'center', justifyContent: 'center' }}>go Item Details</Text>
        </TouchableOpacity>
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