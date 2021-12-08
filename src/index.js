import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
// components
import Header from './components/Header'
import Error from './components/Error'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/survey">
                <Survey />
            </Route>
            <Route path="/results">
                <Results />
            </Route>
            <Route path="/freelances">
                <Freelances />
            </Route>
            <Route>
                <Error />
            </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)