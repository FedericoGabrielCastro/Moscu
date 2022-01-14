import React from 'react'
import { BsCardImage } from 'react-icons/bs'

import LatestCovers from '../components/latestCovers'

const MemeOfTheMonthPage = () => {
    return (
        <main className='contentMemeOfTheMonthPage'>
            <section className='currentBestMemeContent'>
                <article>
                    <h2>Enero 2022</h2>
                </article>
                <article>
                    <BsCardImage className='currentBestMemeIcon' />
                </article>
                <article>
                    <button className='moreInfoBestMemeBtn'>
                        Linchar
                    </button>
                </article>
            </section>
            <section className='latestCoversContent'>
                <LatestCovers /> 
            </section>
        </main>
    )
}

export default MemeOfTheMonthPage
