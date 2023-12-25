 import React from "react"
import ReactDOM from "react-dom/client";

// import React from "_./node_modules/react";


const heading = React.createElement("h2",{id:"heading"},"Namaste React injected by react..");

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"children"},
React.createElement("h2",{id:"heading"},"Namaste React injected by react..")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)