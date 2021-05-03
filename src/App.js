import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import TargetJob from './components/TargetJob'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="title">
          <h1>Github<span className="tilte-git"> Jobs/fils_du_Faso</span></h1>
        </div>
        <Switch>
          <Route exact path='/'>
            <SearchPage/>
          </Route>

          <Route>
            <TargetJob path='job'/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
