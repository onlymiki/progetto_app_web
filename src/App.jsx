import React, { useState, useEffect } from 'react';

const CocktailApp = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(response => response.json())
            .then(data => {
                setCocktails(data.drinks);
                setLoading(false);
            })
            .catch(error => console.error('Errore nell\'API:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Cocktail</h1>
            <ul>
                {cocktails && cocktails.map(cocktail => (
                    <li key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <p>{cocktail.strInstructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CocktailApp;
