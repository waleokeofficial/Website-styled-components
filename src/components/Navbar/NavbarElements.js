import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';




export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    /* color: #fff; */
    font-size: 32px;
    display: flex;
    justify-content: center;
`
;
export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: bold,
    cursor: pointer;
    display: flex;
    align-items: center;

    /* background: cyan; */

    @media screen and (max-width: 400px){
        /* position: absolute;
        top: 10px;
        left: 25px; */
    }
`;
export const NavIcon = styled.div`
    color: #fff;
    /* background: green; */
    position: absolute;
    top: 0;
    right: 30px;
    p{
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        transform: translate(-50%, 100%);
    }
`
export const Bars = styled(FaBars)`
    font-size: 16px;
    position: absolute;
    top: 35px;
    right: 0;
    /* transform: translate(50%, 50%); */
`
