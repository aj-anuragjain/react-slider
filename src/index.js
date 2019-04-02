import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import './index.css';
import App from './App';
import store from "./store";


const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
