import React from 'react'
import {P,Title,WrappSectionContent,WrappIcones,LandingHeader,IconImg,WrappSection,Banner,Button,WrappButtons} from './styles'
import logo from '../../assets/icon.png'
import btcIcon from '../../assets/btc.png'
import paypalIcon from '../../assets/paypal.png'
export const Landing= () =>{
    return(
        <LandingHeader>
            <Banner>
                <img src={logo}/>
                <Title>V Prealfa</Title>
                <P>
                    Crea notas de tus clases de forma sencilla usando la metodologia notas marginales y mantenlas siempre a mano en cualquier dispositivo
                </P>
                <WrappButtons>
                    <Button  className='blue' to='/newNote'>Nueva nota</Button>
                    <Button to='/notes' >Mis notas</Button>
                </WrappButtons>
                
            </Banner>
            <WrappSection className='note_background'>
                <WrappSectionContent className='box_background'>
                    <h2>¿Qué es Margin Note?</h2>
                    <P>
                        Es una plataforma de codigo abierto, creada para que puedas crear notas con la metodologia notas marginales, es una tecnica muy util para tomar apuntes de tus clases o talleres.
                    </P>
                    <P>
                        Sabesmo que siempre necesitas tener tus notas a mano, por lo que esta plataforma es una progresive web app, la cual puedes instalar en tus dispositivos
                    </P>
                </WrappSectionContent>
            </WrappSection>
            <WrappSection>
          
                <WrappSectionContent>
                    <h2>Apoyanos!!!</h2>
                    <P>
                        Esta plataforma es completamente gratis, y estamos felices de mantenerla, pero implica algo de tiempo asi que estariamos felices si nos apoyas, puedes apoyarnos usando  PayPal
                    </P>
                </WrappSectionContent>
                <WrappIcones>
                    <IconImg className='paypal'  src={paypalIcon}/>
                 
                </WrappIcones>
               
            </WrappSection>
            <WrappSection className='blue_background'>
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
            </WrappSection>
            <WrappSection>
                <span>Todos los derechos reservados por ®Margin Note </span>
            </WrappSection>
        </LandingHeader>
    )
}