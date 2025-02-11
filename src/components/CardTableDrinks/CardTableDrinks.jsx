import style from "./CardTableDrinks.module.css"


const CardTableDrinks = ({ drink }) => {
    // Estrai gli ingredienti
    const ingredients = Object.keys(drink)
        .filter((key) => key.startsWith("strIngredient") && drink[key])
        .map((key) => drink[key]);

    // Limita gli ingredienti a 3 e aggiungi "..." se ci sono più ingredienti
    const displayedIngredients = ingredients.slice(0, 3);
    const showMore = ingredients.length >= 3;

    return (
        <div className={`align-items-center d-flex justify-content-between rounded-5 ${style.whiteCard}`}>
            <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className={`img-fluid rounded-circle ms-5 ${style.image}`}
            />
            <div className={`align-items-center d-flex flex-sm-row flex-column justify-content-around ${style.text}`}>
                <h2 className={`align-items-center d-flex m-0 px-1 text-sm-center ${style.title}`}>{drink.strDrink}</h2>
                <ul className={`${style.ingredients}`}>
                    {displayedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                    {showMore && <li>...</li>}
                </ul>
            </div>
        </div>
    );
};

export default CardTableDrinks;
