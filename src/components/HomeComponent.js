import React from 'react';
import TypistText from './Type'

export const Home = (props) => {    
  return (
    <div>
    <div className="freelancer">
    <img src={'https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/Freelancer.png'} />
    </div>
    <TypistText orientation={props.orientation} height={props.height}  width={props.width} collapseID={props.collapseID}/>
  </div>
    )
}
export default Home;