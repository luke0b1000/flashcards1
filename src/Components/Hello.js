import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Hello extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    }
});

export default Hello;
