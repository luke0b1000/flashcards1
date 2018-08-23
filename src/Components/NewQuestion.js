import React, { Component } from "react";
import { TextInput, Button, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { handleDeckQuestion } from "../actions/asyncstatestorage";
import { bindActionCreators } from "redux";

class NewQuestion extends Component {
    state = {
        question: "question placeholder",
        answer: "answer placeholder"
    };
    handleSubmit = () => {
        const deckTitle = this.props.deckTitle;
        this.props.handleDeckQuestion(
            deckTitle,
            this.state.question,
            this.state.answer
        );
        this.props.navigation.navigate("OneDeck", {
            deckTitle
        });
    };
    render() {
        return (
            <View>
                <Text>New Question</Text>
                <TextInput
                    onChangeText={question => this.setState({ question })}
                    value={this.state.question}
                />
                <TextInput
                    onChangeText={answer => this.setState({ answer })}
                    value={this.state.answer}
                />
                <Button onPress={this.handleSubmit} title="submit" />
            </View>
        );
    }
}

function mapStateToProps({}, { navigation }) {
    const deckTitle = navigation.getParam("deckTitle");
    return {
        deckTitle
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleDeckQuestion }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewQuestion);
