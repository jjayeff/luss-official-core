import React, { Component } from 'react';
import person1 from '../../img/person1.jpg';
import person2 from '../../img/person2.jpg';
import person3 from '../../img/person3.jpg';
import person4 from '../../img/person4.jpg';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

export default class Comments extends Component {
  componentDidMount() {}

  render() {
    return (
      <section className="section section-posts grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Comments</span>
                  <table className="striped">
                    <tbody>
                      <tr>
                        <td width="70">
                          <img
                            src={person1}
                            alt=""
                            className="responsive-img circle"
                          />
                        </td>
                        <td>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore, nostrum!
                        </td>
                        <td>
                          <a href="#!" className="green-text">
                            <i className="material-icons">done</i>
                          </a>
                          <a href="#!" className="red-text">
                            <i className="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="70">
                          <img
                            src={person2}
                            alt=""
                            className="responsive-img circle"
                          />
                        </td>
                        <td>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore, nostrum!
                        </td>
                        <td>
                          <a href="#!" className="green-text">
                            <i className="material-icons">done</i>
                          </a>
                          <a href="#!" className="red-text">
                            <i className="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="70">
                          <img
                            src={person3}
                            alt=""
                            className="responsive-img circle"
                          />
                        </td>
                        <td>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore, nostrum!
                        </td>
                        <td>
                          <a href="#!" className="green-text">
                            <i className="material-icons">done</i>
                          </a>
                          <a href="#!" className="red-text">
                            <i className="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="70">
                          <img
                            src={person4}
                            alt=""
                            className="responsive-img circle"
                          />
                        </td>
                        <td>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore, nostrum!
                        </td>
                        <td>
                          <a href="#!" className="green-text">
                            <i className="material-icons">done</i>
                          </a>
                          <a href="#!" className="red-text">
                            <i className="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <ul className="pagination center">
                    <li className="disabled">
                      <a href="#!" className="black-text">
                        <i className="material-icons">chevron_left</i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#!" className="white-text">
                        1
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="black-text">
                        2
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="black-text">
                        3
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="black-text">
                        4
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="black-text">
                        5
                      </a>
                    </li>
                    <li className="waves-effect">
                      <a href="#!" className="black-text">
                        <i className="material-icons">chevron_right</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
