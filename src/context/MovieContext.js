import React, { useState, createContext } from 'react'
import axios from 'axios'
import { API_KEY } from '../api/config'

export const MovieContext = createContext()

const MovieContextProvider = props => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const runSearch = query => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(response => {
                setLoading(false)
                setMovies(response.data.results)
                console.log(response.data.results)
            }, (err) => {
                setError(true)
                setLoading(false)
                console.log(err)
            })
    }
    const runPopular = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(response => {
                setLoading(false)
                setError(false)
                setMovies(response.data.results)
                console.log(response.data.results)
            }, (err) => {
                setError(true)
                setLoading(false)
                console.warn(err)
            })
    }

    const runAvances = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-12-15&primary_release_date.lte=2020-12-26&api_key=${API_KEY}`)
            .then(response => {
                setLoading(false)
                setError(false)
                setMovies(response.data.results)
                console.log(response.data.results)
            }, (err) => {
                setError(true)
                setLoading(false)
                console.warn(err)
            })
    }

    return (
        <MovieContext.Provider value={{ movies, loading, error, runSearch, runPopular, runAvances }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider