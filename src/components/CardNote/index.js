import React from 'react'
import {LinkWrapp,Wrapp,P,Span,WrappDate,WrappIcon} from './styles'
import {IoIosClock} from 'react-icons/io'
import {BsSlashCircleFill} from 'react-icons/bs'

export const CardNote= ({_id,title,summary,keyword,createdAt,updatedAt}) =>{
    const dateCreate=Number(createdAt)
    const dateUpdate=Number(updatedAt)
    const created=new Date(dateCreate)
    const updated=new Date(dateUpdate)

    return(
       
            <Wrapp>
                <WrappIcon>
                    <BsSlashCircleFill onClick={()=>alert('eliminar')} size={20} />
                </WrappIcon>
                <LinkWrapp to={`/note/${_id}`}>
                    <h2>
                        {title}
                    </h2>
                    <P><Span>Resumen:</Span>{summary}</P>
                    <WrappDate>
                        <IoIosClock size={30}/>
                        <P className="date">Creado el:{`/${created.getFullYear()}/${created.getFullYear()}`}</P>
                        <IoIosClock size={30}/>
                        <P className="date">Actualizado el:{`${created.getDate()}/${(created.getMonth() + 1)}/${updated.getFullYear()}`}</P>
                    </WrappDate>
                </LinkWrapp>
          </Wrapp>
 
     )
}