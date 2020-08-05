import styled from 'styled-components';

export const StyledCover = styled.div`

position: relative;


svg {
  position: absolute;
  top: 0;
  left: 0;
}


@media (max-width: 767px){
  #gclick{
    margin-bottom: 80px;
  }

}

.linkedmobile{
  font-size: 1em;
 font-family: 'Codystar';
 font-weight: bold;
 fill: #fff;
}

.neonsmobile{
  font-size: 1.5em;
  font-family: 'Codystar';
  font-weight: bold;
  fill: #003cff;

 }

.neons{
 font-size: 1.5em;
 font-family: 'Codystar';
 font-weight: bold;
 animation: glow 2s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
    fill: #fff;
    text-shadow: 0 0 10px #008cff, 0 0 20px #006eff, 0 0 30px #0084ff, 0 0 40px #0051ff, 0 0 50px #0057ff, 0 0 60px #0066ff, 0 0 70px #003cff, 0 0 90px #003cff;
    opacity:1;
    }

  to {
    fill: black;
    text-shadow: 0 0 10px #008cff, 0 0 20px #006eff, 0 0 30px #0084ff, 0 0 40px #0051ff, 0 0 50px #0057ff, 0 0 60px #0066ff, 0 0 70px #003cff, 0 0 90px #003cff;
  opacity:0;
  }
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
  height: 100em;
  
}
@media only screen and (max-device-width: 825px) and (orientation: landscape){
  .light-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 30em;
  }
}
@media (max-height: 500px){
  .light-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 30em;
    }
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

