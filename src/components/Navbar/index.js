import React from 'react';
import { Bars, Nav, NavIcon, NavLink, } from './NavbarElements';

const Navbar = ({toggleSideBar}) => {
    // const showBar = props.me;

    return(
        <>
            <Nav>
                <NavLink to="/">
                    The  Papi  Brand
                    <NavIcon onClick={toggleSideBar} >
                        <p>Menu</p>
                        <Bars></Bars>
                    </NavIcon>
                </NavLink>
            </Nav>
        </>
    )
}

export default Navbar;