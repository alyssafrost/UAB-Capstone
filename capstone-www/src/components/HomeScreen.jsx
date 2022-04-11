import React from "react";
import { Card } from "antd";

// import Floorplan from "./Floorplan"; // include the floorplan
// import Thermostat from "./Thermostat"; // include the thermostat

const HomeScreen = () => {
  return <img src={require("../imgs/FloorPlan.jpg")} alt=""></img>;
};

const TemperatureBox = () => {
  return <Card title="Temperature Control">test</Card>;
};

// // not sure if this is an indexable thing to div page?
// {
//   array.map((TemperatureBox) => <li>{TemperatureBox.id}</li>);
// }

export { HomeScreen, TemperatureBox };
