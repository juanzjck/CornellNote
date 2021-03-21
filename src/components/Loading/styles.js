import { css,keyframes } from 'styled-components'
import styled from 'styled-components'

//ldio-w6e5dlw4mrj-r
export const fadeInKeyframe = keyframes`
  0%, 100% { animation-timing-function: cubic-bezier(0.2 0 0.8 0.8) }
  50% { animation-timing-function: cubic-bezier(0.2 0.2 0.8 1) }
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`
//ldio-w6e5dlw4mrj-s
export const fadeInKeyframew6e5dlw4mrj_s = keyframes`
  0%, 100% { animation-timing-function: cubic-bezier(0.2 0 0.8 0.8) }
  50% { animation-timing-function: cubic-bezier(0.2 0.2 0.8 1) }
  0% { transform: translate(-30px,-30px) scale(0) }
  50% { transform: translate(-30px,-30px) scale(1) }
  100% { transform: translate(-30px,-30px) scale(0) }
`
//.ldio-w6e5dlw4mrj>div
export const wrapperLdioW6e5dlw4mrj=styled.div`
    transform: translate(0px,-15px);
`
//.ldio-w6e5dlw4mrj > div > div
export const wrapperLdiow6e5dlw4mrj2=styled.div`
  position: absolute;
  transform: translate(100px, 82px);
`
//.ldio-w6e5dlw4mrj > div > div > div > div
export const wrapperLdiow6e5dlw4mrj3=styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1e49cb;
  animation: ${fadeInKeyframew6e5dlw4mrj_s} 1s linear infinite;
`
//.ldio-w6e5dlw4mrj > div > div:last-child

export const wrapperLdiow6e5dlw4mrj4=styled.div`
  animation-delay: -0.5s;
`

//ldio-w6e5dlw4mrj > div > div:last-child > div > div
export const wrapperLdiow6e5dlw4mrjChild2=styled.div`
  animation-delay: -0.5s;
  background: #0c9ad3;
`
//.loadingio-spinner-interwind-4mqhrq6fmzw
export const wrapperLdio4mqhrq6fmzw=styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f3;
`
//.ldio-w6e5dlw4mrj
export const wrapperLdiow6e5dlw4mrj0=styled.div`
 width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
`
//.ldio-w6e5dlw4mrj div

export const wrapperLdiow6e5dlw4mrj1=styled.div`
 box-sizing: content-box;
`