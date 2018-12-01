import React from 'react';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Selected extends React.Component {
  componentDidMount() {
    $('select').formSelect();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
  }
  render() {
    return (
      <div class="row">
        <div class="col s12 m7">
          <div class="center">
            <img
              src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
              class="img-views-content active-img"
            />
            <img
              src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/45662321_252451568765137_4071674901218459648_n.jpg?_nc_cat=110&_nc_ht=scontent.fbkk12-3.fna&oh=f46a4a1ad7e7dc0167b137f7c1bceb74&oe=5CA5C3D1"
              class="img-views-content"
            />
          </div>
          <div class="container">
            <img
              src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/45488912_252451562098471_2981383455830441984_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=8be0962e6d81a2d2877624a7abbff26f&oe=5CA1645F"
              class="materialboxed"
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div class="col s12 m5">
          <div class="card">
            <div class="card-content">
              <span class="card-title ">LUSS “High Score” List Tee</span>
              <p>Color : Black</p>
              <p>Size : S / M / L / XL</p>
            </div>
            <div class="card-action">
              <p class="green-text">In stock</p>
              <span class="card-title">฿890</span>
              <div class="input-field">
                <select>
                  <option value="" disabled selected>
                    Select Option
                  </option>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                  <option value="4">XL</option>
                </select>
                <label>
                  SIZE <span class="red-text">*</span>
                </label>
              </div>
              <button class="btn red  waves-effect waves-white">
                ADD TO CART
              </button>
              <button class="btn white red-text waves-effect waves-red">
                ADD TO WISHLIST
              </button>
              <div class="card-tabs">
                <ul class="tabs tabs-width-fixed">
                  <li class="tab">
                    <a href="#tab1">Description</a>
                  </li>
                  <li class="tab">
                    <a href="#tab2">Additional Information</a>
                  </li>
                </ul>
              </div>
              <div class="card-content">
                <div id="tab1">
                  <span class="card-title ">LUSS “High Score” List Tee</span>
                  <p>Color : Black</p>
                  <p>Size : S / M / L / XL</p>
                  <p>Price : 890 bath.</p>
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
