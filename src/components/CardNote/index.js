import React from 'react'
import {Wrapp,P,Span,WrappDate,WrappIcon} from './styles'
import {IoIosClock} from 'react-icons/io'
import {BsSlashCircleFill} from 'react-icons/bs'
export const CardNote= () =>{
    return(
        <Wrapp>
            <WrappIcon>
             <BsSlashCircleFill onClick={()=>alert('eliminar')} size={20} />
            </WrappIcon>
           
            <h2>
                Titulos
            </h2>
            <P><Span>Resumen:</Span>asdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasddasd</P>
            <WrappDate>
                <IoIosClock size={30}/>
                <P className="date">Creado el:12-10-2020</P>
                <IoIosClock size={30}/>
                <P className="date">Actualizado el:12-10-2020</P>
            </WrappDate>
                
        </Wrapp>
    )
}