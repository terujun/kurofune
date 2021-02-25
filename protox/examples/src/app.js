import React from 'react';
import ReactDOM from 'react-dom';
import jsonp from 'jsonp';
import ExampleBasic from './ExampleBasic';
import ExampleWithLightbox from './ExampleWithLightbox';
import ExampleCustomComponentSelection from './ExampleCustomComponentSelection';
import ExampleSortable from './ExampleSortable';
import ExampleDynamicLoading from './ExampleDynamicLoading';
import ExampleDynamicColumns from './ExampleDynamicColumns';

class App extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
    this.loadPhotos = this.loadPhotos.bind(this);
  }
  componentDidMount() {
    this.loadPhotos();
  }
  loadPhotos() {
    const urlParams = {
      api_key: '18520e2701f418c8f2c39ff39de3bbdf',
      photoset_id: '72157718421944272',
      user_id: '192285108@N06',
      format: 'json',
      per_page: '120',
      extras: 'url_m,url_c,url_l,url_h,url_o',
    };

    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
    url = Object.keys(urlParams).reduce((acc, item) => {
      return acc + '&' + item + '=' + urlParams[item];
    }, url);

    jsonp(url, { name: 'jsonFlickrApi' }, (err, data) => {
      let photos = data.photoset.photo.map(item => {
        let aspectRatio = parseFloat(item.width_o / item.height_o);
        return {
          src: item.url_l,
          width: parseInt(item.width_o),
          height: parseInt(item.height_o),
          title: item.title,
          alt: item.title,
          key: item.id,
          srcSet: [
            `${item.url_m} ${item.width_m}w`,
            `${item.url_c} ${item.width_c}w`,
            `${item.url_l} ${item.width_l}w`,
            // `${item.url_h} ${item.width_h}w`,
          ],
          sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
        };
      });
      this.setState({
        photos: this.state.photos ? this.state.photos.concat(photos) : photos,
      });
    });
  }

  render() {
    console.log(this.state.photos)
    if (this.state.photos) {
      console.log("teru")
      const width = this.state.width;
      return (
        <div className="App">
        {/*<ExampleBasic title={'10:00 AM'} photos={this.state.photos.slice(0, 20)} />
          <ExampleBasic title={'9:00 AM'} photos={this.state.photos.slice(0, 20)} />
          <ExampleBasic title={'Basic Column Layout'} direction="column" photos={this.state.photos.slice(40, 60)} />*/}
          <ExampleWithLightbox photos={this.state.photos.slice(0, 17)} />
        {/*<ExampleCustomComponentSelection photos={this.state.photos.slice(75, 90)} />
          <ExampleSortable photos={this.state.photos.slice(90, 100)} />
          <ExampleDynamicColumns title={'Custom Dynamic Columns'} photos={this.state.photos.slice(100, 120)} />
          <ExampleDynamicLoading photos={this.state.photos} />*/}
        </div>
      );
    } else {
      return (
        <div className="App">
          <div id="msg-app-loading" className="loading-msg">
            Loading
          </div>
        </div>
      );
    }
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
