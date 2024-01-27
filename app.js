import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "header" },
  "Hello world with ReactDom"
); // {} --> allow to give attributes to tags/id
const root = ReactDOM.createRoot(document.getElementById("root")); // to render over there (letting the react to know my elements are render)
root.render(heading);
//React is a piece javaScript codes which can use at anywhere your app
//  like where you create root it will work there only.
