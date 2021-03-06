import React, { Fragment } from 'react'
import { RegisterForm } from '../components/RegisterForm'
import {LayoutPageRegister} from '../components/LayoutPageRegister'
import { RegisterFormContainer } from '../containers/RegisterFormContainer'
import {useValue} from '../hook/useValue'
export const Register= ({history}) =>{
    const errorMessage=useValue('')
    return(
        <RegisterFormContainer>
            {
                (mutation,{loading,error,data})=>{
                    if(data){
                        alert(data)
                        window.location.href='/login'
                    }
                    if(error){
                        console.log(error)
                        errorMessage.onChange(`El formulario presenta problemas`)
                    }
                    return(
                        <LayoutPageRegister error={errorMessage.value}>
                            <RegisterForm loading={loading} onSubmit={mutation}/>
                        </LayoutPageRegister>
                    )
                }
            }
        </RegisterFormContainer>

    )
}