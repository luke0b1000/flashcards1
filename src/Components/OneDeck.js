import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

class OneDeck extends Component {
    render() {
        const { deckTitle, asyncStateStorage } = this.props;
        const questionLength = asyncStateStorage[deckTitle].questions.length;
        return (
            <View>
                <Text>OneDeck</Text>
                <Text>{deckTitle}</Text>
                <Text>{questionLength}</Text>
                <Button
                    onPress={() =>
                        this.props.navigation.navigate("NewQuestion", {
                            deckTitle
                        })
                    }
                    title="Add Card"
                />
                <Button
                    disabled={!Boolean(questionLength)}
                    onPress={() =>
                        this.props.navigation.navigate("Card", { deckTitle })
                    }
                    title="Start Quiz"
                />
            </View>
        );
    }
}

function mapStateToProps({ asyncStateStorage }, { navigation }) {
    const deckTitle = navigation.getParam("deckTitle");
    return {
        asyncStateStorage,
        deckTitle
    };
}

export default connect(
    mapStateToProps,
    null
)(OneDeck);
