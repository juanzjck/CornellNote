import React, { Fragment } from 'react'
import { Loading } from '../Loading'

export const LayoutPage = ({children}) =>{
    return(
        <Fragment>
        <Loading/>
          {children}
        </Fragment>
    )
}