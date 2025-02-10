//import {useState, useEffect} from 'react';
import MainTemplate from "../../components/MainTemplate.jsx";
import Home from "../../views/Home/Home.jsx"
import Drinks from "../../views/Drinks/Drinks.jsx"
import TopTen from "../../views/TopTen/TopTen.jsx"
import DrinkDetails from "../../views/DrinkDetails/DrinkDetails.jsx"
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import logo from "../../assets/images/logo.svg"

const App = () => {

    const nav = [
        {url: "/", text: "Home", exact: true},
        {url: "/drinks", text: "Drinks", exact: true},
        {url: "/topten", text: "TopTen", exact: true}
    ];

    return(
        <>
            <BrowserRouter>
                <MainTemplate
                    footerIgLink = "https://www.instagram.com/unimib/"
                    footerIgName = "Ig Unimib"
                    footerFbLink = "https://www.facebook.com/bicocca/?locale=it_IT"
                    footerFbName = "Fb Unimib"
                    footerXLink = "https://x.com/unimib?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    footerXName = "X Unimib"
                    navItems = {nav}
                    logo = {logo}
                >
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/drinks" element={<Drinks />} />
                        <Route path="/topTen" element={<TopTen />} />
                        <Route path="/drink/:id" element={<DrinkDetails />} />
                    </Routes>

                </MainTemplate>
            </BrowserRouter>

        </>
    );
}

export default App;

