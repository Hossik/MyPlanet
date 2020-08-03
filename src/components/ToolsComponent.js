import React from 'react'
import {Col,Button} from 'reactstrap';
import { ExternalLink } from 'react-external-link';
export const Tools = () => {
return (
<div className="container row  offset-lg-11 " style={{marginTop:"10vh" ,height:"50vh"}}>
      
      
      
      <Col xs={4} md={{ span: 2, offset: 6 }} >
        <div alt="img" className="img"  >
         <div className="textImg"> Website created during a React Course 
          <ExternalLink  href="https://hossik.github.io/confusion/" > <Button id="visit" color="primary" >Visit Website &#62;</Button></ExternalLink></div> </div>
      </Col>

      
     

</div>
)
}

export default Tools;