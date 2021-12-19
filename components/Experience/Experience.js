import React from "react";
function Experience(props, ref) {
  return (
    <section id={props.id} ref={ref} style={{ height: "100vh" }}>
      <p>Experience section</p>
    </section>
  );
}

export default React.forwardRef(Experience);
