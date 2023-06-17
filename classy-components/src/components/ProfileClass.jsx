import React from "react";
class Profile extends React.Component{

  //to managing state using constructor
  //constructor is a place that is use for initialization
  constructor(props){
    super(props)
    //create State and state is object
    this.state={
      //initial value
      count:0,
    }
  }

//you cant create a class base component using render method
  render(){
    return(
      <>
        <h1> this is a Profile class component</h1>
        <h4>Count:{this.state.count}</h4>
        <button
        onClick={()=>{
          this.setState({
            count:1
          })   
        }}
        >incriment</button>
      </>
    )
  }
}
export default Profile



//class base render technique

/*
* Parent- Constructor
* Parent- render
* Child- Constructor First Child
* Child- render First Child
* Child- Constructor Second Child
* Child- render Second Child
* Child- componentDidMount First Child
* Child- componentDidMount Second Child
* Parent- componentDidMount 
*/

/*
* React render in two Phase
* "Render Phase"- Pure and has no side effect. May be paused aborted
* restarted by React.
* "Commit Phase"- Can Work with DOM, run side effects, Schedule updates 
*/
