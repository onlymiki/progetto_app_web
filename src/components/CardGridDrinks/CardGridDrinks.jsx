import style from "./CardGridDrinks.module.css"


const CardGridDrinks = ({ drink }) => {
    // Estrai gli ingredienti
    const ingredients = Object.keys(drink)
        .filter((key) => key.startsWith("strIngredient") && drink[key])
        .map((key) => drink[key]);

    // Limita gli ingredienti a 3 e aggiungi "..." se ci sono più ingredienti
    const displayedIngredients = ingredients.slice(0, 3);
    const showMore = ingredients.length >= 3;

    return (
        <div className={`align-items-center d-flex flex-column justify-content-center rounded-5 ${style.whiteCard}`}>
            <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className={`img-fluid rounded-circle ${style.image}`}
            />
            <h2 className={`align-items-center d-flex m-0 px-1 text-center ${style.title}`}>{drink.strDrink}</h2>
            <ul className={`${style.ingredients}`}>
                {displayedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                {showMore && <li>...</li>} {/* Mostra "..." se ci sono più di 3 ingredienti */}
            </ul>
        </div>
    );
};

export default CardGridDrinks;
