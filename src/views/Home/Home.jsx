import bar from "../../assets/images/bar.png";
import CardHome from "../../components/CardHome/CardHome.jsx";
import cheers from "../../assets/images/cheers.png";
import trophy from "../../assets/images/trophy.png";


const Home= () => {
    return(
        <>
            <img src={bar} className="img-fluid"/>
            <section className="align-items-center d-flex flex-column flex-sm-row gap-5
            justify-content-sm-evenly my-5 pb-4">
                <CardHome image={cheers} text="Tutti i drink" link="/drinks" />
                <CardHome image={trophy} text="Top ten" link="/topten"/>
            </section>
        </>
    );
}

export default Home;