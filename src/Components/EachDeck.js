import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class EachDeck extends Component {
    render() {
        const { rnavigation, deck, cardsInDeck } = this.props;
        return (
            <View>
                <TouchableOpacity
                    onPress={() =>
                        rnavigation.navigate("SingleDeckNav", {
                            deck
                        })
                    }
                >
                    <Text>{deck}</Text>
                    <Text>{cardsInDeck}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps({ asyncStateStorage }, { deck, rnavigation }) {
    const cardsInDeck = asyncStateStorage[deck].questions.length;
    return {
        cardsInDeck,
        rnavigation
    };
}

export default connect(
    mapStateToProps,
    null
)(EachDeck);
