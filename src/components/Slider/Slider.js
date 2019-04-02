
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import _ from "lodash";


import './slider.css';
import {getImagesFromApi, clearImages} from './get_images_actions';


class Slider extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeItem: 1,
      currentSlider: this.props.currentSlider,
    }
  }

  componentDidMount(){
    this.props.getImagesFromApi(this.props.sliderName);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentSlider !== undefined){
      this.setState(() => ({currentSlider: nextProps.currentSlider}), () =>  {
        this.timer = setInterval(function(){
          if(this.state.activeItem < this.state.currentSlider.length){
            this.setState((prevState) => ({activeItem: prevState.activeItem + 1}));
          }
          else{
            this.setState(() => ({activeItem: 1}));
          }
        }.bind(this), 5000);
      });
    }
  }

  componentWillUnmount(){
    this.props.clearImages(this.props.sliderName);
    clearInterval(this.timer);
  }

  render() {
    if(this.state.currentSlider === undefined || this.state.currentSlider === null){
      return (
        <svg width="200" height="200" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#76f19a">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 150 150" to="360 150 150" begin="0s" dur=".5s" fill="freeze" repeatCount="indefinite"></animateTransform>
          </path>
        </svg>
      );
    }

    return (
      <div className="slider-wrapper">
        <ul 
          className="slider-item-list"
          style={{
            transform: `translateX(${-(this.state.activeItem - 1) * 100}%)`,
          }}
        >
          {
            _.map(this.state.currentSlider, (item) => (
              <li 
                key={item.id}
                className="slider-item"
              >
                <img
                  src={item.urls.regular}
                  alt={item.alt_description}
                  className="slider-item-image z-depth-2"
                />
                <span className="slider-item-image__username">
                  {item.user.name}
                </span>
              </li>
            ))
          }
        </ul>
        <ul className="slide-item-navigation">
          {
            _.map(this.state.currentSlider, (item, key) => (
              <li 
                className={key === this.state.activeItem - 1 ? "slide-item-navigation-item active" : "slide-item-navigation-item"}
                key={item.id}
              />
            ))
          }
        </ul>
        <div class="slider-timeframe">
          <div className={!this.state.currentSlider ? "" : "slider-timeframe__filler"} />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownprops){
  let currentSlider;
  if(state.imagesList !== null){
    currentSlider = state.imagesList[ownprops.sliderName];
  }

  return {
    currentSlider,
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getImagesFromApi,
    clearImages,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Slider);
