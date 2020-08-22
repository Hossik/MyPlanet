import React from 'react';
import TypistText from './Type'

export const Home = (props) => {    
  return (
    <div>
      <div className="corner">
        <img className="cornimg" src={"https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/corr.png"} alt={"corner"}/>
      </div>
    <div >
    <svg width="100vw" height="650px" viewBox={"1000 0 1000 1400"} >
      <g transform={(props.width<852 && props.orientation !== 0 && props.orientation !== undefined)?"translate(-700,120)":props.width<592?"translate(-650,200)":props.width<635?"translate(-600,120)":props.width<852?"translate(-600,180)":props.width<1023?"translate(-500,60)":props.width<1170?"translate(-300,100)":props.width<1350?"translate(-300,70)":props.width<1578?"translate(-100,0)":"translate(0,0)"}>
      
      <image
          alt="moon"
          id="id2"
          xlinkHref="https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/moon.png"
          x={props.width<550?"2000":props.width<960?"2400":"2300"}
          y={props.width<635?"500":props.width<852?"500":props.width<1170?"260":"80"}
          width="30vw"
          height="20vw"
          />
      <image
          alt="freelancer"
          id="id2"
          xlinkHref="https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/freelancer.png"
          x="1900"
          y={props.width<380?"450":props.width<870?"550":"500"}
          width={props.width<380?"150vw":props.width<635?"120vw":props.width<1023?"100vw":props.width<1350?"80vw":"60vw"}
          height={props.width<380?"100vw":props.width<712?"80vw":props.width<1023?"65vw":"40vw"}
          />
          
    </g>
    </svg>
    </div>
    <TypistText orientation={props.orientation} height={props.height}  width={props.width} collapseID={props.collapseID}/>
  </div>
    )
}
export default Home;