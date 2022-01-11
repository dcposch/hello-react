import * as React from "react";

export default function Cookie(props: { n: number }) {
  const n = props.n;
  return (
    <h1>
      🍪 {n} {pluralize("cookie", n)} 🍪
    </h1>
  );
}

function pluralize(noun: string, n: number) {
  if (n == 1) {
    return noun;
  }
  return noun + "s";
}
