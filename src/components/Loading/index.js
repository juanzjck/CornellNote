import React from 'react'
import {wrapperLdiow6e5dlw4mrj0,wrapperLdioW6e5dlw4mrj,wrapperLdiow6e5dlw4mrj2,wrapperLdiow6e5dlw4mrj3,wrapperLdiow6e5dlw4mrj4,wrapperLdio4mqhrq6fmzw,wrapperLdiow6e5dlw4mrjChild2} from './styles'
import  LOADING_GIF from '../../assets/loading_standar.gif'
import { ModalLayout } from '../Modal'
export const Loading = () =>{
    return(
      <ModalLayout title='' modalIsOpen={false} >
         <img src={LOADING_GIF}/>
      </ModalLayout>
    )
}