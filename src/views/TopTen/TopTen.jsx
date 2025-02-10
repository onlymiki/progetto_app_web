import { useState, useEffect } from "react";
import CardTopTen from "../../components/CardTopTen/CardTopTen.jsx";
import gold from "../../assets/images/gold.svg";
import silver from "../../assets/images/silver.svg";
import bronze from "../../assets/images/bronze.svg";
import fourth from "../../assets/images/fourth.svg";
import fifth from "../../assets/images/fifth.svg";
import sixth from "../../assets/images/sixth.svg";
import seventh from "../../assets/images/seventh.svg";
import eighth from "../../assets/images/eighth.svg";
import ninth from "../../assets/images/ninth.svg";
import tenth from "../../assets/images/tenth.svg";
import top_ten from "../../assets/images/top_ten.svg";


const TopTen = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        async function getFirstTenCocktails() {
            const cocktailsList = [];
            const position = [gold, silver, bronze, fourth, fifth, sixth, seventh, eighth, ninth, tenth];

            for (let id = 11000; id < 11010; id++) {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();

                if (data.drinks) {
                    const drink = data.drinks[0];
                    cocktailsList.push({
                        name: drink.strDrink,
                        image: drink.strDrinkThumb,
                        position: position
                    });
                }
            }

            setCocktails(cocktailsList);
        }

        getFirstTenCocktails();
    }, []);

    return (
        <>
            <img src={top_ten} className="img-fluid mb-5" alt="Bar Scuro"/>

            <div>
                {cocktails.map((drink, index) => (
                    <CardTopTen key={index} number={drink.position[index]} image={drink.image} title={drink.name}/>
                ))}
            </div>
        </>
    );
};

export default TopTen;
