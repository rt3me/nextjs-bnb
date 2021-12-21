import React from "react";

export default function Layout(props) {
  return (
    <React.Fragment>
      <main>{props.content}</main>
    </React.Fragment>
  );
}