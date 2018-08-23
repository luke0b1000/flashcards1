import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Card extends Component {
    state = {
        deckQuestionArray: this.props.deckQuestionArray,
        deckQuestionLength: this.props.deckQuestionLength,
        deckQuestionIndex: 0,
        numberOfCorrect: 0,
        cardSide: "question"
    };
    resetQuiz = () => {
        this.setState({
            cardSide: "question",
            deckQuestionIndex: 0,
            numberOfCorrect: 0
        });
    };
    nextQuestion = result => {
        if (result === "correct") {
            this.setState(prevState => ({
                numberOfCorrect: prevState.numberOfCorrect + 1
            }));
        }
        this.setState(prevState => ({
            cardSide: "question",
            deckQuestionIndex: prevState.deckQuestionIndex + 1
        }));
    };
    toggleCardSide = () => {
        if (this.state.cardSide === "question") {
            this.setState({
                cardSide: "answer"
            });
        } else {
            this.setState({
                cardSide: "question"
            });
        }
    };
    render() {
        const {
            deckQuestionArray,
            deckQuestionLength,
            deckQuestionIndex,
            cardSide
        } = this.state;
        const { navigation, deckTitle } = this.props;
        if (deckQuestionIndex < deckQuestionLength) {
            return (
                <View>
                    <Text>{`${deckQuestionIndex}/${deckQuestionLength}`}</Text>
                    <TouchableOpacity onPress={this.toggleCardSide}>
                        <Text>
                            {deckQuestionArray[deckQuestionIndex][cardSide]}
                        </Text>
                    </TouchableOpacity>
                    <Button
                        onPress={() => this.nextQuestion("correct")}
                        title="Correct"
                    />
                    <Button
                        onPress={() => this.nextQuestion("incorrect")}
                        title="Incorrect"
                    />
                </View>
            );
        } else {
            const { numberOfCorrect, deckQuestionLength } = this.state;
            return (
                <View>
                    <Text>Result</Text>
                    <Text>{`Score: ${(numberOfCorrect / deckQuestionLength) *
                        100}%`}</Text>
                    <Button
                        onPress={() => this.resetQuiz()}
                        title="Restart Quiz"
                    />
                    <Button
                        onPress={() =>
                            navigation.navigate("OneDeck", { deckTitle })
                        }
                        title="Back to Deck"
                    />
                </View>
            );
        }
    }
}

function mapStateToProps({ asyncStateStorage }, { navigation }) {
    const deckTitle = navigation.getParam("deckTitle");
    const deckQuestionArray = asyncStateStorage[deckTitle].questions;
    const deckQuestionLength = deckQuestionArray.length;
    return {
        deckTitle,
        deckQuestionArray,
        deckQuestionLength
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);
