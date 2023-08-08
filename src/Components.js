import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';
import rightPanelImage from './Assets/thrive1.jpeg';
import leftPanelImage from './Assets/thrive2.jpeg';

export const Container = styled.div`
background-color: #1781E3;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 678px;
max-width: 100%;
min-height: 400px;
`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Logo = styled.img`
  width: 70%;
  height: 70%;
  margin-right: 10px;
`;

const LogoText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export { LogoContainer, Logo, LogoText };

export const Form = styled.form`
background-color: #ffffff;
color: #20232E;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin-top: 2rem;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 10px;
   border: 1px solid #1781E3;
   background-color: #1781E3;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;

const GoogleIcon = styled(FaGoogle)`
  margin-right: 8px;
`;
export { GoogleIcon };

export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
padding: 0 16px;
width: 200px;
font-size: 10px;
margin: 0.1rem;
`;

export const Anchor = styled.a`
color: #1781E3;
font-size: 10px;
text-decoration: none;
margin: 10px 0;
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
`;

export const Overlay = styled.div`
background: #1781E3;
background: -webkit-linear-gradient(to right, #1781E3, #1781E3);
background: linear-gradient(to right, #1781E3, #1781E3);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #20232E;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null};
  background-image: url(${leftPanelImage});
  background-size: cover;
  background-position: center;
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null};
    background-image: url(${rightPanelImage});
    background-size: cover;
    background-position: center;
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  text-shadow: 0 0 4px white;
`;