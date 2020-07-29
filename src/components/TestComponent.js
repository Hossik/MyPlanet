import React, { Component } from 'react'

const texts = ["Click", "or", "Die"]
const secondtexts = ["Click", "to", "Close"]
export class Test extends Component  {
    state = {
        textIndex: 0
        };

        componentDidMount() {
          
            this.intervalID = setInterval(() => {
              this.setState({
                textIndex: this.state.textIndex + 1,
              });
            }, 2000);
            
          
            
          }
          
    render() {
      
        return (
        <React.Fragment>
            <div className="body">
              <div class="sign">
        <span class="fast-flicker">C</span>lic<span class="flicker">K</span><span>-</span>Here
              </div>
            </div >
        </React.Fragment>
        )
    }
}

export default Test
