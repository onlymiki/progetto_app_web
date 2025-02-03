import style from "./CardHome.module.css";

const CardHome = ({ image, text, link }) => {
    return(
        <div className={`align-items-center d-flex flex-column
            rounded-circle mb-3 mt-5 mt-sm-0 ${style.circle}`}>
            <a href={link} className="text-center text-decoration-none">
                <img src={image} alt="Card Home" className="img-fluid p-4 mb-3"/>
                <div className={`mb-4 ${style.title}`}>{text}</div>
            </a>
        </div>
    );
}

export default CardHome;