import React from 'react';
import { Home, Admin, Posts, Users, Comments } from '../Router';
import logo_main from '../../img/logo-black.png';
import ocean from '../../img/ocean.jpg';
import person1 from '../../img/person1.jpg';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Index extends React.Component {
  componentDidMount() {
    //Init Side nav
    $('.button-collapse').sideNav();
    // Init Modal
    $('.modal').modal();
  }

  render() {
    return (
      <nav className="white">
        <div className="container">
          <div className="nav-wrapper">
            <a onClick={Home} className="brand-logo black-text">
              <img src={logo_main} className="logo-img" />
            </a>
            <a
              href="#"
              data-activates="side-nav"
              className="button-collapse show-on-large right black-text"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li
                className={this.props.pages == 'index' ? 'active' : ''}
                onClick={Admin}
              >
                <a className="black-text">Dashboard</a>
              </li>
              <li
                className={this.props.pages == 'posts' ? 'active' : ''}
                onClick={Posts}
              >
                <a className="black-text">Posts</a>
              </li>
              <li
                className={this.props.pages == 'comments' ? 'active' : ''}
                onClick={Comments}
              >
                <a className="black-text">Comments</a>
              </li>
              <li
                className={this.props.pages == 'users' ? 'active' : ''}
                onClick={Users}
              >
                <a className="black-text">Users</a>
              </li>
            </ul>
            <ul id="side-nav" className="side-nav">
              <div className="user-view">
                <div className="background">
                  <img src={ocean} alt="" />
                </div>
                <a style={{ marginTop: '30px' }}>
                  <img src={person1} alt="" className="circle" />
                </a>
                <a>
                  {' '}
                  <span className="name white-text">John Doe</span>{' '}
                </a>
                <a style={{ marginBottom: '5px' }}>
                  <span className="email white-text">jdoe@gmail.com</span>
                </a>
              </div>
              <li onClick={Admin}>
                <a>
                  <i className="material-icons">dashboard</i> Dashboard
                </a>
              </li>
              <li onClick={Posts}>
                <a>Posts</a>
              </li>
              <li onClick={Comments}>
                <a>Comments</a>
              </li>
              <li onClick={Users}>
                <a>Users</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <a className="subheader">Account Controls</a>
              </li>
              <li>
                <a className="waves-effect">Logout</a>
              </li>
            </ul>
          </div>
        </div>

        {/*<!-- Fixed Action Button --> */}
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </a>
          <ul>
            <li>
              <a
                href="#post-modal"
                className="modal-trigger btn-floating grey darken-4"
              >
                <i className="material-icons">mode_edit</i>
              </a>
            </li>
            <li>
              <a
                href="#category-modal"
                className="modal-trigger btn-floating  grey darken-4"
              >
                <i className="material-icons">folder</i>
              </a>
            </li>
            <li>
              <a
                href="#user-modal"
                className="modal-trigger btn-floating  grey darken-4"
              >
                <i className="material-icons">supervisor_account</i>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Add User Modal -->*/}
        <div id="category-modal" className="modal">
          <div className="modal-content black-text">
            <h4>Add Category</h4>
            <form>
              <div className="input-field">
                <input type="text" id="title" />{' '}
                <label htmlFor="title">Title</label>
              </div>
            </form>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-action modal-close btn blue white-text"
              >
                Submit
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Add User Modal -->*/}
        <div id="user-modal" className="modal">
          <div className="modal-content black-text">
            <h4>Add User</h4>
            <form>
              <div className="input-field">
                <input type="text" id="name" />{' '}
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field">
                <input type="email" id="email" />{' '}
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field">
                <input type="password" id="password2" />
                <label htmlFor="password2">Confirm Password</label>
              </div>
            </form>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-action modal-close btn blue white-text"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Index;
