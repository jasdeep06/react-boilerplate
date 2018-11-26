import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./routes/AppRouter"
import {Provider} from "react-redux"
import configureStore from "./store/configureStore"

const store = configureStore();

const appRoot = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(appRoot,document.getElementById('app'))
