import { Container, Navbar } from "react-bootstrap";


export default function Footer() {
    return (
        <Navbar className="ps-footer">
            <Container>
                <Navbar.Text>© {new Date().getFullYear()} Your Company</Navbar.Text>
            </Container>
        </Navbar>
    )
}