import React from 'react'
import {Col,Button,Row} from 'reactstrap';
import { ExternalLink } from 'react-external-link';
export const Tools = () => {
return (
<div className="container   offset-lg-11 " style={{backgroundColor:"red" ,marginTop:"10vh" ,marginLeft:"24vw",height:"50vh"}}>
      
      
    <Row>
      <Col xs={4} sm={{ size: 'auto', offset: 1 }} >
        <div alt="img" className="img"  >
         <div className="textImg"> Website created during a React Course 
          <ExternalLink  href="https://hossik.github.io/confusion/" > <br/><Button id="visit" color="primary" >Visit Website &#62;</Button></ExternalLink></div> </div></Col>
          <Col sm={{ size: 'auto', offset: 1 }}  >
          <div alt="imgtwo" className="img" style={{marginRight:"200px"}}  >
         <div className="textImg"> Website created during a React Course 
          <ExternalLink  href="https://hossik.github.io/confusion/" > <br/><Button id="visit" color="primary" >Visit Website &#62;</Button></ExternalLink></div> </div>
      </Col>
     </Row>

      
     

</div>
)
}

export default Tools;