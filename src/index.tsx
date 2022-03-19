import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route,Routes } from "react-router-dom";
//importing components
import Home from './components/Home/Home';
import GetYourPizza from './components/GetYourPizza/GetYourPizza';
import Orders from './components/Orders/Orders';
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/get-your-pizza' element={<GetYourPizza/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
    </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
