import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { newDeckTitle } from "../actions/asyncstatestorage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class NewDeck extends Component {
    state = {
        deckTitle: "Deck Title"
    };
    handleSubmit = () => {
        this.props.newDeckTitle(this.state.deckTitle);
        this.props.navigation.navigate("NewQuestion", {
            deckTitle: this.state.deckTitle
        });
    };
    render() {
        return (
            <View>
                <Text>NewDeck</Text>
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
    return bindActionCreators(newDeckTitle, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(NewDeck);
