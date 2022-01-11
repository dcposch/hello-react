import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Cookie from "./components/Cookie";

function App() {
  const [n, setN] = useState(100);
  // const increment = useCallback(() => setN(n + 1), [n]);
  //   useEffect(() => {
  //     alert("hi");
  //   }, [n]);

  return (
    <div>
      <Cookie n={n} />
      <button onClick={() => setN(n + 1)}>click</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
