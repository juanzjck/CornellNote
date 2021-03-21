import React from 'react'
import { Loading } from '../Loading'

export const LayoutPage = ({children}) =>{
    return(
        <>
        <Loading/>
          {children}
        </>
    )
}