import React from 'react'
import { FaUserTie } from 'react-icons/fa' 

const dealsFromUser = [
    { icon: FaUserTie, price: "$20.000", comment: "Nisman" },
    { icon: FaUserTie, price: "$20.000", comment: "Nisman" },
    { icon: FaUserTie, price: "$20.000", comment: "Nisman" },
    { icon: FaUserTie, price: "$20.000", comment: "Nisman" },
    { icon: FaUserTie, price: "$20.000", comment: "Nisman" },
    { icon: FaUserTie, price: "$20.000", comment: "Nisman" }
]

const BestDeals = () => {
    return (
        <ul className='dealsList'>
            {
                dealsFromUser.map((item, index) => {
                    return (
                        <li key={index} className='boxDealsContent'>
                            <item.icon className='iconProfile' />
                            <span> {item.price} - </span>
                            <span> {item.comment} </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BestDeals
