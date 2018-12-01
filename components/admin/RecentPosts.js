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
      <section className="section section-recent">
        <div className="row">
          <div className="col s12 l8 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Recent Posts</span>
                <table className="striped">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Upload by</th>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Quick Todos</span>
                <form id="todo-form">
                  <div className="input-field">
                    <input id="todo" type="text" placeholder="Add Todo..." />
                  </div>
                </form>
                <ul className="collection todos">
                  <li className="collection-item">
                    <div>
                      Todo One
                      <a href="#!" className="secondary-content delete">
                        <i className="material-icons">close</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Todo Two
                      <a href="#!" className="secondary-content delete">
                        <i className="material-icons">close</i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
