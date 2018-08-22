import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { handleInitialData } from "../actions/asyncstatestorage";
import Loading from "./Loading";
import { createStackNavigator } from "react-navigation";
import DeckList from "./DeckList";
import SingleDeckNav from "./SingleDeckNav";
import NewDeck from "./NewDeck";
import NewQuestion from './NewQuestion'
import Hello from './Hello'

const StartStackNavigator = createStackNavigator(
    {
        DeckList: {
            screen: DeckList
        },
        SingleDeckNav: {
            screen: SingleDeckNav
        },
        NewDeck: {
            screen: NewDeck
        },
        NewQuestion: {
            screen: NewQuestion
        },
        Hello: {
            screen: Hello
        }
    },
    {
        initialRouteName: "DeckList"
    }
);

class Start extends Component {
    componentDidMount() {
        this.props.handleInitialData();
    }
    render() {
        const { loading } = this.props;
        if (loading) {
            return <Loading />;
        }
        return <StartStackNavigator />;
    }
}

function mapStateToProps({ loading }) {
    return {
        loading
    };
}

function mapStateToDispatch(dispatch) {
    return bindActionCreators({ handleInitialData }, dispatch);
}
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(Start);
