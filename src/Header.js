import React from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from 'reactstrap';

function Header() {
  return (
      <header className="App-header">
      <Container>
        <h1>Hello, I'm Joseph Nylund</h1>
        <h5>Front-End Developer, Esports enthusiast, Guitar player, & Husband.</h5>
        <h5 style={{marginTop:'25px'}}><AnchorLink href="#projects" style={{backgroundColor:'#212121',padding:'10px',color:'#fff',borderRadius:'10px'}}>View Projects</AnchorLink></h5>
        </Container>
      </header>

  );
}

export default Header;
