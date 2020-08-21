import React from 'react';
import TypistText from './Type'

export const Home = (props) => {    
  return (
    <div>
    <div >
    <svg width="100vw" height="70vh" viewBox={"1000 0 1000 1400"} >
      <g>
      <image
          className="insta"
          alt="globe"
          id="id2"
          xlinkHref="https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/freelancer.svg"
          x="1900"
          y="500"
          width="60vw"
          height="40vw"
          />
    </g>
    </svg>
    </div>
    <TypistText orientation={props.orientation} height={props.height}  width={props.width} collapseID={props.collapseID}/>
  </div>
    )
}
export default Home;