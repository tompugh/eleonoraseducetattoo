import { Container, Navbar } from "react-bootstrap";


export default function Footer() {
    return (
        <>
            <div className='section-separator'>
                <div></div>
            </div>
            <Navbar className="ps-footer">
                <Container>
                    <Navbar.Text>© {new Date().getFullYear()} Your Company</Navbar.Text>
                </Container>
            </Navbar>
        </>
    )
}