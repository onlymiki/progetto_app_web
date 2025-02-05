import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./DrinkDetails.module.css"
import simbolino1 from "../../assets/images/simbolino1.png"
import simbolino2 from "../../assets/images/simbolino2.png"

const DrinkDetails = () => {
    let { id } = useParams();
    const [drinkDetails, setDrinkDetails] = useState(null);

    useEffect(() => {
        const fetchDrinkDetails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                if (data.drinks) {
                    setDrinkDetails(data.drinks[0]);
                }
            } catch (error) {
                console.error("Errore nell'API:", error);
            }
        };

        fetchDrinkDetails();
    }, [id]);

    if (!drinkDetails) {
        return <div>Loading...</div>; // Puoi aggiungere un caricamento se i dati non sono ancora disponibili
    }

    // Funzione per ottenere gli ingredienti
    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const ingredient = drinkDetails[`strIngredient${i}`];
            const measure = drinkDetails[`strMeasure${i}`];
            const ingredientImage = ingredient ? `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png` : null;

            if (ingredient) {
                ingredients.push({ ingredient, measure, ingredientImage });
            }
        }
        return ingredients;
    };

    const ingredientsList = getIngredients();

    return (
        <div>
            <div className="align-items-center d-flex flex-column justify-content-center w-100">
                <div className="align-items-center d-flex justify-content-around mb-4 w-100">
                    <img src={simbolino1} />
                    <h1 className={style.drinkTitle}>{drinkDetails.strDrink}</h1>
                    <img src={simbolino2} />
                </div>
                <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink}
                     className={`rounded-circle ${style.image}`}/>
            </div>

            <p><strong>Glass:</strong> {drinkDetails.strGlass}</p> {/* Bicchiere */}

            <p><strong>Instructions:</strong> {drinkDetails.strInstructions}</p>

            <h2>Ingredients:</h2>
            <ul>
                {ingredientsList.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.measure ? ingredient.measure : ""} {ingredient.ingredient}
                        {ingredient.ingredientImage && <img src={ingredient.ingredientImage} alt={ingredient.ingredient}
                                                            style={{width: 50, marginLeft: 10}}/>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DrinkDetails;
