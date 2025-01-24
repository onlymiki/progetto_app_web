import {useState, useEffect} from 'react';
import MainTemplate from "../../components/MainTemplate.jsx";
import Home from "../../views/Home/Home.jsx"

const App = () => {
    return(
        <>
            <MainTemplate
                footerIgLink = "https://www.instagram.com/unimib/"
                footerIgName = "Ig Unimib"
                footerFbLink = "https://www.facebook.com/bicocca/?locale=it_IT"
                footerFbName = "Fb Unimib"
                footerXLink = "https://x.com/unimib?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                footerXName = "X Unimib"
            >
                <Home />
            </MainTemplate>
        </>
    );
}

export default App;


/*import React, { useState, useEffect } from 'react';

const CocktailApp = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [letter, setLetter] = useState('a');

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

    useEffect(() => {
        fetchCocktailsByLetter(letter);
    }, [letter]);

    const loadMoreCocktails = () => {
        if (letter < 'z') {
            const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
            setLetter(nextLetter);
        }
    };

    return (
        <div>
            <h1>Cocktail</h1>
            <ul>
                {cocktails.map((cocktail) => (
                    <li key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <p>{cocktail.strInstructions}</p>
                    </li>
                ))}
            </ul>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={loadMoreCocktails} disabled={letter === 'z'}>
                    Carica altri cocktail
                </button>
            )}
        </div>
    );
};

export default CocktailApp;*/

