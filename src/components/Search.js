import React, { useContext, useEffect } from 'react'
import Gallery from './Gallery'
import Loader from './Loader'
import { MovieContext } from '../context/MovieContext'

const Search = ({ searchTerm }) => {
    const { movies, loading, runSearch } = useContext(MovieContext)
    useEffect(() => {
        runSearch(searchTerm)
    }, [searchTerm])

    return (
        <section>
            <div className="search-movie">
                <h3>{searchTerm}</h3>
                {loading ? <Loader /> : <Gallery data={movies} />}
            </div>
        </section>
    )
}

export default Search