import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {Provider} from 'react-redux'

import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = configureStore({
    reducer: reducers,
    thunk
})

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)