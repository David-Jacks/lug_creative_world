import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import 'hover.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/users";
import articleReducer from "./features/article";
import themeReducer from "./features/theme";
// creating redux store that will contain all my app state and manage my states using reducers
const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    theme: themeReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

