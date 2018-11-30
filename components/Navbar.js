import React from 'react';
import { Home, Item } from './Router';
import logo_main from '../img/logo-black.png';
import logo_another from '../img/logo-white.png';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Index extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.modal').modal();
    $('.dropdown-button').dropdown({
      constrainWidth: false,
      belowOrigin: true,
      alignment: 'left'
    });
  }
  anotherPage() {
    return (
      <nav className="transparent grey darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <a href="" className="brand-logo" onClick={Home}>
              <img src={logo_another} className="logo-img" />
            </a>
            <a href="#" data-activates="mobile-nav" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="" onClick={Item}>
                  NEW ARRIVAL
                </a>
              </li>
              <li>
                <a class="dropdown-button" data-target="my-dropdown" href="#">
                  CATEGORY <i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a className="" href="">
                  NEWS UPDATE
                </a>
              </li>
              <li>
                <a className="" href="">
                  PAYMENT
                </a>
              </li>
              <li>
                <a href="">
                  <i className="material-icons">shopping_cart</i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="material-icons">lock_open</i>
                </a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <h4 className="purple-text text-darken-4 center">
                <img src={logo_main} className="logo-img" />
              </h4>
              <li>
                <a className="black-text" onClick={Home}>
                  HOME
                </a>
              </li>
              <li>
                <a className="black-text" onClick={Item}>
                  NEW ARRIVAL
                </a>
              </li>
              <li>
                <a
                  class="dropdown-button black-text"
                  data-target="my-dropdown1"
                  href="#"
                >
                  CATEGORY{' '}
                  <i class="material-icons right black-text">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a className="black-text" href="">
                  NEWS UPDATE
                </a>
              </li>
              <li>
                <a className="black-text" href="">
                  PAYMENT
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* -- DropDown -- */}
        <ul id="my-dropdown" class="dropdown-content">
          <li>
            <a href="#" class="black-text">
              T-SHIRTS
            </a>
          </li>
          <li>
            <a href="#" class="black-text">
              HATS
            </a>
          </li>
        </ul>
        <ul id="my-dropdown1" class="dropdown-content">
          <li>
            <a href="#">T-SHIRTS</a>
          </li>
          <li>
            <a href="#">HATS</a>
          </li>
        </ul>
      </nav>
    );
  }

  homePage() {
    return (
      <nav className="transparent">
        <div className="container">
          <div className="nav-wrapper">
            <a href="" className="brand-logo" onClick={Home}>
              <img src={logo_main} className="logo-img" />
            </a>
            <a href="" data-activates="mobile-nav" className="button-collapse">
              <i className="material-icons black-text">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="black-text" onClick={Item}>
                  NEW ARRIVAL
                </a>
              </li>
              <li>
                <a
                  class="dropdown-button black-text"
                  data-target="my-dropdown"
                  href="#"
                >
                  CATEGORY{' '}
                  <i class="material-icons right black-text">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a className="black-text" href="">
                  NEWS UPDATE
                </a>
              </li>
              <li>
                <a className="black-text" href="">
                  PAYMENT
                </a>
              </li>
              <li>
                <a href="">
                  <i className="material-icons black-text">shopping_cart</i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="material-icons black-text">lock_open</i>
                </a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-nav">
              <h4 className="purple-text text-darken-4 center">
                <img src={logo_main} className="logo-img" />
              </h4>
              <li>
                <a className="black-text" onClick={Home}>
                  HOME
                </a>
              </li>
              <li>
                <a className="black-text" onClick={Item}>
                  NEW ARRIVAL
                </a>
              </li>
              <li>
                <a
                  class="dropdown-button black-text"
                  data-target="my-dropdown1"
                  href="#"
                >
                  CATEGORY{' '}
                  <i class="material-icons right black-text">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a className="black-text" href="">
                  NEWS UPDATE
                </a>
              </li>
              <li>
                <a className="black-text" href="">
                  PAYMENT
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* -- DropDown -- */}
        <ul id="my-dropdown" class="dropdown-content">
          <li>
            <a href="#" class="black-text">
              T-SHIRTS
            </a>
          </li>
          <li>
            <a href="#" class="black-text">
              HATS
            </a>
          </li>
        </ul>
        <ul id="my-dropdown1" class="dropdown-content">
          <li>
            <a href="#">T-SHIRTS</a>
          </li>
          <li>
            <a href="#">HATS</a>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    if (this.props.page == 'index') {
      return <div>{this.homePage()}</div>;
    } else {
      return <div>{this.anotherPage()}</div>;
    }
  }
}

export default Index;
