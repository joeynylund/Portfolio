import React, { useState } from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

function Projects() {

  const [title, setTitle] = useState('');

  const [tool, setTool] = useState('');

  const [description, setDescription] = useState('');

  const [image, setImage] = useState('');

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
      <section id="projects">
      
        <Container>
        <h1 style={{marginBottom:'30px'}}>What I've Worked On</h1>
        <Row>
          <Col md="6">
            <div className="cards">
              <h2>Shuffle.gg</h2>
              <h6>React</h6>
              <p>Shuffle is the new way to find your favorite streamer!</p>
              <a href="https://github.com/joeynylund/Shuffle.gg" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className="social-icon" /></a>
              <a href="https://shuffle-gg.web.app/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" style={{marginLeft:'15px'}} /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>Nylund.dev</h2>
              <h6>React</h6>
              <p>My personal website! </p>
              <a href="https://github.com/joeynylund/Portfolio" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className="social-icon" /></a>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>Tarkov Companion</h2>
              <h6>React</h6>
              <p>Web app filled with Tarkov information!</p>
              <a href="https://github.com/joeynylund/tarkov-app" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className="social-icon" /></a>
              <a href="" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" style={{marginLeft:'15px'}} /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>TeamBenevolent.TV</h2>
              <h6>jQuery</h6>
              <p>Website for a Twitch broadcasting team!</p>
              <a href="http://teambenevolent.tv/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>MCProHosting</h2>
              <h6>Shopify</h6>
              <p>Shopify store to sell Micecraft merchandise!</p>
              <a href="https://store.mcprohosting.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>Kickfees Mobile App</h2>
              <h6>Nativescript</h6>
              <p>Mobile app that serves as a dashboard for company reps!</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" onClick={(e) => {
                setModal(true)
                setTitle('Kickfees Mobile App')
                setTool('Nativescript')
                setDescription('Kickfees focuses on helping businesses eliminate their credit card fees. For their referral program they wanted an app that could serve as a mobile dashboard for their reps. With this app, they can track their commission and add new leads on the go.')
                setImage('../kickfees_mobile.jpg')
              }} />
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>Valerie Real Estate</h2>
              <h6>WordPress</h6>
              <p>Website with listings for local real estate agent!</p>
              <a href="http://valerierealestate5.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>Ring of Elysium Competitive League</h2>
              <h6>WordPress</h6>
              <p>Home of a competitive esports league!</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" />
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>Kickfees Website</h2>
              <h6>HTML</h6>
              <p>Informational website for a local credit card company!</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" />
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>Proudly Mobile App</h2>
              <h6>Nativescript</h6>
              <p>Mobile app for a local credit card company!</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" />
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>Proudly Website</h2>
              <h6>HTML</h6>
              <p>Website for a local charitable credit card company!</p>
              <a href="https://www.payproudly.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>PortBuddy</h2>
              <h6>Shopify</h6>
              <p>Shopify website for a local t-shirt company!</p>
              <a href="https://www.portbuddy.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
        </Row>
        </Container>

        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            <span style={{color:'#46D39E',fontFamily:'Source Sans Pro'}}>{tool}</span>
            <p style={{fontFamily:'Source Sans Pro'}}>{description}</p>
            <img src={image} style={{width:'100%',height:'auto'}} />
          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor:"#303030",border:'none'}} onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>

      </section>



  );
}

export default Projects;
