import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{
    id:"heading",
    xyz:"abc"
},"Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading)
root.render(heading);


/* 

<div id="parent">
    <div id="child">
        <h1> Hello world </h1>
    </div>
</div>

*/

root.render(React.createElement("div", { id :"parent" },
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"Testing new thing"))));

/* 

<div id="parent">
    <div id="child">
        <h1> Hello world </h1>
        <h2> Sibling </h2>
    </div>
</div>

*/

const root2 = ReactDOM.createRoot(document.getElementById("root2"))

root2.render(React.createElement("div", { id :"parent" },
    React.createElement("div",{id:"child"},
       [ React.createElement("h1",{},"Testing new thing"), 
            React.createElement("h2", {}, "This is working")])));
