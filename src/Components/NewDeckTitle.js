import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { handleDeckTitle } from "../actions/asyncstatestorage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class NewDeckTitle extends Component {
    state = {
        deckTitle: "Deck Title"
    };
    handleSubmit = () => {
        this.props.handleDeckTitle(this.state.deckTitle);
        this.props.navigation.navigate("OneDeck", {
            deckTitle: this.state.deckTitle
        });
    };
    render() {
        return (
            <View>
                <Text>What is the Deck Title?</Text>
                <TextInput
                    onChangeText={deckTitle => this.setState({ deckTitle })}
                    value={this.state.deckTitle}
                />
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleDeckTitle }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(NewDeckTitle);
