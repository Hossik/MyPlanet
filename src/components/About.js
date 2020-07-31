import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './text.scss';

export const AboutMe = () => {
  
  
  return (



    <MDBTable borderless style={{marginTop:"5vh", width: "80vw", height:"50vh"}}>
      <MDBTableHead style={{color:"red"}}>
        <tr>
          
          <th style={{ fontSize:"5vmin"}}>What i Do</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody style={{color:"white"}}>
        <tr >
          
          <td style={{ fontSize:"3vmin"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>User interface (UI) Design:</span> I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.Let's make something special.</td>
          
          
        </tr>
        <tr>
          
          <td style={{ fontSize:"3vmin"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>User experience (UX) Design:</span> his is the important thing to ensure the outcomes (websites) usable, consistent and desirable for the Users.</td>
         
          
        </tr>
        <tr>
          
          <td style={{ fontSize:"3vmin"}}><span style={{color:"#4444dd", fontWeight:"bold"}}>Front-end Developing :</span>
        I like to code things from scratch, and enjoy bringing ideas to life in the browser.</td>
          
         
        </tr>
      </MDBTableBody>
    </MDBTable>
      
    )
 
}
export default AboutMe;