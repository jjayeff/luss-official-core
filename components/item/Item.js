import React from 'react';
import { connect } from 'react-redux';
import { Selected } from '../Router';
import mock_data from '../../mock_data/items.json';

const mapStateToProps = state => {
  return {
    items: mock_data
  };
};

class Item extends React.Component {
  renderItems(items) {
    return items.map(item => (
      <div className="col s6 m4 l3" key={item.id}>
        <div className="card">
          <div className={item.style} onClick={Selected.bind(this, item)}>
            <a className="btn-floating waves-effect waves-light grey darken-4 new-arrival center">
              new
            </a>
          </div>
          <div className="card-content center">
            <h6 className="black-text">{item.name}</h6>
            <p className="grey-text text-darken-1">฿{item.price}</p>
          </div>
        </div>
      </div>
    ));
  }
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
          <div className="row">{this.renderItems(this.props.items)}</div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Item);
