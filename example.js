import React from "react";
import ReactDOM from "react-dom";
import Router from "react-wayfarer";

const PageOne = () => (
  <h2>
    Page 1 <a href="/fooper">go to</a>
  </h2>
);
const PageTwo = props => <h2>Page 2 has the name {props.params.name}</h2>;

function App() {
  return (
    <Router>
      <PageOne path="/" />
      <PageTwo path="/:name" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
