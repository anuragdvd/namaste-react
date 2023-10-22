import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS object => HTLMELement(render)
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World"
);

console.log("This is createRoot heading " + JSON.stringify(heading));
// root.render(heading);

/* 

<div id="parent">
    <div id="child">
        <h1> Hello world </h1>
    </div>
</div>

*/
/* 

<div id="parent">
    <div id="child">
        <h1> Hello world </h1>
        <h2> Sibling </h2>
    </div>
</div>

*/

// const root2 = ReactDOM.createRoot(document.getElementById("root2"))

// root2.render(React.createElement("div", { id :"parent" },
//     React.createElement("div",{id:"child"},
//        [ React.createElement("h1",{},"Testing new thing"),
//             React.createElement("h2", {}, "This is working")])));

console.log("hello");

const jsxHeading = <h1 className="heading">Welcome to JSX!</h1>;

// If in mutliple lines then you need to add ()
// React Element
const jsxHeading2 = (
  <h1 className="heading" tabIndex="5">
    Welcome to JSX!
  </h1>
);

// JSX (transpiled before it reaches JS) - transalation is done by Babel
// JSX => React.createElement => ReactElement-JS object => HTMLElement(render)
console.log(jsxHeading);

// root.render(React.createElement("div", { id :"parent" },
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{},"Testing new thing"))));

// React Functional Component
// A function that returns JSX

const HeadingComponent2 = () => {
  return <h1 className="header">Better Arrow Functions</h1>;
};

const Title = function () {
  return <h1>Blowing react</h1>;
};

// React component
const title = <h1> This is a React Component compisition </h1>;

// React Component compostion
const title2 = <h1>This is React Component wow {title}</h1>;

const number = 10000;
// Very simple to compose components -> <Title /> or <Title></Title> or even {Title()}
// You can also write JS inside these functions by using {}
// You can also compose it with React component

const hack =
  "function abc () { <img onerror='alert(\"Hacked!\");' src='invalid-image' />}; abc();";

// abc = (x) => {
//   debugger;
//   return x * 100;
// };

// window.payload = 1023;

const abc = (function () {
  console.log("what is wrong");
})();

const HeadingComponent = () => (
  <div id="container">
    {/* {hack} */}
    {/* <div
      dangerouslySetInnerHTML={{
        __html: hack,
      }}
    ></div> */}
    {/* {(function () {
      console.log("what is wrong");
    })()} */}
    {abc}
    <Title></Title>
    <Title />

    <h2> React JSX is pure magic {number - 23 + 233} </h2>
    <h3>{console.log("Will console log work")}</h3>
    <h1 className="heading">Welcome to React</h1>
    {title2}
    {Title()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const xyz = () => {
  const [v, hello] = React.useState(0);
  return React.createElement("h1", {}, "internal");
};

const Testing = () => {
  return React.createElement("h1", {}, [
    "Welcome to madness",
    xyz(),
    // React.createElement(xyz()),
  ]);
};

// Syntax to render functional component
console.log("about to render");
// root.render(<HeadingComponent />);

root.render(<Testing />);

// const data = api.getData();

// What if the api is malicious ? As we are executing the JS code that is present in JSX
// JSX will take care of these data
// IT will sanitize the data and then pass it
// So JSX will provide XSS
