import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <Text style={styles.Text}>Loading...</Text>
                <Text>Loading...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
    },
    Text: {
        color: "red"
    }
});

export default Loading;
