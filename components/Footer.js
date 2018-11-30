import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l5 s12">
              <h5 className="white-text">About Us</h5>
              <p className="grey-text text-lighten-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ducimus, hic id quod enim voluptate
              </p>
            </div>
            <div className="col l4 s7">
              <h5 className="white-text">CONTRACT US</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="index.html">
                    Contact Phone: 099-216-4445
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="">
                    Mon-SUN: 10 am - 7 pm ICT
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="">
                    INFO@EXAMPLE.COM
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s5">
              <h5 className="white-text">FOLLOW US</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="index.html">
                    <i className="fab fa-facebook x" /> FACEBOOK
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="">
                    <i className="fab fa-instagram x" /> INSTAGARM
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="">
                    <i className="fab fa-youtube x" /> YOUTURE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright black">
          <div className="container">
            LUSS Official © 2018
            <a className="grey-text text-lighten-4 right" href="#!">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
