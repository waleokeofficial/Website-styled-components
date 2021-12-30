import styled from "styled-components";

export const ProductContainer = styled.div`
    background: #150f0f;
    color: #fff;
    width: 100vw;
    /* height: 550px; */
    padding: 10px 20px;
    min-height: 100vh;
`

export const ProductHeading = styled.h1`
    font-size: 34px;
    text-align: center;
    display: block;
    padding: 20px 0;
    margin: 20px;
`

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* margin: 20px 20px; */
    /* width: 250px; */
`
export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 2rem;
`
export const ProductButton = styled.button`
    padding: 8px 22px;
    border-radius: 4px;
    background: #e31837;
    border: none;
    font-size: 1.2rem;
    outline: none;
    color: #fff;
    transition:  0.2s ease-in-out;

    &:hover{
        cursor: pointer;
        color: #000;
        background:#fdc500;
    }
`
export const ProductCard = styled.div`
width: 300px;
margin: 0 3rem;
line-height: 2;
/* height: 700px; */
/* background: red; */
`
export const ProductImg = styled.img`
    /* width: 100%; */
    min-width: 300px;
    height: 300px;
    box-shadow: 8px 8px #fdc100;
    
`
export const ProductDsc = styled.p`
font-size: 1rem;
text-align: center;
margin-bottom: 1rem;

`
export const ProductInfo = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const ProductPrice = styled.span`
    margin-bottom: 1rem;
`