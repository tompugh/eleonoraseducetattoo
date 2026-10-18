import { Col, Row } from 'react-bootstrap';
import pic1 from '../../../assets/h1.png';
import pic2 from '../../../assets/h2.png';

export const Home = () => {


return (<>
    <h1>Welcome Home</h1>
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