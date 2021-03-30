import React, { Fragment } from 'react'
import {InputSummary,WrapBody,WrapDescripcion,InputTitle,InputDescription,InputKeyWords} from './styles'
import {useLocalStorage} from '../../hook/useLocalStorage'
import { NavBarNote } from '../NavBarNote'

export const Note = ({onSubmit}) =>{
    const title=useLocalStorage('title','')
    const keyWords=useLocalStorage('keyword','')
    const dedscription=useLocalStorage('description','')
    const summary=useLocalStorage('summary','')
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({
            variables:{
                input:{
                    title: `${title.storeValue}`,
                    description: `${dedscription.storeValue}`,
                    keyword: `${keyWords.storeValue}`,
                    summary: `${summary.storeValue}`
                }
            }
        });
    }
    return(
        <Fragment>
            <WrapBody>
                <InputTitle onChange={e=>title.setLocalStorage(e.target.value)} value={title.storeValue} placeholder='Título - tema'/>
                <WrapDescripcion>
                    <InputKeyWords onChange={e=>keyWords.setLocalStorage(e.target.value)} value={keyWords.storeValue} placeholder='Palabras clave y preguntas'/>
                    <InputDescription onChange={e=>dedscription.setLocalStorage(e.target.value)} value={dedscription.storeValue} placeholder='Descripción'/>
                </WrapDescripcion>
                <InputSummary onChange={e=>summary.setLocalStorage(e.target.value)} value={summary.value} placeholder='Resúmen'/>
            </WrapBody>
           <NavBarNote onSubmit={e=>handleSubmit(e)}></NavBarNote>
        </Fragment>

    )
}