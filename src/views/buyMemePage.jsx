import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import BetForm from '../components/betForm'

const BuyMemePage = () => {
    return (
        <main className='contentBuyMemePage'>
            <section className='bestMemeContent'>
                <article>
                    <h2>Enero 2022</h2>
                </article>
                <article>
                    <BsCardImage className='BestMemeIcon'  />
                </article>
            </section>
            <section className='betFormContent'>
                <BetForm />
            </section>
        </main>
    )
}

export default BuyMemePage
