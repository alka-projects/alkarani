import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../Components-css/About.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import alka from './alka.jpeg'
import Button from 'react-bootstrap/Button'

function About() {
    return (
        <div id="letstalk">
            <img src="https://eportfolio.utm.my/artefact/file/download.php?file=524385&view=129221" alt="" className="aimg" />
            <Jumbotron fluid className='jumbo'>
                <Container>
                    <Row>
                        <Col sm className="mb-4">
                            <h1 className="about">A little about me!</h1>
                            <p className="text">Hiii ! I am Alka Rani, currently pursuing Bachelor's in Computer Science from the "Guru Gobind Singh Educational Society's Technical Campus".
                          <br/>  I did my 12th from state board with 60.8 % and 10th from Cbse board with 9.8 cgpa.<br/>
                          My passion is in Web Designing, I have knowledge of HTML, CSS, Python, Django, React js and JavaScript. 
                          <br/> Besides this, I have good programming skills in python.
                          <br/>
                          I am hard-working, self-motivated, and committed to being the best I can be.
                          <br/>I like to accept challenges and very dedicated towards  my work.
                            </p>
                            <Button variant="success" href="mailto:alkar1846@gmail.com"> Let's talk</Button>
                        </Col>
                        <Col sm> <img src={alka} alt="" className="alimg" /> </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About
