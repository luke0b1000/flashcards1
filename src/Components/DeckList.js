import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import EachDeck from "./EachDeck";

class DeckList extends Component {
    render() {
        const { deckList, navigation } = this.props;
        return (
            <View>
                <Text>DeckList</Text>
                {deckList
                    ? deckList.map(deck => (
                          <EachDeck
                              key={deck}
                              deck={deck}
                              rnavigation={navigation}
                          />
                      ))
                    : ""}
                <Button
                    onPress={() => this.props.navigation.navigate("NewDeck")}
                    title="NEW DECK"
                />
            </View>
        );
    }
}

function mapStateToProps({ asyncStateStorage }) {
    const deckList = Object.keys(asyncStateStorage);
    return {
        deckList
    };
}
export default connect(
    mapStateToProps,
    null
)(DeckList);
