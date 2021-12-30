import styled from "styled-components";

export const SidebarContainer = styled.div`
    height: 100%;
    background: #ffc500;
    position: fixed;
    top: 0;
    right: ${({isOpen}) => (isOpen ?  '0' :'-100000px')};
    width: 350px;
    display: grid;
    align-items: center;
`