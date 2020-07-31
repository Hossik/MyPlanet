import React, { Component } from 'react'


export class Test extends Component  {
    

        
          
    render() {
      
        return (
        <React.Fragment>
            {this.props.isOpen ? <div className="body">
              <div className="signclose">
        <span className="fast-flickerclose">C</span>lOS<span className="flickerclose">E</span><span>-</span>Here
              </div>
            </div >
            :
            <div className="body">
              <div className="sign">
        <span className="fast-flicker">C</span>lic<span className="flicker">K</span><span>-</span>Here
              </div>
            </div >}
        </React.Fragment>
        )
    }
}

export default Test
