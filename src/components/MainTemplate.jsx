import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const MainTemplate = (props) => {
    const {
        children,
        footerIgLink,
        footerIgName,
        footerFbLink,
        footerFbName,
        footerXLink,
        footerXName,
        navItems
    } = props;
    return(
        <>
            <Header/>
            {children}
            <Footer
                igLink={footerIgLink}
                igName={footerIgName}
                fbLink={footerFbLink}
                fbName={footerFbName}
                xLink={footerXLink}
                xName={footerXName}
                navItems ={navItems}
            />
        </>
    );
}

export default MainTemplate;