import React from 'react'
import {Col,Button} from 'reactstrap';
import { ExternalLink } from 'react-external-link';
export const Tools = () => {
return (
<div>
  
  <div className="container-fluid  " id="projects" >  <div className="corner">
        <img className="cornimg" src={"https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/corr.png"} alt={"corner"}/>
      </div>
    <div className="row">
      <Col xs={{size: '10'}} lg={{ size: 3}} >
        <div alt="img" className="img works0"  >
         <div className="textImg"> Website created during by React Course 
          <ExternalLink  href="https://hossik.github.io/confusion/">
             <br/><Button  color="primary" >Visit Website &#62;
          </Button>
          </ExternalLink>
          </div> 
        </div>
      </Col>
      <Col  xs={{size: '10'}} lg={{ size: 3}}  >
        <div alt="imgtwo" className="imgtwo works"   >
          <div className="textImgtwo"><ExternalLink  href="https://github.com/Hossik/myplanet" > 
          <Button  color="warning" >Go to codes &#62;
          </Button>
          </ExternalLink>
          <br/>
           Here are codes of current React Website 
          </div>
        </div>
      </Col>
      <Col  xs={{size: '10'}} lg={{ size: 3}}  >
        <div alt="imgtree" className="works2  imgtree"   >
          <div className="textImgtree ">
          
           Website created for Gemini Truffle Company 
          <br/>
          <ExternalLink  href="https://hossik.github.io/truffle" > 
          <Button color="secondary" >Go to Website &#62;
          </Button>
          </ExternalLink></div>
        </div>
      </Col>
     </div>
       <div className="seemore ">SEE MORE IN
      <ExternalLink style={{textDecoration: 'none'}} className="morelink"  href="https://www.linkedin.com/in/hossik"><span>&nbsp;LINKEDIN </span></ExternalLink></div></div>
  </div>
)
}

export default Tools;