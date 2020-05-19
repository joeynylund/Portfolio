import React from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Row, Col } from 'reactstrap';

function Projects() {
  return (
      <section id="projects">
      
        <Container>
        <h1>What I'm Working On</h1>
        <Row>
          <Col md="4" classname="cards">
            <h2>Shuffle.gg</h2>
            <h4>React</h4>
            <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
          </Col>

          <Col md="4" classname="cards">
            <h2>Shuffle.gg</h2>
            <h4>React</h4>
            <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
          </Col>

          <Col md="4" classname="cards">
            <h2>Shuffle.gg</h2>
            <h4>React</h4>
            <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
          </Col>
        </Row>
        </Container>

      </section>

  );
}

export default Projects;
