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
        navItems,
        logo
    } = props;
    return(
        <>
            <Header
                logo={logo}
                navItems={navItems}
            />
            {children}
            <Footer
                igLink={footerIgLink}
                igName={footerIgName}
                fbLink={footerFbLink}
                fbName={footerFbName}
                xLink={footerXLink}
                xName={footerXName}
                navItems={navItems}
            />
        </>
    );
}

export default MainTemplate;