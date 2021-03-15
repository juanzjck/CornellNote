import React, { Fragment } from 'react'
import {InputSummary,WrapBody,WrapDescripcion,InputTitle,InputDescription,InputKeyWords} from './styles'
import {useLocalStorage} from '../../hook/useLocalStorage'
import { NavBarNote } from '../NavBarNote'

export const Note = () =>{
    const title=useLocalStorage('title','')
    const keyWords=useLocalStorage('keyword','')
    const dedscription=useLocalStorage('description','')
    const summary=useLocalStorage('summary','')
   
    return(
        <Fragment>
            <WrapBody>
                <InputTitle onChange={e=>title.setLocalStorage(e.target.value)} value={title.storeValue} placeholder='Titulo- tema'/>
                <WrapDescripcion>
                    <InputKeyWords onChange={e=>keyWords.setLocalStorage(e.target.value)} value={keyWords.storeValue} placeholder='Palabras clave'/>
                    <InputDescription onChange={e=>dedscription.setLocalStorage(e.target.value)} value={dedscription.storeValue} placeholder='Descripcion'/>
                </WrapDescripcion>
                <InputSummary onChange={e=>summary.setLocalStorage(e.target.value)} value={summary.value} placeholder='Resumen'/>
            </WrapBody>
           <NavBarNote></NavBarNote>
        </Fragment>

    )
}