import React, { useState } from 'react'

const Header = ({ history, handleSubmit }) => {
    const [searchEntry, setSearchEntry] = useState('')
    const updateSearchInput = e => {
        setSearchEntry(e.target.value)
    }

    return (
        <header>
            <div className="header-wrapper">
                <h2>MOVIE API</h2>
                <h3>Millones de películas por descrubrir. Explora ahora.</h3>
                <div className="search">
                    <form onSubmit={e => handleSubmit(e, history, searchEntry)}>
                        <input
                            placeholder="Buscar una película..."
                            onChange={updateSearchInput}
                            value={searchEntry}
                        />
                        <button
                            type="submit"
                            disabled={searchEntry == ''} >
                            Search
                    </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header