import { Col, Row } from 'react-bootstrap';
import heroVideo from '../../../assets/hero.mp4';
import pic1 from '../../../assets/h1.png';
import pic2 from '../../../assets/h2.png';
import logo from '../../../assets/logo_w.png';

export const Home = () => {


return (<div className='home'>
    <div className='hero-section'>
        <div className='title-box px-5 mb-0 pb-0'>
            <div className='d-flex align-items-center gap-2 flex-column'>
                    <h1>Eleonora Seduce Tattoo</h1>
                    <img className="logo" src={logo} alt="Logo" width={100} height={100} />
                    <p className='fst-italic text-center mt-0 pt-0'>Artista e tatuatrice</p>
                <span>
                </span>
            </div>
            
            
        </div>
        <div className='media-box'>
            <video width={'100%'} height="700" autoPlay loop controls style={{ objectFit: 'cover' }} src={heroVideo} itemType='video/mp4'>
                {/* <source src="heroVideo" type="video/mp4"> */}
                Il tuo browser non supporta il tag video.
            </video>
        </div>
    </div>

    <div className='section-separator'>
        <div></div>
    </div>

    <Row className='section'>

        <Col lg='6' xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} >
            <div>
                <img src={pic1} />
            </div>
        </Col>
        <Col lg='6' xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <div className='ps-title-box d-flex justify-content-center align-items-center flex-column'>
                <div className='decorator'>
                    <div></div>
                </div>
                <div>
                    <h1>L'arte del tatuaggio</h1>
                </div>
                <div className='decorator'>
                    <div></div>
                </div>
            </div>
            <p className='ps-text-box'>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat mi quis pretium semper. Proin luctus orci ac neque venenatis, quis commodo dolor posuere. Curabitur dignissim sapien quis cursus egestas. Donec blandit auctor arcu, nec pellentesque eros molestie eget. In consectetur aliquam hendrerit. Sed cursus mauris vitae ligula pellentesque, non pellentesque urna aliquet.


            </p>
        </Col>
        
    </Row>
    <div className='section-separator'>
        <div></div>
    </div>
    <Row className='section'>

        
        <Col lg='6' md='6' xs='12'>
            <div className='ps-title-box d-flex justify-content-center align-items-center flex-column'>
                <div className='decorator'>
                    <div></div>
                </div>
                <div>
                    <h1>Lo stile adatto a te</h1>
                </div>
                <div className='decorator'>
                    <div></div>
                </div>
            </div>
            <p className='ps-text-box'>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat mi quis pretium semper. Proin luctus orci ac neque venenatis, quis commodo dolor posuere. Curabitur dignissim sapien quis cursus egestas. Donec blandit auctor arcu, nec pellentesque eros molestie eget. In consectetur aliquam hendrerit. Sed cursus mauris vitae ligula pellentesque, non pellentesque urna aliquet.


            </p>
        </Col>
        <Col lg='6' md='6' xs='12' >
            <div>
                <img src={pic2} />
            </div>
        </Col>
        
    </Row>

</div>)

}