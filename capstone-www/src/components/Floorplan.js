import React from "react";
// import { Figure } from "react-boot-strap";
// import Figure from "react-bootstrap/Figure"; // non-jsx version?

// <Figure>
//   <Figure.Image
//     width={171}
//     height={180}
//     alt="171x180"
//     src="holder.js/171x180"
// </Figure>;

const Floorplan = () => {
  return <img src={require("../imgs/FloorPlan.jpg")} alt=""></img>;
};
export { Floorplan };
