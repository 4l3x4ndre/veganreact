import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import logo from './logo.svg'
import './App.css'
import Appbar from './UI/appbar/Appbar'

import FridgePage from './UI/pages/fridgePage'
import TestPage from './UI/pages/testPage'


function App() {

  return (

    <Router>
      <div className='App'>

        <Appbar />

        <header className='App-header'>

          <Switch>
            <Route path='/home'>
              <FridgePage />
            </Route>
            <Route path='/test'>
              {/* <TestPage/> */}
            </Route>
          </Switch>

        </header>

      </div>
    </Router>
  )
}

export default App
