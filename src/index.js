import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redax/redux-store";
import  {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>
    );
};


rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});


reportWebVitals();
