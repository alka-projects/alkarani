import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../Components-css/Footer.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Component from './logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div>
            <Jumbotron fluid className="foot">
                <Container>
                    <Row>
                        <Col sm>
                            <div>
                            <img alt="not found" src={Component} width="60" height="60" />{' '}
                            <span className="name">Alka</span></div><br />
                            <h4 className="hey">👋 Hello from Alka</h4>
                        </Col>
                        <Col sm>
                            <ul className="list">
                             <a href="#home"> <li>Home</li></a> 
                             <a href="#skills"> <li>Skills</li></a> 
                             <a href="#works"> <li>Works</li></a> 
                             <a href="#education"><li>Education</li></a> 
                            </ul>
                        </Col>
                        <Col sm>
                        <p className="fo">Follow me on</p>
                        <div className="ic">
                        <a href="https://www.facebook.com/people/Alka-Rani/100008116307242/"><FacebookIcon color="primary" fontSize="large"/>  </a>
                        <a href="https://www.instagram.com/alkar1846/"><InstagramIcon color="primary" fontSize="large"/>  </a>
                        <a href="https://www.linkedin.com/in/alka-rani-8373a11a5"><LinkedInIcon color="primary" fontSize="large"/>  </a>
                        <a href="https://github.com/alka-projects"><GitHubIcon color="primary" fontSize="large"/>  </a>
                        <a href="https://twitter.com/alkar1846?s=08"><TwitterIcon color="primary" fontSize="large"/>  </a>
                        </div> <br />
                        <p className="fo">Contact me on</p>
                        <p className="al">alkar1846@gmail.com</p>
                        </Col>
                        <Col sm>
                        <p className="fo"> Design and Developed by -</p>
                        <p className="al">Alka Rani
                            </p></Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Footer
