import style from './Footer.module.css';
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import x from "../assets/images/x.svg";
import disco from "../assets/images/disco.png";
import unimib from "../assets/images/unimib.png";
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
    const {
        igLink, igName,
        fbLink, fbName,
        xLink, xName,
        navItems
    } = props;

    const itemList = navItems.map((item) => (
        <li key={item.url} className="nav-item">
            <NavLink
                to={item.url}
                className={({ isActive }) => (isActive ? style.active : style.navLink)}
            >
                {item.text}
            </NavLink>
        </li>
    ));


    return(
        <footer>
            <section className="container-fluid">
                <div className="row">
                    <div className="align-items-center col-12 col-md-4 d-flex my-3">
                        <ul className="list-unstyled ms-md-5 text-center text-md-start">
                            {itemList}
                        </ul>
                    </div>

                    <div
                        className={`align-items-center col-12 col-md-4 d-flex flex-column justify-content-center my-3 ${style.social}`}>
                        <div className="align-items-center d-flex row">
                            <div className="col-5 col-md-2">
                                <img src={instagram} alt="Instagram" className="float-end"/>
                            </div>
                            <div className="col-7 col-md-10">
                                <a href={igLink} className={`m-0 ${style.whiteText}`}>
                                    <h5 className="m-0">{igName}</h5>
                                </a>
                            </div>
                        </div>
                        <div className="align-items-center d-flex row">
                            <div className="col-5 col-md-2">
                                <img src={facebook} alt="Facebook" className="float-end"/>
                            </div>
                            <div className="col-7 col-md-10">
                                <a href={fbLink} className={`m-0 ${style.whiteText}`}>
                                    <h5 className="m-0">{fbName}</h5>
                                </a>
                            </div>
                        </div>
                        <div className="align-items-center d-flex row">
                            <div className="col-5 col-md-2">
                                <img src={x} alt="X" className="float-end"/>
                            </div>
                            <div className="col-7 col-md-10">
                                <a href={xLink} className={`m-0 ${style.whiteText}`}>
                                    <h5 className="m-0">{xName}</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="align-items-center align-items-md-start col-12 col-md-4 d-flex flex-column flex-md-row justify-content-center justify-content-md-start my-3">
                        <a href="https://www.disco.unimib.it/it" target="_blank">
                            <img src={disco} alt="disco" className="img-fluid p-3"/>
                        </a>
                        <a href="https://www.unimib.it/" target="_blank">
                            <img src={unimib} alt="unimib" className="img-fluid p-3"/>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;