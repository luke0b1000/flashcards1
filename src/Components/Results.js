import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Results extends Component {
    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
                <Button onPress={()=>this.props.navigation.navigate('DeckList')} title='HOME' />
            </View>
        );
    }
}

export default connect(
    null,
    null
)(Results);
