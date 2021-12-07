import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Moment from 'react-moment';

function Git() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/joeynylund/repos?sort=updated')
    .then(response => response.json())
    .then((data) => {
      setRepos(data)
    })
  },[])

  return (
      <section id="projects">
      
        <Container>
        <h1>What I'm Working On</h1>
        <Row>
          {repos && repos.map((repo) => {

            return (
              <Col md="6">
                <div className="cards">
                  <h2>{repo.name}</h2>
                  <h6>{repo.language}</h6>
                  <p>{repo.description}</p>
                  <p>Updated <Moment fromNow>{repo.updated_at}</Moment></p>
                  <a href={repo.html_url} target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className="social-icon" /></a>
                </div>
              </Col>
            )
          })}
          
        </Row>
        </Container>

      </section>



  );
}

export default Git;
