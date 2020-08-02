import React from 'react'
import Image from 'react-bootstrap/Image'
import {Col, CardImg, CardImgOverlay,
  CardTitle ,CardBody} from 'reactstrap';
import { ExternalLink } from 'react-external-link';
export const Tools = () => {
return (
<div className="container row  offset-lg-11 " style={{background:"blue",marginTop:"10vh" ,height:"50vh"}}>
      
      
      <ExternalLink  href="https://hossik.github.io/confusion/" >
      <Col xs={4} md={2} md={{ offset: 6 }} >
 
        <div id="imgcover">
        <img className="img" alt="img" src="https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/confusion.png" /></div>
        <CardImgOverlay>
          <CardTitle>some</CardTitle>
        </CardImgOverlay>
        </Col>

      </ExternalLink>
     

</div>
)
}

export default Tools;