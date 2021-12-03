import React from "react";
import { render } from "react-dom";
import { Button } from "carbon-components-react";
import { Myfile } from "./Myfile";

const App = () => (
  <div>
    <Button>Hello world</Button>
    <Myfile />
  </div>
);

render(<App />, document.getElementById("root"));
