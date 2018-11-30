import React from 'react';
import blog1 from '../../img/blog1.jpg';
import blog2 from '../../img/blog2.jpg';
import blog3 from '../../img/blog3.jpg';

class Blog extends React.Component {
  render() {
    return (
      <section id="popular" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">BLOGS</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={blog1} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={blog2} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicingelit.Voluptas aliquid fugiat corporis laudantium,
                    architectodelectus?
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={blog3} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas aliquid fugiat corporis laudantium, architecto
                    delectus?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-4">
                <i className="material-icons left white-text">send</i> Contact
                For Booking
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
