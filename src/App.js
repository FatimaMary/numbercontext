import React from "react";
// import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();


function App() {
  
  return (
    <NumberContext.Provider value={24}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

// ReactDOM.render(<App />, document.querySelector("#root"));
export default App