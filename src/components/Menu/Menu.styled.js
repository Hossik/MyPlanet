import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #c5c4f0;
  height: 77vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  min-height:7em;
  left: 0;
  border-radius: 35px 45% 45% 35px;
  transition: transform 0.3s ease-in-out;
  font-family :Roboto;
  span{
    justify-content: start;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: start;

    }
  }
  .links {
    font-size: 0.6em;
    text-transform: uppercase;
    padding: 2vh 0;
    font-weight: bold;
    text-align: left;
    color: #181332;
    text-decoration: none;
    transition: color 0.3s linear;
    margin-bottom: 5vh ;
    
    @media  (max-device-width: 850px) and (orientation: landscape) {
      font-size: 0.5em;

    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.5em;
      
      justify-content: start;
    }
    @media (max-height:450px) {
      font-size: 0.5em;
    }
    &:hover {
        color:rgb(49, 39, 207);
       
      }
    }
    transform: translateX(-100%);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-600%)'};
  `;