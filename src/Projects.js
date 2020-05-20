import React from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
      <section id="projects">
      
        <Container>
        <h1 style={{marginBottom:'20px'}}>What I'm Working On</h1>
        <Row>
          <Col md="4">
            <div className="cards">
              <h2>Shuffle.gg</h2>
              <h6>React</h6>
              <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
              <FontAwesomeIcon icon={faGithub} size='2x' />
              <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' style={{marginLeft:'10px'}} />
            </div>
          </Col>
        </Row>
        </Container>

      </section>

  );
}

export default Projects;
