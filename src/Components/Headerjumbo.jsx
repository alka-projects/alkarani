import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../Components-css/Header.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import alka from './alka.png'
import Button from 'react-bootstrap/Button'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

function Headerjumbo() {
    return (
        <div id="home">
            <Jumbotron className="jumbo">
                <Container>
                    <Row className="row1">
                    <Grow in='true' style={{timeout:5000}} >
                            <Col sm className="content">
                                <h4 className="aname">👋 Alka Here</h4>
                                <h1 className="des">I'm a Full stack web developer from India</h1>

                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ducimus quibusdam </p> */}
                                <input type="text" className="in p-2" placeholder="Enter Your Email" />
                                <Button varient="primary" className="bts m-4 p-3">Subscribe</Button><br /><br /><br />
                                <p className="fo">Follow me on</p>
                                <div className="ic">
                                    <a href="https://www.facebook.com/people/Alka-Rani/100008116307242/"><FacebookIcon color="primary" fontSize="large" />  </a>
                                    <a href="https://www.instagram.com/alkar1846/"><InstagramIcon color="primary" fontSize="large" />  </a>
                                    <a href="https://www.linkedin.com/in/alka-rani-8373a11a5"><LinkedInIcon color="primary" fontSize="large" />  </a>
                                    <a href="https://github.com/alka-projects"><GitHubIcon color="primary" fontSize="large" />  </a>
                                    <a href="https://twitter.com/alkar1846?s=08"><TwitterIcon color="primary" fontSize="large" />  </a>
                                </div>
                               

                            </Col>
                            </Grow>
                            <Fade in='True'>
                        <Col sm className="aimage"><img src={alka} alt="" /></Col>
                        </Fade>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Headerjumbo
