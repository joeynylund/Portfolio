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
              <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" onClick={(e) => {
                setModal(true)
                setTitle('Kickfees Mobile App')
                setTool('Nativescript')
                setDescription('Mobile app built with Nativescript')
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
              <p>Shopify store to sell Micecraft merchandise!</p>
              <a href="http://valerierealestate5.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>Ring of Elysium Competitive League</h2>
              <h6>WordPress</h6>
              <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" />
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>Kickfees Website</h2>
              <h6>HTML</h6>
              <p>Shopify store to sell Micecraft merchandise!</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" />
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>Proudly Mobile App</h2>
              <h6>Nativescript</h6>
              <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
              <FontAwesomeIcon icon={faImage} size='2x' className="social-icon" />
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'30px'}}>
          <Col md="6">
            <div className="cards">
              <h2>Proudly Website</h2>
              <h6>WordPress</h6>
              <p>Shopify store to sell Micecraft merchandise!</p>
              <a href="https://www.payproudly.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
          <Col md="6">
            <div className="cards">
              <h2>PortBuddy</h2>
              <h6>Shopify</h6>
              <p>Lorem ipsum taste sfds asdfsdf lksjdlfkj sdflkjdf asdf;lakjsdf asdflkjsadf.</p>
              <a href="https://www.portbuddy.com/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} size='2x' className="social-icon" /></a>
            </div>
          </Col>
        </Row>
        </Container>

        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            <span style={{color:'#46D39E'}}>{tool}</span>
            <p>{description}</p>
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
