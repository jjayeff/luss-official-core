import React, { Component } from 'react';
import Head from 'next/head';
import '../../css/main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import icon from '../../img/logo-black.png';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

export default class Layout extends Component {
  componentDidMount() {}

  render() {
    return (
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
        <body className="grey lighten-4">
          <Navbar pages={this.props.pages} />
          {this.props.children}
          <Footer />
        </body>
      </div>
    );
  }
}
