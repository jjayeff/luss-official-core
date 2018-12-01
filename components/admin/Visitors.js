import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import person1 from '../../img/person1.jpg';
import person2 from '../../img/person2.jpg';
import person3 from '../../img/person3.jpg';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}
var x = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ],
  datasets: [
    {
      label: '# of Visitors',
      data: [100, 190, 300, 50, 20, 30, 150, 190, 30, 500, 200, 300],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};
export default class Visitors extends Component {
  componentDidMount() {}

  render() {
    return (
      <section className="section section-visitors grey lighten-3">
        <div className="row">
          <div className="col s12 m12 l8">
            <div className="card-panel">
              <Bar data={x} height="80" />
            </div>
          </div>
          <div className="col s12 m12 l4">
            <ul className="collection with-header latest-comments">
              <li className="collection-header">
                <h5>Latest Comments</h5>
              </li>
              <li className="collection-item avatar">
                <img src={person1} alt="" className="circle" />
                <span className="title">John Doe</span>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt minima dolor error laboriosam autem ad beatae
                  explicabo pariatur maxime fuga sed quod quo voluptas, adipisci
                  illum aspernatur est, fugit tempore.
                </p>
                <a href="" className="approve green-text">
                  Approve
                </a>{' '}
                |
                <a href="" className="deny red-text">
                  Deny
                </a>
              </li>
              <li className="collection-item avatar">
                <img src={person2} alt="" className="circle" />
                <span className="title">Steve Smith</span>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt minima dolor error laboriosam autem ad beatae
                  explicabo pariatur maxime fuga sed quod quo voluptas, adipisci
                  illum aspernatur est, fugit tempore.
                </p>
                <a href="" className="approve green-text">
                  Approve
                </a>{' '}
                |
                <a href="" className="deny red-text">
                  Deny
                </a>
              </li>
              <li className="collection-item avatar">
                <img src={person3} alt="" className="circle" />
                <span className="title">Ellen Williams</span>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt minima dolor error laboriosam autem ad beatae
                  explicabo pariatur maxime fuga sed quod quo voluptas, adipisci
                  illum aspernatur est, fugit tempore.
                </p>
                <a href="" className="approve green-text">
                  Approve
                </a>{' '}
                |
                <a href="" className="deny red-text">
                  Deny
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
