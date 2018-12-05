import React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base';

const Item = Picker.Item;
export default class PickerSpinner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value) {
        this.setState({
            selected1 : value
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item label="Cats" value="key0" />
                        <Item label="Dogs" value="key1" />
                        <Item label="Birds" value="key2" />
                        <Item label="Elephants" value="key3" />
                   </Picker>
                </Content>
            </Container>
        );
    }
}
