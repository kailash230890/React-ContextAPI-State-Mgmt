import React, { Component } from "react";
import "./App.css";
const ContextApi = React.createContext();

class MyProvider extends Component {
  state = {
    age: 22,
    name: " Coder Singh "
  };
  render() {
    return (
      <ContextApi.Provider
        value={{
          state: this.state,
          addAge: () => {
            this.setState({ age: this.state.age + 1 });
          }
        }}
      >
        {this.props.children}
      </ContextApi.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello ContextAPI</h1>
        <MyProvider>
          <Section />
        </MyProvider>
      </div>
    );
  }
}

const Section = () => {
  return (
    <div>
      <AgeText />
      <AgeButton />
    </div>
  );
};

class AgeText extends Component {
  render() {
    return (
      <div>
        <ContextApi.Consumer>
          {context => (
            <p>
              Name : {context.state.name} <br/>
              Age : {context.state.age}
            </p>
          )}
        </ContextApi.Consumer>
      </div>
    );
  }
}

class AgeButton extends Component {
  render() {
    return (
      <div>
        <ContextApi.Consumer>
          {context => <button onClick={context.addAge}>Add</button>}
        </ContextApi.Consumer>
      </div>
    );
  }
}

export default App;
