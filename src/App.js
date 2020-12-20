import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import logo from './logo.svg'
import './App.css'
import Appbar from './UI/appbar/Appbar'

import FridgePage from './UI/pages/fridgePage'


function App() {

  return (

    <Router>
      <div className='App'>

        <Appbar />

        <header className='App-header'>

          <Switch>
            <Route path="/home">
              <FridgePage />
            </Route>
          </Switch>

        </header>

      </div>
    </Router>
  )
}

export default App
