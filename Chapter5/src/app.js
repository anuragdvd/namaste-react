import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Body } from "./Components/Body";

const AppLayout = () => {
  const [v, setState] = React.useState(0);
  return (
    <div className="app">
      {console.log(Header())}
      {Header()}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// not using keys (not-acceptable) <<< index as key <<< unique key
