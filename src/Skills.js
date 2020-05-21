import React, { Component } from 'react';
import './App.css';
import Slider from "react-slick";
import { Container } from 'reactstrap';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            dots: false,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            infinite: true
          }
        }
      ]
    };
    return (
      <section style={{backgroundColor:'#303030'}}>
        <Container>
        <h1 style={{marginBottom:'30px'}}>What I Know</h1>
          <Slider {...settings}>
          <div>
            <center>
            <img src="../skills/react.png" alt="ReactJS" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/html.png" alt="HTML5" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/css.png" alt="CSS3" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/js.png" alt="JavaScript" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/php.png" alt="PHP" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/sass.png" alt="SASS" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/wordpress.png" alt="WordPress" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/git.png" alt="Git" style={{width:'150px',height:'150px'}} /></center>
          </div>
          <div>
            <center>
            <img src="../skills/nativescript.png" alt="Nativescript" style={{width:'150px',height:'150px'}} /></center>
          </div>
        </Slider>
        </Container>
      </section>
    );
  }
}
