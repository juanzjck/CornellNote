import React, { Fragment } from 'react'
import {Ul,Li,Wrapp} from './styles'
import {CardNote} from '../CardNote'
export const ListOfNotes= ()=>{
    return(
        <Wrapp>
            <h1>Mis notas</h1>
            <Ul>
                {
                    [1,2,3,4,5,6,7].map(c=><Li><CardNote/></Li>)
                }
            </Ul>
        </Wrapp>

    )
}