import React from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

function Header() {
  return (
      <header className="App-header">
      <Container>
        <h1>Hello, I'm Joseph Nylund</h1>
        <h5>Front-End Developer, Esports enthusiast, Guitar player, & Husband.</h5>
        <h6>
          <FontAwesomeIcon icon={faGithub} size='2x' style={{marginRight:'15px'}} className="social-icon" />
          <FontAwesomeIcon icon={faLinkedin} size='2x' style={{marginRight:'15px'}} className="social-icon" />
          <FontAwesomeIcon icon={faEnvelope} size='2x' style={{marginRight:'15px'}} className="social-icon" />
        </h6>
        </Container>
      </header>

  );
}

export default Header;
