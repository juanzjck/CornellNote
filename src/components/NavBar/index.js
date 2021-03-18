import React, { Fragment } from 'react'
import {LinkButton,WrappDisclamer,WrappButtonOpenNav,WrappButtons,ItemNav,NavNote,ButtonOpenNav} from './styles'
import {UseValue} from '../../hook/UseValue'
import {BsFillHouseDoorFill,BsCloudFill,BsFillGrid3X3GapFill,BsCloudDownload,BsFillPlusSquareFill,BsFillFolderFill,BsFillDashCircleFill} from 'react-icons/bs'
export const NavBar = () =>{
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
                            <LinkButton to='/newNote' >
                                <BsFillPlusSquareFill size={size}/>
                                Nueva nota
                            </LinkButton>
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