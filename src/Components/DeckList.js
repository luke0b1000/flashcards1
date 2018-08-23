import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class DeckList extends Component {
    render() {
        const { deckList, asyncStateStorage } = this.props;
        return (
            <View>
                <Text>My Deck</Text>
                {deckList ? (
                    deckList.map(deckTitle => {
                        const deckCardLength =
                            asyncStateStorage[deckTitle].questions.length;
                        return (
                            <TouchableOpacity
                                key={deckTitle}
                                onPress={() => {
                                    this.props.navigation.navigate("OneDeck", {
                                        deckTitle
                                    });
                                }}
                            >
                                <Text>
                                    {deckTitle} - {deckCardLength}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    <Text>No Decks</Text>
                )}
                <Button
                    onPress={() =>
                        this.props.navigation.navigate("NewDeckTitle")
                    }
                    title="NEW DECK"
                />
            </View>
        );
    }
}

function mapStateToProps({ asyncStateStorage }) {
    const deckList = Object.keys(asyncStateStorage);
    return {
        asyncStateStorage,
        deckList
    };
}
export default connect(
    mapStateToProps,
    null
)(DeckList);
