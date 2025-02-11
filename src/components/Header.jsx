import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';


const Header = ({ logo, navItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md" className={` ${style.navbar}`}>
            <div className="container d-flex justify-content-between">
                <NavLink to="/" className="align-items-center d-flex my-4">
                    <img src={logo} alt="Logo" />
                </NavLink>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {navItems.map(({ url, text, exact }) => (
                            <NavItem key={url} className={`mx-3 ${style.navItem}`}>
                                <NavLink
                                    to={url}
                                    exact={exact}
                                    className={({ isActive }) => (isActive ? style.active : style.navItem)} >
                                    {text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>

                <NavbarToggler onClick={toggle} className="border-0">
                    {isOpen ? <FaTimes size={30} color="#F8EDE2" /> : <FaBars size={30} color="#F8EDE2"/>}
                </NavbarToggler>
            </div>
        </Navbar>
    );
};

export default Header;
