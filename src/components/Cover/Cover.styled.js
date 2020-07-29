import styled from 'styled-components';

export const StyledCover = styled.div`

position: relative;



.Rrrrr { font: italic 1em serif; fill: red; }


.neons{
 font-size: 1em;
 font-family: 'Codystar';
 font-weight: bold;
 animation: glow 2s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
   fill: #fff;
 text-shadow: 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 90px #00fff2;
 opacity:1;
}

to {
  fill: black;
 text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2, 0 1 90px #00fff2;
 opacity:0;
}
}



g {
  pointer-events: bounding-box;
  opacity: 1;
  
}
g .stop :hover {
    opacity: 0.9;
    
}


.linetext{
  margin-top: 9vh;
  font-family: 'Changa', sans-serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size:12em;

}
#up{
  font-size:13vmin ;
  color: rgb(233, 25, 25);
  font-weight: bold;
  z-index: -1;
  filter: drop-shadow(3px 3px 10px rgb(233, 25, 25)) brightness(3);
}
#down{ 
  font-size: 14.5vmin;
  color: rgb(255, 220, 0);
  font-weight: bold;
  z-index: -1;
  filter: drop-shadow(3px 3px 10px  rgb(255, 220, 0)) brightness(3);
}

.inner{
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-family: 'Changa', sans-serif;
  align-items: center;
  justify-content: center;
  bottom:150%;
  
}
.landing-inner{
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  align-items: center;
  text-align: center;
  
}
.light-overlay {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  
}


.dark-wrapper-design {
  display: flex;
  width: 100vw;
  height: 100%;
  transition: margin .5s;
  
   
}


#controler{
  margin-left:3%;
}
#help{
  position:absolute;
  margin-top:1%;
  margin-left:4%;
  color:white;
  font-size:3vmin;

}
p{
  color:white;
  font-size:2vmin;
}



`;
