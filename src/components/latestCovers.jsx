import React from 'react'
import { BsCardImage } from 'react-icons/bs'

const latestMemes = [
    { icon: BsCardImage, date: "fecha" },
    { icon: BsCardImage, date: "fecha" },
    { icon: BsCardImage, date: "fecha" },
    { icon: BsCardImage, date: "fecha" },
    { icon: BsCardImage, date: "fecha" },
    { icon: BsCardImage, date: "fecha" }
]

const LatestCovers = () => {
    return (
        <article className="contentLatestMemes">
            <ul className="latestList">
                {
                    latestMemes.map((item, index) => {
                        return (
                            <li key={index}>
                                <item.icon className='latestIcon'/>
                                <div className='LatetsText'> {item.date} </div>        
                            </li>
                        )
                    })
                }
                {/* <li> <BsCardImage /> <div> fecha </div> </li>
                <li> <BsCardImage /> <div> fecha </div> </li>
                <li> <BsCardImage /> <div> fecha </div> </li>
                <li> <BsCardImage /> <div> fecha </div> </li>
                <li> <BsCardImage /> <div> fecha </div> </li>
                <li> <BsCardImage /> <div> fecha </div> </li> */}
            </ul>
        </article>
    )
}

export default LatestCovers
