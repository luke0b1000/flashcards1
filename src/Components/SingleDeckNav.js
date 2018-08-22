import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { connect } from "react-redux";
import Results from "./Results";
import DeckList from "./DeckList";

class SingleDeckHome extends Component {
    render() {
        const { deckObj, navigation } = this.props;
        return (
            <View>
                <Text>SingleDeck</Text>
                <Text>{JSON.stringify(deckObj)}</Text>
                <Text>{deckObj.questions.length}</Text>
                <TouchableOpacity onPress={() => alert("pressed")}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("QuestionHome")}
                >
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps({ asyncStateStorage }, { navigation }) {
    const deck = navigation.getParam("deck", "EMPTY.....");
    const deckObj = asyncStateStorage[deck];
    return {
        deckObj,
        navigation
    };
}
export const CSingleDeckHome = connect(mapStateToProps)(SingleDeckHome);

class QuestionHome extends Component {
    state = {
        questionArr: this.props.deckArrQ,
        questionIndex: 0,
        questionSide: "question",
        numberOfCorrectQuestion: 0
    };
    flipSide = () => {
        this.state.questionSide === "question"
            ? this.setState({ questionSide: "answer" })
            : this.setState({ questionSide: "question" });
    };
    nextQuestion = (navigation, correct) => {
        if (correct === true) {
            this.setState(
                prevState => ({
                    numberOfCorrectQuestion:
                        prevState.numberOfCorrectQuestion + 1
                }),
                () => {
                    if (
                        this.state.questionArr.length - 1 <=
                        this.state.questionIndex
                    ) {
                        navigation.navigate("Results", {
                            numberOfCorrectQuestion: this.state
                                .numberOfCorrectQuestion,
                            navigation: navigation
                        });
                    } else {
                        this.setState(prevState => ({
                            questionIndex: prevState.questionIndex + 1,
                            questionSide: "question"
                        }));
                    }
                }
            );
        }
    };
    render() {
        const { questionArr, questionIndex, questionSide } = this.state;
        const { navigation } = this.props;
        return (
            <View>
                <Text>QuestionHome</Text>
                <Text>{JSON.stringify(this.state)}</Text>
                <Text>xxx {questionArr[questionIndex][questionSide]} xxx</Text>
                <TouchableOpacity onPress={this.flipSide}>
                    <Text>Flipped ME</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.nextQuestion(navigation, true)}
                >
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.nextQuestion(navigation, false)}
                >
                    <Text>Incorrect</Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        );
    }
}
function mapStateToPropsQ({ asyncStateStorage }, { navigation }) {
    const deck = navigation.getParam("deck", "EMPTY.....");
    const deckObj = asyncStateStorage[deck];
    return {
        deckArrQ: deckObj.questions
    };
}
export const CQuestionHome = connect(mapStateToPropsQ)(QuestionHome);

const SingleDeckNav = createSwitchNavigator(
    {
        SingleDeckHome: {
            screen: CSingleDeckHome
        },
        QuestionHome: {
            screen: CQuestionHome
        },
        Results: {
            screen: Results
        },
        DeckList: {
            screen: DeckList
        }
    },
    {
        initialRouteName: "SingleDeckHome"
    }
);

export default SingleDeckNav;
