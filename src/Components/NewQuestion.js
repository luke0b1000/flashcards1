import React, { Component } from "react";
import { TextInput, Button, Text, View, StyleSheet } from "react-native";

class NewQuestion extends Component {
    state = {
        question: "question placeholder",
        answer: "answer placeholder"
    };
    handleSubmit = () => {
        // Do stuff
        this.props.navigation.navigate('DeckList')
    }
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
                <Button onPress={this.handleSubmit} title='submit' />
            </View>
        );
    }
}

export default NewQuestion;
