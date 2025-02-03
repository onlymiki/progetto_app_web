import style from "./Drinks.module.css";
import { useState, useEffect } from "react";
import CardGridDrinks from "../../components/CardGridDrinks/CardGridDrinks.jsx";
import bar_scuro from "../../assets/images/bar_scuro.svg"
import RedButton from "../../components/RedButton/RedButton.jsx"

const Drinks = () => {
    const [cocktails, setCocktails] = useState([]);  // Cambio drinks con cocktails per coerenza
    const [loading, setLoading] = useState(false);
    const [letter, setLetter] = useState('a');  // La lettera iniziale per la ricerca
    const [activeButton, setActiveButton] = useState("Grid");

    // Funzione per caricare i cocktail per la lettera attuale
    const fetchCocktailsByLetter = async (currentLetter) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${currentLetter}`
            );
            const data = await response.json();
            if (data.drinks) {
                setCocktails((prevCocktails) => [...prevCocktails, ...data.drinks]);
            }
        } catch (error) {
            console.error("Errore nell'API:", error);
        }
        setLoading(false);
    };

    // Chiamata alla funzione quando la lettera cambia
    useEffect(() => {
        fetchCocktailsByLetter(letter);
    }, [letter]);

    // Funzione per caricare più cocktail passando alla lettera successiva
    const loadMoreCocktails = () => {
        if (letter < 'z') {
            const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
            setLetter(nextLetter);
        }
    };

    return (
        <>
            <img src={bar_scuro} className="img-fluid mb-5" />

            <div className= {`align-items-center d-flex flex-column flex-sm-row justify-content-center mb-5 ${style.button}`}>
                <RedButton
                    name="Grid"
                    isActive={activeButton === "Grid"}
                    onClick={() => setActiveButton("Grid")}
                />
                <RedButton
                    name="Table"
                    isActive={activeButton === "Table"}
                    onClick={() => setActiveButton("Table")}
                />
            </div>

            <div className={`w-100`}>
                <div className={`d-flex justify-content-center gy-4 mx-auto row ${style.cont}`}>
                    {cocktails.map((drink) => (
                        <div key={drink.idDrink} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <CardGridDrinks drink={drink}/>
                        </div>
                    ))}
                </div>
                {loading && <div className="text-center">Caricamento...</div>}
                {!loading && cocktails.length > 0 && (
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            onClick={loadMoreCocktails}
                            className="btn btn-primary"
                            disabled={letter >= 'z'}
                        >
                            Carica più cocktail
                        </button>
                    </div>
                )}
            </div>
        </>

    );
};

export default Drinks;


