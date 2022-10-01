import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

        <Provider store={createStore(reducers)}>
                <App />
        </Provider>
        
)


