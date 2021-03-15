import React, { Fragment } from 'react'
import { ListOfNotes } from '../components/ListOfNotes'
import { NavBar } from '../components/NavBar'


export const Notes= () =>{
    return(
        <Fragment>
            <NavBar></NavBar>
             <ListOfNotes />
        </Fragment>
       
    )
}