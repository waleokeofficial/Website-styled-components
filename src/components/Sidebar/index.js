import React from 'react';
import { SidebarContainer } from './SidebarElements';


const Sidebar = ({toggleSideBar, isOpen}) => {
    // const [sidebar, setSideBar] =

    return(
    <div>
        {/* <div className="SidebarContainer"> */}
        <SidebarContainer isOpen={isOpen} onClick={toggleSideBar}>
                <div className="Icon">
                    <button className="CloseIcon" onClick={toggleSideBar}>X</button>
                </div>
                <div className="SidebarMenu">
                    <div className="sideLink">Pizzas</div>
                    <div className="sideLink">Desserts</div>
                    <div className="sideLink">Full Menu</div>
                </div>
                <div className="SidebarBtnWrap">
                    <button className="SidebarRoute">Order now</button>                    
                </div>
        </SidebarContainer>
        {/* </div> */}
    </div>
)
};

export default Sidebar;