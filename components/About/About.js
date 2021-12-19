import React from "react";

function About(props, ref) {
  return (
    <section id={props.id} ref={ref} style={{ height: "100vh" }}>
      <p>About section</p>
    </section>
  );
}

export default React.forwardRef(About);
