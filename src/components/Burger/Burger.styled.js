import styled from 'styled-components';
export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  left: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
 
  
 
  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.35rem;
    background: ${({ theme, open }) => open ? theme.close : theme.open};
    border-radius: 20px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    animation-name: ${({ open }) => open ?"" : "blinker"};
    animation-duration: 3.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes blinker {
      0% { filter: drop-shadow(3px 3px 10px  rgb(0, 238, 255)) ; }
      50% { filter: drop-shadow(3px 3px 10px  rgb(5, 5, 5)) ;}
      100% { filter: drop-shadow(3px 3px 10px  rgb(0, 238, 255)) ; }
    }
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    
    
  }
`;