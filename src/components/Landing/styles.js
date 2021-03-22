import styled,{css,keyframes}  from 'styled-components'
import {Link} from '@reach/router'
import background_note from '../../assets/note_background.jpg'
export const LandingHeader=styled.div`
    width:100%;
    height:100vh;
    background-image:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
    animation:1s ${particles};
   /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 400% 400%;
`
const particles = keyframes`
    0% {
       opacity:0;
    }
    50% {
        opacity:.5;
    }
    100% {
       opacity:1;
    }
`

export const Banner=styled.div`
    width:100%;
    padding:10px;
    color:white;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
export const Title=styled.h1`
    font-size:40px;
    font-weight:bold;
`
export const Button=styled(Link)`
    background-color:white;
    padding:15px;
    margin:10px;
    border-radius:20px;
    font-size:20px;
    text-decoration:none;
    box-shadow:5px 5px 5px 5px #5858583b;
    font-weight:#eeeeee;
    &:hover{
        background-color:#f8f4f4;
        font-weight:bold;
    }
    &.blue{
        background-color:#2857ce;
        color:white;
        &:hover{
            background-color:#2350cc;
        }
    }
`

export const WrappButtons=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    padding:10px;
 

`

export const P=styled.p`
    font-size:20px;
    text-align:center;
    &.sub_p{
        font-weight:bold;
    }
    &.p_banner{
        font-size:30px;
    }
    margin:10px;
`


export const WrappSection=styled.div`
    font-size:20px;
    display:flex;
    text-align:center;
    flex-direction:column;
    padding:20px;
    &.colored_background{
        background-image:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
        animation:1s ${particles};
        background-size: 400% 400%;
    /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        color:white;
    }
    &.note_background{
        background-image:url(${background_note});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
     
    }
`

export const IconImg=styled.img`
   width:10%;
   &.btc{
       height:auto;
   }
   &.paypal{
       height:auto;
   }
`

export const WrappIcones=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

`

export const WrappSectionContent=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:10px;
    &.box_background{
        background-color: #6fbce4ab;
        box-shadow: 4px 4px 4px 4px #1818186e;
    }

`
