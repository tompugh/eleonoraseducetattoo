import { Navbar } from "react-bootstrap";
import { ROUTE } from "../../../routes/routePath";

import logo from '../../../assets/logo_w.png';

export const Header = () => {


    return (<>
    
        <Navbar className="ps-header">

            <div className="d-flex align-items-center px-3">

                <Navbar.Brand href={ROUTE.HOME}>
                    <div className='d-flex align-items-center gap-2'>
                        <img className="logo" src={logo} alt="Logo" width={70} height={70} />
                        <span className="logo-text-box">
                            <h3 className='title theme-main-font m-0 p-0'>Eleonora Seduce Tattoo</h3>
                            <p className='subtitle fst-italic text-center m-0 p-0 small'>Artista e tatuatrice</p>
                        </span>
                    </div>
                </Navbar.Brand>
                Test



            </div>



        </Navbar>
    
    </>);

}