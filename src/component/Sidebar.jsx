import React , {useState} from 'react'
import { HiMenu } from "react-icons/hi"
import { AiOutlineHome } from "react-icons/ai"
import { FaInfo } from "react-icons/fa"
import { FcCurrencyExchange } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

export default function Sidebar({children}) {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const menuItems = [
        {
            path: "/",
            name: "home",
            icon: <AiOutlineHome />
        },
        {
            path: "/admin-basic-info",
            name: "basicinfo",
            icon: <FaInfo />
        },
        {
            path: "/admin-billing-details",
            name: "billing",
            icon: <FcCurrencyExchange />
        },
    ]
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar" style={{width:isOpen ? "300px" : "46px"}}>
                    <div className="top-section">
                        <h1 className='logo' style={{display:isOpen ? "block" : "none"}}>Logo</h1>
                        <div className="bars" style={{marginLeft:isOpen ? "50px" : "-6px"}}><HiMenu onClick={toggle}/></div>
                    </div>
                    {
                        menuItems.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}
