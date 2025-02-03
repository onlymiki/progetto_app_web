import style from "./RedButton.module.css";

const RedButton = ({ name, isActive, onClick }) => {
    return (
        <button
            id={name}
            className={`align-items-center d-flex justify-content-center rounded-pill 
                        ${style.button} ${isActive ? style["button-click"] : ""}`}
            onClick={onClick} // Usa la funzione passata dal padre
        >
            <div className={style.title}>{name}</div>
        </button>
    );
};

export default RedButton;
