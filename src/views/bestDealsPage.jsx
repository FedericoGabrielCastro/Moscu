import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import BestDeals from '../components/bestDeals'

const BestDealsPage = () => {
    return (
        <main className='contentBestDealsPage'>
            <section className='currentBestMeme'>
                <article> 
                    <BsCardImage className='currentBestMemeIcon'/> 
                </article>
            </section>
            <aside className='dealsFromUser'>
                <BestDeals />
            </aside>
        </main>
    )
}

export default BestDealsPage
