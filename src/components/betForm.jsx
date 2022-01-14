import React from 'react'

const BetForm = () => {
    return (
        <article>
            <form className='betFormContent'>
                <div>
                    <label> message </label>
                    <input type="text"/>
                </div>
                <div>
                    <label> purchase</label>
                    <input type="number" min="0" max="10000" step="25"/>
                </div>
                <input type="submit" value="Autorizar"/>
            </form>
        </article>
    )
}

export default BetForm
