import React from 'react'
import { Note } from '../components/Note'
import { NewNoteContainer } from '../containers/NewNoteContainer'


export const NewNote= () =>{
    const handleSubmit=(onSubmit,input)=>{ 
        onSubmit({
            variables:{
                input
            }
        });
    }
    return(
        <NewNoteContainer>
            {
                (mutation,{loading,error,data})=>{
                    if(data){
                       if(data.createNote._id){
                           window.location.href=`/note/${data.createNote._id}`
                       }
                    }
                    return(
                        <Note onSubmit={(e)=>handleSubmit(mutation,e)}></Note>
                    )
                }
            }
        </NewNoteContainer>
  
    )
}