import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {store} from './utilis/store';
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
