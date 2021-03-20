import React, { Fragment } from 'react'
import {LinkButton,WrappDisclamer,WrappButtonOpenNav,WrappButtons,ItemNav,NavNote,ButtonOpenNav} from './styles'
import {UseValue} from '../../hook/UseValue'
import {BsFillHouseDoorFill,BsCloudFill,BsFillGrid3X3GapFill,BsCloudDownload,BsFillPlusSquareFill,BsFillFolderFill,BsFillDashCircleFill} from 'react-icons/bs'
export const NavBarNote = () =>{
    const IsShow=UseValue(false);
    const size=30;
    return(
        <Fragment>
            {!IsShow.value?
                <ButtonOpenNav onClick={()=>IsShow.onChange(true)}>
                    <BsFillGrid3X3GapFill size={20}/>
                </ButtonOpenNav>:
                <Fragment>
                    <NavNote>
                        <WrappButtonOpenNav>
                            <ButtonOpenNav className='onShow' onClick={()=>IsShow.onChange(false)}>
                                <BsFillDashCircleFill size={20}/>
                            </ButtonOpenNav>
                        </WrappButtonOpenNav>
                 
                        <WrappButtons>
                            <LinkButton onClick={()=>console.log('e')} to='/newNote'> 
                                <BsFillPlusSquareFill size={size}/>
                                Nueva nota
                            </LinkButton>
                            <ItemNav >
                                <BsFillFolderFill size={size}/>
                                Guardar cambios
                            </ItemNav>
                         
                        </WrappButtons>
                        <WrappButtons>
                                 <LinkButton to='/'> 
                                    <BsCloudDownload size={size}/>
                                    Descargar nota
                                </LinkButton>
                                <LinkButton  to='/notes' >
                                    <BsCloudFill size={size}/>
                                    Capetas de notas
                                </LinkButton>
                        </WrappButtons>
                        <WrappButtons>
                               <LinkButton to='/'> 
                                    <BsFillHouseDoorFill size={size}/>
                                   Home
                                </LinkButton>
                        </WrappButtons>
                        <WrappDisclamer>
                              <h2>Marginal note</h2>
                              <p>
                                  Crea tus notas de tus calses, talleres, cursos, peliculas o cualquier informacion que consideres valiosa para guardar.
                                  Con la metodologia Notas marginales podras tener tus notas ordenas y siempre  a la mano.
                              </p>
                        </WrappDisclamer>

                    </NavNote>
                 
                </Fragment>
             
                }
        
           
        </Fragment>
    )
}