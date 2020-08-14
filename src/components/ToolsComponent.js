import React from 'react'
import {Col,Button} from 'reactstrap';
import { ExternalLink } from 'react-external-link';
export const Tools = () => {
return (
  <div className="container  " id="projects" >  
    <div className="row">
      <Col xs={{size: '10'}} lg={{ size: 4}} >
        <div alt="img" className="img"  >
         <div className="textImg"> Website created during by React Course 
          <ExternalLink  href="https://hossik.github.io/confusion/">
             <br/><Button  color="primary" >Visit Website &#62;
          </Button>
          </ExternalLink>
          </div> 
        </div>
      </Col>
      <Col  xs={{size: '10'}} lg={{ size: 4}}  >
        <div alt="imgtwo" className="imgtwo"   >
          <div className="textImgtwo"><ExternalLink  href="https://github.com/Hossik/myplanet" > 
          <Button  color="warning" >Go to codes &#62;
          </Button>
          </ExternalLink>
          <br/>
           Here are codes of current React Website 
          </div>
        </div>
      </Col>
      <Col  xs={{size: '10'}} lg={{ size: 4}}  >
        <div alt="imgtree" className="imgtree"   >
          <div className="textImgtree">
          
           Website created for Gemini Truffle Company 
          <br/>
          <ExternalLink  href="https://hossik.github.io/truffle" > 
          <Button color="secondary" >Go to Website &#62;
          </Button>
          </ExternalLink></div>
        </div>
      </Col>
     </div>
  </div>
)
}

export default Tools;