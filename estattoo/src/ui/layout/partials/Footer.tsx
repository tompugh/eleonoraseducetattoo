import { Container, Navbar } from "react-bootstrap";


export default function Footer() {
    return (
        <Navbar sticky="bottom" className="ps-footer">
            <Container>
                <Navbar.Text>© {new Date().getFullYear()} Your Company</Navbar.Text>
            </Container>
        </Navbar>
    )
}