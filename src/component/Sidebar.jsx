import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi"
import { FaTruckMoving } from "react-icons/fa"

import { FcCurrencyExchange } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    // const menuItems = [
    //     {
    //         path: "/admin-basic-info",
    //         name: "Supply Management",
    //         icon: <FaTruckMoving />
    //     },
    //     {
    //         path: "/admin-billing-details",
    //         name: "Master Page",
    //         icon: <FcCurrencyExchange />
    //     },
    // ]
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar" style={{ width: isOpen ? "300px" : "46px" }}>
                    <div className="top-section">
                        <h1 className='logo' style={{ display: isOpen ? "block" : "none" }}>Logo</h1>
                        <div className="bars" style={{ marginLeft: isOpen ? "50px" : "-6px" }}><HiMenu onClick={toggle} /></div>
                    </div>
                    {/* {
                        menuItems.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    } */}
                    <NavLink to="/admin-basic-info" className="link" activeclassName="active" >
                        <div className='icon'><FaTruckMoving /></div>
                        <div className="link_text">Supply Management</div>
                    </NavLink>
                    <NavLink to="/admin-billing-details" className="link" activeclassName="active" >
                        <div className='icon'><FcCurrencyExchange /></div>
                        <div className="link_text">Master Page</div>
                    </NavLink>
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}
