import React, { useState } from 'react'
import { SlOrganization } from "react-icons/sl";
import { FaBuilding } from "react-icons/fa";
import { GiSpikyWing } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './SideBar.css'

const SideBar = ({children}: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen (!isOpen)
    const menuItems =[
        {
            path: "/organization",
            name: "Organization",
            icon: <SlOrganization  />
        },
        {
            path: "/facility",
            name: "Facilities",
            icon: <FaBuilding />
        },
        {
            path: "/wing",
            name: "Wings",
            icon: <GiSpikyWing />
        },
        {
            path: "/room",
            name: "Rooms",
            icon:<MdBedroomParent />
        }        
    ] 
  return (
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
            <div className="top_section">
                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">RoomzIO</h1>
                <div style={{ marginLeft: isOpen ? "25px" : "0px" }} className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {
                menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className={isActive =>
                        "link" + (!isActive ? " unselected" : "")
                      }>
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink> 
                ))
            }
        </div>
        <main>{children}</main>
      </div>
  )
}

export default SideBar