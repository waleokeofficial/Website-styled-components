import styled from 'styled-components';
import FeaturedPic from '../../images/papi-wall.jpg';

export const FeatureContainer = styled.div`
    /* width: 100vw; */
    height: 100vh;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    background-position: center;
    background-size: cover;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    /* background-attachment: fixed; */
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${FeaturedPic});

    h1{
       font-size: 44px;
       margin-bottom: 6px;
       font-weight: 600;
    }
    p{
       font-size: 22px; 
       margin-bottom: 22px;
       
    }
`

export const FeatureButton = styled.button`
    padding: 9px 24px;
    border: none;
    font-size: 22px;
    border-radius: 4px;
    color: #000;
    background: #fdc500;
    transition: .2s ease-in-out;

    &:hover{
        color: #fff;
    background: #e31837;
    transition: .2s ease-in-out;
    
    cursor: pointer;
    }
`