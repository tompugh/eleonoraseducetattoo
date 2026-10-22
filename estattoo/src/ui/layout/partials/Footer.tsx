import { Container, Navbar } from "react-bootstrap";


export default function Footer() {
    return (
        <>
            <div className='section-separator'>
                <div></div>
            </div>
            <Navbar className="ps-footer">
                <Container>
                    {/* <Navbar.Text>Eleonora Seduce Tattoo - email: aaaaaa@aaaaaa.aaaa</Navbar.Text> */}
                    <Navbar.Text>© {new Date().getFullYear()} Eleonora Seduce Tattoo</Navbar.Text>
                </Container>
            </Navbar>
            <div className='section-separator'>
                <div></div>
            </div>
        </>
    )
}