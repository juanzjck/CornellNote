import React, { Fragment,useContext } from 'react'
import { NewNote } from './pages/NewNote'
import { GlobalStyle } from './styles/GlobalStyles'
import {Home} from './pages/Home'
import {Notes} from './pages/Notes'
import {Redirect, Router} from '@reach/router'
import { LayoutPage } from './components/LayoutPage'
import {Context} from './context'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
export const App = () =>{
    const {IsSignIn}=useContext(Context)
    return(
        <Fragment>
            <GlobalStyle/>
            <LayoutPage>
                <Router>
                    <Home default path="/"/>
                    {!IsSignIn&&<Register path="/register"/>}
                    {!IsSignIn&&<Login path="/login"/>}
                    {!IsSignIn&&<Redirect from="/newNote" to="/register"/>}
                    {!IsSignIn&&<Redirect from="/notes" to="/register"/>}
                    {IsSignIn&&<Redirect from='/login' to='/'/>}
                    {IsSignIn&&<Redirect from='/register' to='/'/>}
                    <NewNote path="/newNote" />
                    <Notes path="/notes"/>
                </Router>
            </LayoutPage>
        </Fragment>   
    )
}