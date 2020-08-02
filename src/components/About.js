import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './text.scss';

const AboutMe = (props) => {


  return (

    <React.Fragment >


      {(props.width <1596 || props.height <750 ) ? 
      <MDBTable  scrollY  maxHeight="70vh" borderless style={{ marginTop: props.width<768? "50px" :""  , width: "80vw"}}> 
      <MDBTableHead  style={{color:"red",fontFamily :"Metal" }}>
       
          
          <th style={{fontSize: (props.width <1596 || props.height <750 )? "0.75em" : "1em" }}>What i Do</th>
        
      </MDBTableHead>
      <MDBTableBody style={{color:"white"}}>
       
          <tr>
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>User interface (UI) Design:</span><br/> I have serious passion for UI effects, animations and make everything the user needs readily accessible.Let's make something special.</td>
          </tr>
          
          <tr>
          
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>User experience (UX) Design:</span><br/> This is the important thing to ensure the outcomes (websites) usable, consistent and desirable for the Users.I like creating intuitive, dynamic user experiences.</td>
          </tr>
          
          <tr>
          
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Front-end Development :</span><br/>
        I like to code things from scratch, and enjoy bringing ideas to life in the browser.To solve problems, I use React and with the help of Redux in some cases. </td>
          
        </tr>
        
      </MDBTableBody>
      <MDBTableHead  style={{color:"red",fontFamily :"Metal" }}>
       
          
      <th style={{fontSize: (props.width <1596 || props.height <750 )? "0.75em" : "1em"  }}>How i Do</th>
        
      </MDBTableHead>
      <MDBTableBody style={{color:"white"}}>
       
          <tr>
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Languages :</span> <br/> <i class="fab fa-html5"></i>HTML  &nbsp; <i class="fab fa-css3-alt"></i> CSS  &nbsp;  <i class="fab fa-sass"></i> Sass &nbsp; <i class="fab fa-js"></i> JavaScript &nbsp;</td>
          </tr>
          
          
          
          <tr>
          
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Frameworks and Libraries : </span> <br/><i class="fab fa-bootstrap"></i>    BootStrap   &nbsp; <i class="fab fa-react"></i>  React + Redux </td>
          
        </tr>
        
      </MDBTableBody>
    </MDBTable>
    
  :

  
       
          
   
         <div>
        <div style={{color:"red",fontFamily :"Metal" ,fontSize:"1em",textAlign:"center",alignItems:"center"}}>What i Do</div>
            
     <MDBTable  borderless  style={{ marginTop:"1vh", width: "80vw"}}> 
      <MDBTableBody style={{color:"white"}}>
       
          <tr>
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>User interface (UI) Design:</span> <br/>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.Let's make something special.</td>
          
          
        
      
          
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>User experience (UX) Design:</span> <br/>This is the important thing to ensure the outcomes (websites) usable, consistent and desirable for the Users.</td>
         
       
          
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Front-end Development :</span><br/>
          I like to code things from scratch, and enjoy bringing ideas to life in the browser.To solve problems, I use React and with the help of Redux in some cases. </td>
        </tr>
         
      
      </MDBTableBody>
    </MDBTable>
    <div style={{color:"red",fontFamily :"Metal" ,fontSize:"1em",textAlign:"center",alignItems:"center"}}>How i Do</div>
            
     <MDBTable  borderless  style={{ marginTop:"1vh", width: "80vw"}}> 
      <MDBTableBody style={{color:"white"}}>
       
          <tr>
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Languages :</span> <br/> <i class="fab fa-html5"></i>HTML  &nbsp; <i class="fab fa-css3-alt"></i> CSS  &nbsp;  <i class="fab fa-sass"></i> Sass &nbsp; <i class="fab fa-js"></i> JavaScript &nbsp;</td>
       
          <td style={{ fontSize:"0.5em"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Frameworks and Libraries : </span> <br/><i class="fab fa-bootstrap"></i>    BootStrap   &nbsp; <i class="fab fa-react"></i>  React + Redux </td>
        </tr>
         
      
      </MDBTableBody>
    </MDBTable>
    </div>
  }
    </React.Fragment >

    )
  
}
export default AboutMe;