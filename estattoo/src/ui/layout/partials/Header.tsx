import { Nav, Navbar } from "react-bootstrap";
import { ROUTE } from "../../../routes/routePath";

import logo from '../../../assets/logo_w.png';

export const Header = () => {


    return (<>
    
        <Navbar expand="lg"  className="ps-header">

            <div className="d-flex align-items-center justify-content-between px-3 pe-4 w-100">

                <Navbar.Brand href={ROUTE.HOME}>
                    <div className='d-flex align-items-center gap-2'>
                        <img className="logo" src={logo} alt="Logo" width={70} height={70} />
                        <span className="logo-text-box">
                            <h3 className='title theme-main-font m-0 p-0'>Eleonora Seduce Tattoo</h3>
                            <p className='subtitle fst-italic text-center m-0 p-0 small'>Artista e tatuatrice</p>
                        </span>
                    </div>
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#tattoo-gallery">Tatuaggi</Nav.Link>
                            <Nav.Link href="#ws">Workshop</Nav.Link>
                            <Nav.Link href="#merc">Realizzazioni</Nav.Link>
                            <Nav.Link href="#about-me">Chi sono</Nav.Link>
                            <Nav.Link href="#contacts">Contatti</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>



            </div>



        </Navbar>
    
    </>);

}