import React, { Fragment } from 'react'
import { ListOfNotes } from '../components/ListOfNotes'
import { NavBar } from '../components/NavBar'
import {Dashboard} from '../components/DashBoard'
import { ListNoteContainer } from '../containers/ListNoteContainer'

export const Notes= () =>{
    return(
        <Fragment>
            <NavBar></NavBar>
            <br></br>
            <Dashboard />
            <br></br>
            <ListNoteContainer>
                {({data,loading, error})=>{
                    if(loading) return<h1>Loading...</h1>
                    return <ListOfNotes data={data.getNotes}/>
                }}
            </ListNoteContainer>
             
        </Fragment>
       
    )
}