import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects() {

  return (
    
    <section style={{backgroundColor:'#46D39E'}}>
      <Container>
        <Row>
          <Col md="8">
            <h1 style={{padding:'20px'}}>Looking for my resume?</h1>
          </Col>
          <Col md="4">
            <a href="https://docs.google.com/document/d/1ki_8c8j8k5Y9HASN5bPrVi-iLGpxHOvr/edit?usp=sharing&ouid=102114095254430100841&rtpof=true&sd=true" target="_blank"><h1 className="resume-button" style={{textAlign:'center',backgroundColor:'#212121', padding:'20px', borderRadius:'10px',cursor:'pointer'}}>Here it is.</h1></a>
          </Col>
        </Row>
      </Container>
    </section>

  );
}

export default Projects;
