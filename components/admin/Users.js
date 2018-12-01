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

export default class RecentPosts extends Component {
  componentDidMount() {}

  render() {
    return (
      <section className="section section-posts grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Users</span>
                  <table className="striped">
                    <thead>
                      <tr>
                        <th />
                        <th>Name</th>
                        <th>Email</th>
                        <th>Registered</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="70">
                          <img
                            src={person1}
                            alt=""
                            className="responsive-img circle"
                          />
                        </td>
                        <td>John Doe</td>
                        <td>jdoe@gmail.com</td>
                        <td>Jan, 1 2018</td>
                        <td>
                          <a
                            href="details.html"
                            className="btn green lighten-2"
                          >
                            Details
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
                        <td>Larry Watters</td>
                        <td>lwatters@gmail.com</td>
                        <td>Jan, 3 2018</td>
                        <td>
                          <a
                            href="details.html"
                            className="btn green lighten-2"
                          >
                            Details
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
                        <td>Susan Williams</td>
                        <td>susan@gmail.com</td>
                        <td>Jan, 5 2018</td>
                        <td>
                          <a
                            href="details.html"
                            className="btn green lighten-2"
                          >
                            Details
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
                        <td>Jeff Burke</td>
                        <td>jburke@gmail.com</td>
                        <td>Jan, 10 2018</td>
                        <td>
                          <a
                            href="details.html"
                            className="btn green lighten-2"
                          >
                            Details
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
