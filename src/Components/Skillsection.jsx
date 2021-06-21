import React from 'react'
import '../Components-css/Skillsection.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from '@material-ui/core/Slider';
import slist from './Skillset'

function nlist(val){
    return(
        <Container>
        <Row>
            <Col sm={4}  key={val.id}>
                <img src={val.img_src} alt="" width="40" height="40"/>{' '}{' '}{' '}
            <span className="ksr">{val.name}</span> 
             </Col>
            <Col sm={8}>
                <Slider
                    defaultValue={val.percent}
                    // aria-labelledby="discrete-slider-restrict"
                    step={null}
                    valueLabelDisplay="auto"
                />
            </Col>
        </Row>
        <br />
    </Container> 
    )
  }

function Skillsection() {
    return (
        <div>
             {/* <img src="https://media.istockphoto.com/photos/skills-writes-on-white-price-tag-hanging-from-blue-ribbons-over-picture-id1205532873?b=1&k=6&m=1205532873&s=170667a&w=0&h=SYCV2_Z_R85EkR1t4n-IDpPfa7MBKsAe53vvScxJotM=" alt="" className="simg" /> */}
            <h1 className="ks" id="skills">My top key skills</h1>  
            { slist.map(nlist)}
        </div>
    )
}

export default Skillsection
