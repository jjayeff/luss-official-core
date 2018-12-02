import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Head from 'next/head';
import '../css/main.css';
import reducer from '../reduxModules';
import rootSaga from '../sagas';
import Navbar from './Navbar';
import Footer from './Footer';
import icon from '../img/logo-black.png';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default class Layout extends Component {
  render() {
    sagaMiddleware.run(rootSaga);
    return (
      <Provider store={store}>
        <div>
          <Head>
            <title>{this.props.title}</title>
            <link rel="icon" type="image/png" href={icon} />
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
              rel="stylesheet"
            />
            <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js" />
            <script src="path/to/your/bundle.js" />
          </Head>
          <header
            className={
              this.props.page == 'index'
                ? 'main-header'
                : this.props.page == 'resume'
                ? 'resume-header'
                : ''
            }
          >
            <Navbar page={this.props.page} />
          </header>
          {this.props.children}
          <Footer />
        </div>
      </Provider>
    );
  }
}
