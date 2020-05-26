// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.this sets the original state of all the values in the obect
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this is setting a new state where the value of the key is an event listener
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3.this is destructuring user input so you dont have to keep typing out this.state.userInput
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. this is asigning a variable to this.robot to pass through  props to the child component*/}
          onChange={ this.robot }
          {/* 5.his is assigning userInput a variable to pass through  props to the child component */}
          value={ userInput }
        />

        <div>
          {/* 6.this brings all the information from the child compoent to the parent */}
          <GoodRobot
            {/* 7. this is assigning a variable to user input so the component has access to user input through props*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.this is an h3 tag whic is displaying text on the web page
      <div>
        <h3>Good Robot</h3>
        {/* 9. */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. this is what sends this component to the parent component
export default GoodRobot
