import React, { Component } from 'react';
import person1 from '../../img/person1.jpg';
import person2 from '../../img/person2.jpg';
import person3 from '../../img/person3.jpg';

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
                  <span className="card-title">Posts</span>
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date Created</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
                            width="50px"
                          />
                        </td>
                        <td>LUSS “High Score” List Tee</td>
                        <td>฿890</td>
                        <td>
                          <div className="chip">
                            <img src={person1} /> John Doe
                          </div>
                        </td>
                        <td>
                          <a href="details.html" className="btn green ">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
                            width="50px"
                          />
                        </td>
                        <td>LUSS Comeback 90s Tee</td>
                        <td>฿890</td>
                        <td>
                          <div className="chip">
                            <img src={person2} /> Steve Smith
                          </div>
                        </td>
                        <td>
                          <a href="details.html" className="btn green ">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
                            width="50px"
                          />
                        </td>
                        <td>LUSS Reflective Tee "Comeback"</td>
                        <td>฿890</td>
                        <td>
                          <div className="chip">
                            <img src={person3} /> Ellen Williams
                          </div>
                        </td>
                        <td>
                          <a href="details.html" className="btn green ">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
                            width="50px"
                          />
                        </td>
                        <td>LUSS “High Score” List Tee</td>
                        <td>฿890</td>
                        <td>
                          <div className="chip">
                            <img src={person1} /> John Doe
                          </div>
                        </td>
                        <td>
                          <a href="details.html" className="btn green ">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
                            width="50px"
                          />
                        </td>
                        <td>LUSS Comeback 90s Tee</td>
                        <td>฿890</td>
                        <td>
                          <div className="chip">
                            <img src={person2} /> Steve Smith
                          </div>
                        </td>
                        <td>
                          <a href="details.html" className="btn green ">
                            Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
                            width="50px"
                          />
                        </td>
                        <td>LUSS Reflective Tee "Comeback"</td>
                        <td>฿890</td>
                        <td>
                          <div className="chip">
                            <img src={person3} /> Ellen Williams
                          </div>
                        </td>
                        <td>
                          <a href="details.html" className="btn green ">
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
