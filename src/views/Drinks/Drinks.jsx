import style from "./Drinks.module.css";
import { useState, useEffect } from "react";
import CardGridDrinks from "../../components/CardGridDrinks/CardGridDrinks.jsx";
import bar_scuro from "../../assets/images/bar_scuro.svg";
import RedButton from "../../components/RedButton/RedButton.jsx";
import CardTableDrinks from "../../components/CardTableDrinks/CardTableDrinks.jsx";
import { NavLink } from "react-router-dom";
import search from "../../assets/images/search.svg"

const Drinks = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [letter, setLetter] = useState('a');
    const [activeButton, setActiveButton] = useState("Grid");
    const [inputVal, setInputVal] = useState("");
    // Nuovo stato per capire se è attiva una ricerca
    const [isSearching, setIsSearching] = useState(false);
    // Stato per nascondere elemento (o no)
    const [hidden, setHidden] = useState(true);
    // Stato per attivare il bottone search
    const [isActive, setActive] = useState(false);

    // Funzione per caricare i cocktail per la lettera attuale
    const fetchCocktailsByLetter = async (currentLetter) => {
        if (isSearching) return; // Evita il caricamento se è in corso una ricerca per nome

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

    // Funzione per cercare i drink
    const fetchCocktailsByName = async () => {
        if (inputVal.trim() === "") return;

        setLoading(true);
        setIsSearching(true); // Attiviamo la modalità ricerca
        setCocktails([]); // Svuotiamo l'array per mostrare solo i nuovi risultati

        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`
            );
            const data = await response.json();
            if (data.drinks) {
                setCocktails(data.drinks);
            } else {
                setCocktails([]); // Se non trova nulla, assicuriamoci di svuotare la lista
            }
        } catch (error) {
            console.error("Errore nell'API:", error);
        }
        setLoading(false);
    };

    const updateInputVal = (e) => {
        setInputVal(e.target.value);
    };

    const toggleVisibility = () => {
        setHidden(!hidden);
        setActive(!isActive);
    };

    return (
        <>
            <img src={bar_scuro} className="img-fluid mb-5" alt="Bar Scuro" />

            <div
                className={`align-items-center d-flex flex-column flex-sm-row justify-content-center mb-5 ${style.button}`}>
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

                <button className={`align-items-center d-flex justify-content-center ms-3 p-1 rounded-circle ${ isActive ? style.searchButtonRed : style.searchButton}`}
                        onClick={toggleVisibility}
                >
                    <img src={search} className="img-fluid"/>
                </button>

                <input
                    type="text"
                    value={inputVal}
                    onInput={updateInputVal}
                    className={`rounded-pill ${style.input} ${hidden ? style.hide : ""}`}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') fetchCocktailsByName();
                    }}
                />
                <button onClick={fetchCocktailsByName} className={`border-0 ${style.submit} ${hidden ? style.hide : ""}`}>
                    Search
                </button>

            </div>

            <div className="w-100">
                {activeButton === "Grid" ? (
                    <div className={`d-flex justify-content-center gy-4 mx-auto row ${style.contGrid}`}>
                        {cocktails.map((drink) => (
                            <NavLink to={`/drink/${drink.idDrink}`} key={drink.idDrink}
                                     className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                                <CardGridDrinks drink={drink}/>
                            </NavLink>
                        ))}
                    </div>
                ) : (
                    <div className={`d-flex justify-content-center gy-4 mx-auto row ${style.cont}`}>
                        {cocktails.map((drink) => (
                            <NavLink to={`/drink/${drink.idDrink}`} key={drink.idDrink} className="col-12 col-sm-12 d-flex justify-content-center">
                                <CardTableDrinks drink={drink} />
                            </NavLink>
                        ))}
                    </div>
                )}

                {loading && <div className={`mt-2 text-center ${style.text}`}>Caricamento...</div>}

                {!loading && cocktails.length > 0 && !isSearching && (
                    <div className="d-flex justify-content-center my-4">
                        <RedButton
                            onClick={loadMoreCocktails}
                            disabled={letter >= 'z'}
                            name="More cocktail"
                        />
                    </div>
                )}

                {!loading && cocktails.length === 0 && isSearching && (
                    <div className="text-center mt-3">Nessun cocktail trovato</div>
                )}
            </div>
        </>
    );
};

export default Drinks;
