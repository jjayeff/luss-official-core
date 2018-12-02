import React from 'react';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Selected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgActive: ''
    };
  }

  componentDidMount() {
    $('select').formSelect();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
  }

  headleSelectedImgView(img) {
    this.setState({ imgActive: img });
  }

  renderImgViewsContent(imgs) {
    return imgs.map(function(img) {
      if (img == this.state.imgActive) {
        return (
          <img
            src={img}
            className="img-views-content active-img"
            onClick={this.headleSelectedImgView.bind(this, img)}
            key={img}
          />
        );
      } else {
        return (
          <img
            src={img}
            className="img-views-content"
            onClick={this.headleSelectedImgView.bind(this, img)}
            key={img}
          />
        );
      }
    });
  }

  renderSelectSize(sizes) {
    if (sizes.length == 4) {
      return sizes.map((size, index) => (
        <option defaultValue={size} key={index}>
          {size}
        </option>
      ));
    } else {
      return <option defaultValue={sizes}>{sizes}</option>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="center">
            {this.renderImgViewsContent(this.props.data.img)}
          </div>
          <div className="container">
            <img
              src={this.state.imgActive}
              className="materialboxed"
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="col s12 m5">
          <div className="card">
            <div className="card-content">
              <span className="card-title ">{this.props.data.name}</span>
              <p>Color : {this.props.data.color}</p>
              <p>
                Size :
                {this.props.data.size.length == 4
                  ? ' S / M / L / XL'
                  : ' One Size'}
              </p>
            </div>
            <div className="card-action">
              <p className="green-text">In stock</p>
              <span className="card-title">฿{this.props.data.price}</span>
              <div className="input-field">
                <select>
                  <option defaultValue="" disabled selected>
                    Select Option
                  </option>
                  {this.renderSelectSize(this.props.data.size)}
                </select>
                <label>
                  SIZE <span className="red-text">*</span>
                </label>
              </div>
              <button className="btn red  waves-effect waves-white">
                ADD TO CART
              </button>
              <button className="btn white red-text waves-effect waves-red">
                ADD TO WISHLIST
              </button>
              <div className="card-tabs">
                <ul className="tabs tabs-width-fixed">
                  <li className="tab">
                    <a href="#tab1">Description</a>
                  </li>
                  <li className="tab">
                    <a href="#tab2">Additional Information</a>
                  </li>
                </ul>
              </div>
              <div className="card-content">
                <div id="tab1">
                  <span className="card-title ">{this.props.data.name}</span>
                  <p>Color : {this.props.data.color}</p>
                  <p>
                    Size :{' '}
                    {this.props.data.size.length == 4
                      ? ' S / M / L / XL'
                      : ' One Size'}
                  </p>
                  <p>Price : {this.props.data.price} bath.</p>
                </div>
                <div id="tab2">???</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Selected;
