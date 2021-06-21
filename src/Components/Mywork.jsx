import React from 'react'
import '../Components-css/Mywork.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import wlist from './Myworkset'

function nlist(val) {
    return (
        // <Container>
            <Card style={{ width: '18rem' }} className='mb-4' key={val.id} >
                <Card.Img variant="top" src={val.img_scr} className='pimg' />
                <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>
                   {val.des}
                    </Card.Text>
                    <Button variant="primary" href={val.link}>Visit site</Button>
                </Card.Body>
            </Card>
        // </Container>
    )
}

function Mywork() {
    return (
        <div>
            <img src="https://store-images.s-microsoft.com/image/apps.46003.14259451864568504.ad5e5d07-0fbb-46ed-b9b6-a1b781645691.2ebcfa4e-172c-43d3-bf01-2d9a2a94e897?mode=scale&q=90&h=1080&w=1920" alt="" className="wimg" id="works" />
            <h1 className="ks">My latest works</h1>
            { wlist.map(nlist)}
        </div>
    )
}

export default Mywork
