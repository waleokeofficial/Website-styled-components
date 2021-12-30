import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer } from './HeroElements';

const Hero =()=>{
  // const showbar =()=>{
  //   // alert("working");    
  //   document.getElementsByClassName('SidebarContainer').style.backgroundColor = "blue";
  // }
  const [isOpen, setisOpen] =useState(false);
  
  const toggleSideBar =()=>{
    setisOpen(!isOpen);
  }

    return(
        <>
        <HeroContainer>
            <Navbar toggleSideBar={toggleSideBar}></Navbar>
            <Sidebar toggleSideBar={toggleSideBar} isOpen={isOpen}></Sidebar>
            <div className="HeroContent">
              <div className="HeroItems">
                <h1>GREATEST PIZZA EVER</h1>
                <p>READY IN 30 SECONDS.</p>
                <button>Place Order</button>
              </div>
            </div>
        </HeroContainer>
            
        </>
    )
}
export default Hero;