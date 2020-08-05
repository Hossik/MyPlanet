import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(184, 176, 176);
  height: 77vh;
  min-height: 250px;
  text-align: left;
  padding: 2rem;
  position: fixed;
  
  left: 0;
  border-radius: 35px 45% 45% 35px;
  transition: transform 0.3s ease-in-out;
  
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
    
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
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
        color:green;
       
      }
    }
    transform: translateX(-100%);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-600%)'};
  `;