import { Navbar } from "react-bootstrap";
import { ROUTE } from "../../../routes/routePath";

import logo from '../../../assets/logo.png';

export const Header = () => {


    return (<>
    
        <Navbar className="ps-header">

            <div className="d-flex">

                <Navbar.Brand href={ROUTE.HOME}>
                    <img className="logo" src={logo} alt="Logo"/>
                    <div className="logo-text-box">
                        <small className="title">{import.meta.env.VITE_APP_NAME}</small>
                        <small className="subtitle">{import.meta.env.VITE_APP_SLOGAN}</small>
                    </div>
                </Navbar.Brand>
                Test



            </div>



        </Navbar>
    
    </>);

}