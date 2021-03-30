import React, {Fragment, useContext} from 'react'
import {P,Pli,Li,Ul,TimeLineItemContent,DivContainerTimeLine,DivTimeLine,Title,WrappSectionContent,WrappIcones,LandingHeader,IconImg,WrappSection,Banner,Button,WrappButtons} from './styles'
import logo from '../../assets/icon.png'
import btcIcon from '../../assets/btc.png'
import paypalIcon from '../../assets/paypal.png'
import {Context} from '../../context'
import { BsCheckCircle } from "react-icons/bs";
export const Landing= () =>{
    const {IsSignIn}=useContext(Context)
    return(
        <LandingHeader>
            <Banner>
                <img src={logo}/>
                <Title>V Prealfa</Title>
                <P className="p_banner">
                   Usa la metodologia cornell para tomar notas de tus clases o cursos, resive recardatorios de estudio y monitorea tu avance
                </P>
                <WrappButtons>
                    {IsSignIn?
                    <Fragment>
                        <Button  className='blue' to='/newNote'>Nueva nota</Button>
                        <Button to='/notes' >Mis notas</Button>
                    </Fragment>
                    :
                    <Fragment>
                        <Button  className='blue' to='/register'>Crea una cuenta</Button>
                        <Button  to='/login' >Inicia sesión</Button>
                    </Fragment>
                    }
                   
                </WrappButtons>
            </Banner>
            <WrappSection className='note_background'>
                <WrappSectionContent className='box_background'>
                    <h2>¿Qué son las notas cornell?</h2>
                    <P>
                       Es una metodologia de anotacion, en la que se divide los apuntes que hacemos en 4 partes, un titulo, una  descricion, palabras clave o preguntas y un resumen.
                        Péro no solo se queda ahí, el cerebro aprende a través de la repetición espaciada por lo que la seccion de resumen se la deja vacia para luego de un tiempo, raelizar un resumen con lo que nos acordamos. 
                        De esta forma el cerebro crea las conexiones para que lo que aprendas se queda en el pasar del tiempo.  
                    </P>
                    <P>
                      Si quieres saber más sobre esta metodologia puedes revisar el siguiente link:

                    </P>
                    <a href='https://es.wikipedia.org/wiki/Notas_Cornell' target='blank'> 
                        Quiero saber más...
                    </a>
                </WrappSectionContent>
            </WrappSection>
            <WrappSection>
          
                <WrappSectionContent>
                    <h2>¿Por que somos la mejor opcion?</h2>
                    <br/>
                    <Ul>
                        <Li>
                          <BsCheckCircle size={25}/>
                            <Pli>
                            Esta plataforma es completamente gratis 
                            </Pli>
                           
                        </Li>
                        <Li>
                            <BsCheckCircle size={25}/>
                            <Pli>
                                Tus datos y notas no son compartidas con otras empresas
                            </Pli>
                          
                        </Li>
                        <Li>
                            <BsCheckCircle size={25}/>
                            <Pli>
                            Puedas crear notas sin limite 
                            </Pli>
                            
                        </Li>
                        <Li>
                           <BsCheckCircle size={25}/>
                            <Pli>
                            Resive notificaciones de recordatorio de estudio
                            </Pli>
                            
                        </Li>
                        <Li>
                           <BsCheckCircle size={25}/>
                            <Pli>
                            Configura el tiempo de espaciado para el repaso de tus notas
                            </Pli>
                            
                        </Li>
                        <Li>
                           <BsCheckCircle size={25}/>
                            <Pli>
                            Has un seguimientos de tus avances 
                            </Pli>
                        </Li>
                        <Li>
                             <BsCheckCircle size={25}/>
                            <Pli>
                            Usalo en cualquier plataforma
                            </Pli>
                            
                        </Li>
                    </Ul>
                   
                  
                </WrappSectionContent>
               
            </WrappSection>
            <WrappSection className='colored_background'>
                 <h2>¿Como usar las notas cornell?</h2>
                 <br/>       
                <DivTimeLine>
                    <DivContainerTimeLine  className='left'>
                        <TimeLineItemContent>
                            <h2>Paso 1</h2>
                            <p>Escribe un titulo con el tema de tu clase, en la parte de descripción ingresa informacion de tu clase, en la parte de preguntas agrega preguntas o palabras que consideres importantes para investigar</p>
                        </TimeLineItemContent>
                    </DivContainerTimeLine>
                    <DivContainerTimeLine  className='right'>
                        <TimeLineItemContent>
                            <h2>Paso 2</h2>
                            <p>Confirura la frecuencia del recordatorio para crear el resumen de la nota y revisar lo anotado, te recomendamos 1 día.</p>
                        </TimeLineItemContent>
                    </DivContainerTimeLine>
                    <DivContainerTimeLine  className='left'>
                        <TimeLineItemContent>
                            <h2>Paso 3</h2>
                            <p>El app ne notificara segun la tu configuracion, recibiras un push notification, cuando pase es momento de hacer el resumen.</p>
                        </TimeLineItemContent>
                    </DivContainerTimeLine>
                    <DivContainerTimeLine  className='right'>
                        <TimeLineItemContent>
                            <h2>Paso 4</h2>
                            <p>Al terminar el resumen, abras reforsado lo aprendido en clases y podras ver tus avances en el dashboard.</p>
                        </TimeLineItemContent>
                    </DivContainerTimeLine>
                    
                </DivTimeLine>
            </WrappSection>
            <WrappSection>
                <span>Todos los derechos reservados por ®Margin Note </span>
            </WrappSection>
        </LandingHeader>
    )
}

/*
 <WrappSection className='colored_background'>
                <WrappSectionContent >
                    <h2>¿Quieres ayudarnos de otra manera?</h2>
                    <P>
                       Si no puedes ayudarnos por paypal, no te preocupes, tambien puedes ayudarnos de otra formas, una es ayudarnos a compartir esta plataforma con tus amigos y la otra es donar tu tiempo.
                    </P>
                    <P>
                        Si tienes conocimientos de desarrollo, diseño, marketing digital, eres profesional de la educacion o producion audiovisual pues puedes ayudarnos de otra forma.
                        Requerimos a personas que quieran dar algo de su tiempo para este proyecto, nuestra comunidad estara feliz de resivir tu ayuda. 
                    </P>
                    <P className="sub_p">
                        Si eres programador, estamos buscando a alguien que conosca de:
                    </P>
                    <ul>
                        <li>React.js</li>
                        <li>css in javascript</li>
                        <li>Webpack</li>
                        <li>Nodejs</li>
                        <li>GraphQl</li>
                        <li>WorkBox</li>
                        <li>Cypress</li>
                    </ul>
                    <P className="sub_p">
                        Si eres diseñador, estamos buscando a alguien que conosca de:
                    </P>
                    <ul>
                        <li>Ilustracion</li>
                        <li>Diseño interactivo</li>
                        <li>UX</li>
                        <li>UI</li>
                    </ul>
                    <P className="sub_p">
                        Si eres productor audiovisual, estamos buscando a alguien que conosca de:
                    </P>
                    <ul>
                        <li>Supervisión y corrección del guion técnico</li>
                        <li>Creación del guion gráfico</li>
                        <li>
                            Contratación de equipos técnicos, artísticos, de edición, de vestuario, de maquillaje, etc. con los que se contará durante la realización del programa.
                        </li>
                        <li>
                            Planificacion de rodajes
                        </li>
                        <li>
                            Edicion de video 
                        </li>
                        <li>
                            Producion de gerrilla
                        </li>
                    </ul>
                    <P className="sub_p">
                        Si sabes de marketing digital, estamos buscando a alguien que conosca de:
                    </P>
                    <ul>
                        <li>copywriting</li>
                        <li>Content Marketing</li>
                        <li>Posicionamiento Web</li>
                        <li>SEO</li>
                        <li>SEM</li>
                        <li>PR Digital</li>
                    </ul>
                    <P className="sub_p">
                        Si eres un profesional de la educacion, estamos buscando a alguien que conosca de:
                    </P>
                    <ul>
                        <li>Metodologia de educacion</li>
                        <li>Educacion en linea</li>
                        <li>Crear contenido educativo para blogs</li>
                    </ul>
                  
                </WrappSectionContent>
            </WrappSection> */