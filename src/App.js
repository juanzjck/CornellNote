import React, { Fragment } from 'react'
import { NewNote } from './pages/NewNote'
import { GlobalStyle } from './styles/GlobalStyles'
import {Home} from './pages/Home'
import {Notes} from './pages/Notes'
import {Redirect, Router} from '@reach/router'

export const App = () =>{
    return(
        <Fragment>
            <GlobalStyle/>
            <Router>
                <Home default path="/"/>
                <NewNote path="/newNote" />
                <Notes path="/notes"/>
            </Router>
   
          
        </Fragment>   
    )
}