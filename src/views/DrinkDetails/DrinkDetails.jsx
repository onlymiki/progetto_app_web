import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./DrinkDetails.module.css";
import undo from "../../assets/images/leftArrow.svg";
import single_drink from "../../assets/images/single_drink.svg";

const DrinkDetails = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [drinkDetails, setDrinkDetails] = useState(null);

    //carico dettagli del drink scelto
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
        return <div>Loading...</div>;
    }

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

    const back = () => {
        navigate('/drinks');
    }

    return (
        <div>
            <img src={single_drink} className="img-fluid mb-5"/>

            <div className="align-items-center d-flex flex-column justify-content-center w-100">
                <div className="align-items-center d-flex justify-content-around mb-4 w-100">
                    <button className="border-0 bg-transparent col" onClick={back}>
                        <img src={undo} alt="undo"/>
                    </button>
                    <h1 className={`col text-center ${style.drinkTitle}`}>{drinkDetails.strDrink}</h1>
                    <div className="col"></div>
                </div>
                <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} className={`rounded-circle ${style.image}`}/>
            </div>

            <div className="mx-5">
                <h2 className={`mt-5 ${style.subTitle}`}>Ingredients</h2>
                <div className={`d-flex flex-wrap justify-content-center justify-content-sm-start w-100 ${style.contIngredients}`}>
                    {ingredientsList.map((ingredient, index) => (
                        <div key={index}>
                            <div className="align-items-center d-flex justify-content-center mt-3">
                                {ingredient.ingredientImage &&
                                    <img src={ingredient.ingredientImage} alt={ingredient.ingredient} className={style.imageIngredients}/>
                                }
                            </div>
                            <p className={`mt-2 text-center ${style.ingredients}`}>
                                {ingredient.measure ? ingredient.measure : ""} {ingredient.ingredient}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-5">
                <h2 className={`mt-5 ${style.subTitle}`}>Instruction</h2>
                <p className={`mt-2 ${style.ingredients}`}>{drinkDetails.strInstructions}</p>
            </div>

            <div className="mx-5 mb-3">
                <h2 className={`mt-5 ${style.subTitle}`}>Glass</h2>
                <p className={`mt-2 ${style.ingredients}`}>{drinkDetails.strGlass}</p>
            </div>
        </div>
    );
};

export default DrinkDetails;
