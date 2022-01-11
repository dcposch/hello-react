import * as React from "react";

export default function Cookie(props: { n: number }) {
  const n = props.n;

  return (
    <h1>
      🍪 {n} {pluralize("cookie", n)} 🍪
    </h1>
  );
}
