import React from 'react';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Gallery extends React.Component {
  componentDidMount() {
    $('.materialboxed').materialbox();
  }
  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">Photo Gallery</h4>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/45493700_252453522098275_7797968070298828800_n.jpg?_nc_cat=102&_nc_ht=scontent.fbkk12-3.fna&oh=5128190ad921c2f9b12a6758bc2001c4&oe=5CA78136"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/45498065_252452755431685_446875816547057664_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk8-3.fna&oh=b7c0bdbd67b9bc6c453ae387fb5e7b0e&oe=5C6CC1CA"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/45487228_252453372098290_5751974374949257216_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk8-2.fna&oh=3cec8023499b0f111ee6e26ccae10aa0&oe=5C6E18D8"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/45463592_252452958764998_8650713490249482240_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk9-2.fna&oh=9fddb47f1818d17dbc6ee9a0d80c34c5&oe=5CAEA4BC"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/41436964_236338633709764_8892984928900218880_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=3c7f585a2173ed93ed39d0c7be0a063b&oe=5C785C6D"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/41405994_236338610376433_4326382885826199552_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk8-2.fna&oh=289c99a92c8dbd8763d751b5b55788b7&oe=5C6C3552"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/41458890_236338103709817_3902124723542163456_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk12-2.fna&oh=ab2c52fd4f2b37a3e654ae198137eaa4&oe=5C750A31"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/41436996_236337340376560_6126593555788988416_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk8-2.fna&oh=3c594566a95aa6efcdec4af7fed813ce&oe=5C73859C"
                alt=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/41384289_236336443709983_536171592539963392_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk13-1.fna&oh=2c34b457095d19087617a7b1ed26adde&oe=5CB07755"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/41475915_236333403710287_8070724353592918016_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk12-1.fna&oh=98e2c53002abf1788a5ee019d466b8ec&oe=5C7178B6"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/41382428_236335307043430_1636302661974228992_n.jpg?_nc_cat=104&_nc_ht=scontent.fbkk12-2.fna&oh=1296ce8167841c5aec64aaf6afbf2701&oe=5C6B81EF"
                alt=""
              />
            </div>
            <div className="col s12 m3">
              <img
                className="materialboxed responsive-img"
                src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/41412321_236333577043603_1862435000801034240_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk13-1.fna&oh=2ea31bddd201bc59777675ed70824d38&oe=5C78B1B0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
