import { Col, Row } from 'react-bootstrap';
import heroVideo from '../../../assets/hero.mp4';
import pic1 from '../../../assets/h1.png';
import pic2 from '../../../assets/h2.png';

export const Home = () => {


return (<>
    <div className='home hero-section'>
        <div className='title-box' style={{ background: '#000000a8' }}>
            <h1 className='px-5 py-5 mb-0'>Eleonora Seduce Tattoo</h1>
        </div>
        <div className='media-box'>
            <video width={'100%'} height="700" autoPlay loop controls style={{ objectFit: 'cover' }} src={heroVideo} itemType='video/mp4'>
                {/* <source src="heroVideo" type="video/mp4"> */}
                Il tuo browser non supporta il tag video.
            </video>
        </div>
    </div>
    <Row>
        <Col>
        </Col>
    </Row>
    <Row className='home-section'>

        <Col lg='6' md='6' xs='12' >
            <div>
                <img src={pic1} />
            </div>
        </Col>
        <Col lg='6' md='6' xs='12'>
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat mi quis pretium semper. Proin luctus orci ac neque venenatis, quis commodo dolor posuere. Curabitur dignissim sapien quis cursus egestas. Donec blandit auctor arcu, nec pellentesque eros molestie eget. In consectetur aliquam hendrerit. Sed cursus mauris vitae ligula pellentesque, non pellentesque urna aliquet.


            </p>
        </Col>
        
    </Row>
    <Row className='home-section'>

        
        <Col lg='6' md='6' xs='12'>
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat mi quis pretium semper. Proin luctus orci ac neque venenatis, quis commodo dolor posuere. Curabitur dignissim sapien quis cursus egestas. Donec blandit auctor arcu, nec pellentesque eros molestie eget. In consectetur aliquam hendrerit. Sed cursus mauris vitae ligula pellentesque, non pellentesque urna aliquet.


            </p>
        </Col>
        <Col lg='6' md='6' xs='12' >
            <div>
                <img src={pic2} />
            </div>
        </Col>
        
    </Row>

</>)

}