import style from './Footer.module.css';
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import x from "../assets/images/x.svg";


const Footer = () => {
    //const { courseName, courseLink } = props;

    return(
        <footer>
            <section className="container-fluid d-flx justify-content-between">
                <div className="row">
                    <div className="col-12 col-sm-4 mb-3">
                        Navigazione
                    </div>

                    <div className="col-12 col-sm-4 mb-3">
                        <div className="align-items-center d-flex justify-content-evenly row">
                            <div className="col-2">
                                <img src={instagram} alt="Instagram" className="img-fluid p-2"/>
                            </div>
                            <div className="col-10">
                                <h5 className={`m-0 ${style.whiteText}`}>account_instagram</h5>
                            </div>
                        </div>
                        <div className="align-items-center d-flex justify-content-around row">
                            <div className="col-2">
                                <img src={facebook} alt="Facebook" className="img-fluid p-2"/>
                            </div>
                            <div className="col-10">
                                <h5 className={`m-0 ${style.whiteText}`}>account_instagram</h5>
                            </div>
                        </div>
                        <div className="align-items-center d-flex justify-content-around row">
                            <div className="col-2">
                                <img src={x} alt="X" className="img-fluid p-2"/>
                            </div>
                            <div className="col-10">
                                <h5 className={`m-0 ${style.whiteText}`}>account_instagram</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 mb-3">

                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;