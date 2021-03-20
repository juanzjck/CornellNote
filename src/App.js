import React, { Fragment } from 'react'
import { NewNote } from './pages/NewNote'
import { GlobalStyle } from './styles/GlobalStyles'
import {Home} from './pages/Home'
import {Notes} from './pages/Notes'
import {Redirect, Router} from '@reach/router'
import { LayoutPage } from './components/LayoutPage'

export const App = () =>{
    return(
        <Fragment>
            <GlobalStyle/>
            <LayoutPage>
                <Router>
                    <Home default path="/"/>
                    <NewNote path="/newNote" />
                    <Notes path="/notes"/>
                </Router>
            </LayoutPage>
        </Fragment>   
    )
}