import React from 'react';
import { Selected } from '../Router';

class Item extends React.Component {
  render() {
    return (
      <section id="popular" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <div className="col l8 m7 s12">
              <nav>
                <div className="nav-wrapper white">
                  <div className="col s6">
                    <a className="black-text">NEW ARRIVAL</a>
                  </div>
                  <div className="col s6">
                    <div className="right">
                      <a className="grey-text text-darken-4">SORT BY: </a>
                      <a href="" className="grey-text text-darken-1">
                        High-Low
                        <i className="material-icons right">arrow_drop_down</i>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col l4 m5 s12">
              <ul className="pagination center">
                <li className="disabled">
                  <a href="#!">
                    <i className="material-icons">chevron_left</i>
                  </a>
                </li>
                <li className="active">
                  <a href="#!">1</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">2</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">3</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">4</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">5</a>
                </li>
                <li className="waves-effect">
                  <a href="#!">
                    <i className="material-icons">chevron_right</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m4 l3">
              <div className="card">
                <div className="card-image test" onClick={Selected}>
                  <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
                    new
                  </a>
                </div>
                <div className="card-content center">
                  <h6 className="black-text">LUSS “High Score” List Tee</h6>
                  <p className="grey-text text-darken-1">฿890</p>
                </div>
              </div>
            </div>
            <div className="col s6 m4 l3">
              <div className="card">
                <div className="card-image test2" onClick={Selected}>
                  <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
                    new
                  </a>
                </div>
                <div className="card-content center">
                  <h6 className="black-text">LUSS Comeback 90s Tee</h6>
                  <p className="grey-text text-darken-1">฿890</p>
                </div>
              </div>
            </div>
            <div className="col s6 m4 l3">
              <div className="card">
                <div className="card-image test1" onClick={Selected}>
                  <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
                    new
                  </a>
                </div>
                <div className="card-content center">
                  <h6 className="black-text">LUSS “High” Velvet Cap</h6>
                  <p className="grey-text text-darken-1">฿1,190</p>
                </div>
              </div>
            </div>
            <div className="col s6 m4 l3">
              <div className="card">
                <div className="card-image test3" onClick={Selected}>
                  <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
                    new
                  </a>
                </div>
                <div className="card-content center">
                  <h6 className="black-text">LUSS “High” Velvet Cap</h6>
                  <p className="grey-text text-darken-1">1,190</p>
                </div>
              </div>
            </div>
            <div className="col s6 m4 l3">
              <div className="card">
                <div className="card-image" onClick={Selected}>
                  <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
                    new
                  </a>
                  <img
                    src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/40597858_234406017236359_3765620440853118976_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk12-2.fna&oh=c341dcbd7cdfefe67be96f379ae8e6d1&oe=5C777375"
                    alt=""
                  />
                </div>
                <div className="card-content center">
                  <h6 className="black-text">LUSS Reflective Tee "Comeback"</h6>
                  <p className="grey-text text-darken-1">฿890</p>
                </div>
              </div>
            </div>
            <div className="col s6 m4 l3">
              <div className="card">
                <div className="card-image" onClick={Selected}>
                  <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
                    new
                  </a>
                  <img
                    src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/41437869_236336247043336_8958766665185624064_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=0c52b7f80f6cab1299656ffc694a762c&oe=5C76759A"
                    alt=""
                  />
                </div>
                <div className="card-content center">
                  <h6 className="black-text">LUSS Reflective Tee "Comeback"</h6>
                  <p className="grey-text text-darken-1">฿890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Item;
