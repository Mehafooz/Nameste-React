 import React from "react"
import ReactDOM from "react-dom/client";

// import React from "_./node_modules/react";


const heading = React.createElement("h2",{id:"heading"},"Namaste React injected by react.."); //it will return the react ele
const Jsxheading = () => (<h1>Hi jsx react</h1> )//js engine dont unsdertsand iy ,but prcale is transpiled before it reaches the js engine,indirectly done by parcel using babel
// it is also sme react ele
//so it is transpiled to react ele
// so behind teh scene jsx is reactncreateele
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"children"},
React.createElement("h2",{id:"heading"},"Namaste React injected by react..")));
const root = ReactDOM.createRoot(document.getElementById("root"));
const ReactFuncComp = () =>(
    <div>
        <Jsxheading />
        <h1> react func comp</h1>
    </div>
)
root.render(<ReactFuncComp />)