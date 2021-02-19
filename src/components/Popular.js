import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../context/MovieContext'
import Loader from './Loader'
import Gallery from './Gallery'

const Popular = () => {
    const { movies ,loading, error, runPopular } = useContext(MovieContext)

    useEffect(() => {
        runPopular()
    }, [])

    return (
        <section>
            <div className="movie-popular">
                <h3>Tendencias</h3>
                {loading ? <Loader /> : <Gallery data={movies} error={error} />}
            </div>
        </section>
    )
}

export default Popular