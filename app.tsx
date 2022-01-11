import * as React from "react";
import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Cookie from "./components/Cookie";

function App() {
  const [n, setN] = useState(0);
  const increment = useCallback(() => setN((n) => n + 1), []);

  return (
    <div>
      <Cookie n={n} />
      <button onClick={increment}>click</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
