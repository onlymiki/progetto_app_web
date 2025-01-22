import style from './Footer.module.css';
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import x from "../assets/images/x.svg";
import disco from "../assets/images/disco.png";
import unimib from "../assets/images/unimib.png";

const Footer = (props) => {
    const {ig_link, fb_link, x_link} = props;

    return(
        <footer>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4 my-3">
                        Navigazione
                    </div>

                    <div
                        className={`col-12 col-sm-4 d-flex flex-column justify-content-center justify-content-sm-start my-3 ${style.social}`}>
                        <div className="align-items-center d-flex row">
                            <div className="col-5 col-sm-2">
                                <img src={instagram} alt="Instagram" className="float-end img-fluid p-2"/>
                            </div>
                            <div className="col-7 col-sm-10">
                                <a href={ig_link} className={`m-0 ${style.whiteText}`}>account_instagram</a>
                            </div>
                        </div>
                        <div className="align-items-center d-flex row">
                            <div className="col-5 col-sm-2">
                                <img src={facebook} alt="Facebook" className="float-end img-fluid p-2"/>
                            </div>
                            <div className="col-7 col-sm-10">
                                <h5 className={`m-0 ${style.whiteText}`}>account_facebook</h5>
                            </div>
                        </div>
                        <div className="align-items-center d-flex row">
                            <div className="col-5 col-sm-2">
                                <img src={x} alt="X" className="float-end img-fluid p-2"/>
                            </div>
                            <div className="col-7 col-sm-10">
                                <h5 className={`m-0 ${style.whiteText}`}>account_x</h5>
                            </div>
                        </div>
                    </div>

                    <div
                        className="align-items-center align-items-sm-start col-12 col-sm-4 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start my-3">
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