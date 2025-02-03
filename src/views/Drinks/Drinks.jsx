import style from "./Drinks.module.css"
import { useState, useEffect } from "react";
import CardGridDrinks from "../../components/CardGridDrinks/CardGridDrinks.jsx"; // Import del componente

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita") // Recupera tutti i drink
            .then((response) => response.json())
            .then((data) => {
                if (data.drinks) {
                    setDrinks(data.drinks); // Memorizza tutti i drink nell'array
                }
            })
            .catch((error) => console.error("Errore nel caricamento:", error));
    }, []);

    return (
        <div className={`w-100`}>
            <div className={`d-flex justify-content-center gy-4 mx-auto row ${style.cont}`}>
                {drinks.map((drink) => (
                    <div key={drink.idDrink} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                        <CardGridDrinks drink={drink}/>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Drinks;