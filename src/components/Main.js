import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { MDBBtn,MDBCollapse} from 'mdbreact';
import { Card} from 'reactstrap';
import { withRouter} from 'react-router-dom';
import { Contacts } from './ContactComponent';
import { Home } from './HomeComponent';
import { Tools } from './ToolsComponent'
import { TransitionGroup, CSSTransition }from 'react-transition-group';
import { Test } from './TestComponent';
import Header from './Header';
import AboutMe from './About';
class Main extends Component {
  constructor(props) {
    
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: false,
      highlightedHobby: false,
      tbn:false,
    };
  };
 
  listSwitch = () => {
    this.setState(state => ({
      highlightedHobby: !state.highlightedHobby
    }));
  };
  toggleCollapse = () => {
    this.setState(state => ({
      collapseID : !state.collapseID,
    
    }))
  }
  remove = () => {
    clearInterval(this.intervalID)
  }
  componentDidMount() {
        
            this.intervalID = setInterval(() => {
            this.setState(state =>({
                tbn : !state.tbn
            }));
            }, 8500);
            setInterval (this.remove, 10000);
            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions.bind(this));
            this.toggleCollapse = this.toggleCollapse.bind(this);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
          this.toggleCollapse = this.toggleCollapse.bind(this);
      }
  
      updateWindowDimensions() {
          this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

  render() {
   console.log("height" ,this.state.height)
  return (
      
  <React.Fragment className="container">
   

   
     
    {this.state.tbn ? <MDBBtn className= " btn  btn-circle btn-xl" color="elegant"
      onClick={this.toggleCollapse}>
      <i> <Test
      isOpen={this.state.collapseID}/></i>    
    </MDBBtn> : <div></div>}
    
    
    
    <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
        <Card  id="card"  >
          <Header id="head" width={this.state.width}/>
          <div >
          <TransitionGroup  >
            <CSSTransition  key={this.props.location.pathname} classNames="fade" timeout={{ enter: 300, exit: 300 }}>
            <section className="route-section">
          <Switch location={this.props.location}>
            
          <Route exact path="/home" render={(props) => <Home {...props} height={this.state.height} width={this.state.width} collapseID={this.state.collapseID}/>} />
            <Route exact path="/about" render={(props) => <AboutMe {...props} height={this.state.height} width={this.state.width} />} />
            <Route path="/tools" component={Tools} />
            <Route path="/contacts" component={Contacts} />
            <Redirect to="/home" />
          </Switch>
         
          </section>
          </CSSTransition>
          </TransitionGroup>
          </div>
          
        </Card>
        </MDBCollapse>
      
    
    
    

  </React.Fragment>
    )
  }
}

export default withRouter(Main);
