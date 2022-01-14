import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {path: "/ofTheMonth", title: "meme of the month"},
    {path: "/buyMeme", title: "buy meme" },
    {path: "/bestDeals", title: "best deals" }
]

const CustomNavbar = () => {
    return (
        <nav className='customNavbar'>
            <ul className='linksNavbar'>
                {
                    links.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    className={(props) => {
                                        return `${props.isActive ? "navActive" : "navDisable"}`
                                    }}
                                    to={item.path}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default CustomNavbar
