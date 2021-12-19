import React from "react";
function Project(props, ref) {
  return (
    <section id={props.id} ref={ref} style={{ height: "100vh" }}>
      <p>Project section</p>
    </section>
  );
}

export default React.forwardRef(Project);
