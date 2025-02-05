import simbolino1 from "../../assets/images/simbolino1.png"
import simbolino2 from "../../assets/images/simbolino2.png"
import { useEffect, useState } from "react";

const DrinkDetails = () => {
    let {number} = useParams();
    let id = parseInt(number);

    const [drink, setDrink] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {

        let isMounted = true;

        const fetchDrink = (id) => {
            return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Errore nella risposta dell'API");
                    }
                    if (isMounted)
                        setDrink(response);
                })
                .catch(error => {
                    console.error("Errore nell'API:", error);
                    return null;
                });
        };

        const fetchIngredients = (id) => {
            return fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Errore nella risposta dell'API");
                    }
                    return response.json();
                })
                .catch(error => {
                    console.error("Errore nell'API:", error);
                    return null;
                });
        };

        const fetchDetails = (id) => {
            return fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Errore nella risposta dell'API");
                    }
                    return response.json();
                })
                .catch(error => {
                    console.error("Errore nell'API:", error);
                    return null;
                });
        };
    }, [id]);



    return(
        <>

        </>
    );
}

export default DrinkDetails;