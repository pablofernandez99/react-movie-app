import React, { lazy, Suspense } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import MovieContextProvider from './context/MovieContext'
import './style.css'

const Header = lazy(() => import('./components/Header'))
const Navigation = lazy(() => import('./components/Navigation'))
const Popular = lazy(() => import('./components/Popular'))
const Avances = lazy(() => import('./components/Avances'))
const Search = lazy(() => import('./components/Search'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {

    const handleSubmit = (e, history, searchInput) => {
        e.currentTarget.reset()
        let url = `/search/${searchInput}`
        history.push(url)
    }

    return (
        <MovieContextProvider>
            <HashRouter basename="/movie-app">
                <Suspense fallback={<div>loading...</div>}>
                    <div className="container">
                        <Route
                            render={props => (
                                <Header
                                    history={props.history}
                                    handleSubmit={handleSubmit}
                                />
                            )}
                        />
                        <Route
                            render={() => (
                                <Navigation />
                            )}
                        />
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/popular" />} />
                            <Route path="/popular" render={() => <Popular />} />
                            <Route path="/avances" render={() => <Avances />} />
                            <Route
                                path="/search/:searchInput"
                                render={props => (
                                    <Search searchTerm={props.match.params.searchInput} />
                                )}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Suspense>
            </HashRouter>
        </MovieContextProvider>
    )
}

export default App