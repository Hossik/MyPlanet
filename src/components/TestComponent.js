import React, { Component } from 'react'


export class Test extends Component  {
    

        
          
    render() {
      
        return (
        <React.Fragment>
            {this.props.isOpen ? 
              <div className="signclose" style={{ letterSpacing: '2px'}}>
                <span className="fast-flicker">C</span>
        <span >l</span><span className="fast-flickerclose">OSE</span><span>-</span>Here
              </div>
            
            :
            
              <div className="sign" style={{ letterSpacing: '2px'}}>
        <span className="fast-flicker">C</span>lic<span className="flicker">K</span><span>-</span>Here
              </div>
            }
        </React.Fragment>
        )
    }
}

export default Test
