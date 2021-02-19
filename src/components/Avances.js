import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../context/MovieContext'
import Loader from './Loader'
import Gallery from './Gallery'


const Avances = () => {

    const { movies, loading, runAvances } = useContext(MovieContext)
    useEffect(() => {
        runAvances()
    }, [])

    return (
        <section>
            <div className="movie-avances">
                <h3>Ultimos avances</h3>
                { loading ? <Loader /> : <Gallery data={movies}/> }
            </div>
        </section>
    )
}

export default Avances