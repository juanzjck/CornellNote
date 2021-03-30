import React, { Fragment } from 'react'
import { ListOfNotes } from '../components/ListOfNotes'
import { NavBar } from '../components/NavBar'
import {Dashboard} from '../components/DashBoard'

export const Notes= () =>{
    return(
        <Fragment>
            <NavBar></NavBar>
            <br></br>
            <Dashboard />
            <br></br>
             <ListOfNotes />
        </Fragment>
       
    )
}