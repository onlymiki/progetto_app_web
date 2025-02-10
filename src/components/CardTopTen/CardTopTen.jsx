import style from "./CardTopTen.module.css";

const CardTopTen = ({ number, image, title}) => {
    return (
        <div className="align-items-center d-flex justify-content-center mx-sm-5 mx-3 mb-4 row">
            <div className="col-3">
                <img src={number} className={style.position}/>
            </div>
            <div className="col-3">
                <img src={image} className={`rounded-circle ${style.drink}`}/>
            </div>
            <h1 className={`col-6 ps-5 ${style.text}`}>{title}</h1>
        </div>
    );
};

export default CardTopTen;