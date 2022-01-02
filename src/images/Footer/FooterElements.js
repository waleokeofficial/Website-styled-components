import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #0d0909; 
    /* background: #0f9;     */
`
export const FooterWrap = styled.section`
    /* background: red; */
    padding: 16px 24px ;
    margin: 0 auto;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SocialMedia = styled.div`
    /* background: #c45; */
    max-width: 100vw;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: #0d9; */
    margin: 16px auto 0 auto;
    max-width: 1100px;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled.div`
color: #fff;
font-size: 1.8rem;
font-weight: bold;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: red; */
    width: 240px;
    color: white;
`
export const SocialIconLink = styled.a`
font-size: 1.5rem;
/* margin: 0 8px; */
color: #fff;
`
