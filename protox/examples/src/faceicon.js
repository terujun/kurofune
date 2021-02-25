import React from 'react';
import ReactDOM from 'react-dom';
import jsonp from 'jsonp';
import ExampleBasic from './ExampleBasic';
import ExampleWithLightbox from './ExampleWithLightbox';
import ExampleCustomComponentSelection from './ExampleCustomComponentSelection';
import ExampleSortable from './ExampleSortable';
import ExampleDynamicLoading from './ExampleDynamicLoading';
import ExampleDynamicColumns from './ExampleDynamicColumns';
import Icon1 from './icons/IMG_0588.png'
import Icon2 from './icons/IMG_0589.png'
import Icon3 from './icons/IMG_0590.png'
import Icon4 from './icons/IMG_0592.png'

class Faceicon extends React.Component {
render(){
    return <img src={Icon1}  alt="アイコン1" />
  }
}
ReactDOM.render(<Faceicon />, document.getElementById('faceicon'));