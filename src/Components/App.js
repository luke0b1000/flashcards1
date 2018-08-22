import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "../reducers";
import middleware from "../middleware";
import Start from "./Start";
// import composeWithDevTools from "remote-redux-devtools";
import { composeWithDevTools } from "remote-redux-devtools";
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
// const store = createStore(reducers, composeEnhancers(middleware));
const store = createStore(reducers, middleware);

// yarn run remotedev
// const composeEnhancers = composeWithDevTools({
//     realtime: true,
//     name: 'Your Instance Name',
//     host: '127.0.0.1',
//     port: 8000, // the port your remotedev server is running at
// })
// const store = createStore(reducers, composeEnhancers(middleware));
// const store = createStore(reducers, composeWithDevTools());
// const store = createStore(reducers, composeEnhancers());
//WORKING
// const store = createStore(
//     reducers,
//     composeWithDevTools({
//         realtime: true,
//         name: "Your Instance Name",
//         host: "127.0.0.1",
//         port: 8000 // the port your remotedev server is running at
//     })
// );

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Start />
            </Provider>
        );
    }
}
