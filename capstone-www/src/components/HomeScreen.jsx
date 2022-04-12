import React from "react";
import { Card } from "antd";
import { Grid } from "antd";
import { Row, Col } from "antd";

// import Floorplan from "./Floorplan"; // include the floorplan
// import Thermostat from "./Thermostat"; // include the thermostat

// Probably remove Grid, contextualize to just rely on divisor placement.
const gridLayout = () => {
  return (
    <Row>
      <Col span={24}> </Col>
      <Col span={12}>col-12</Col>
      <Col span={8}>col-8</Col>
    </Row>
  );
};

const HomeScreen = () => {
  return <img src={require("../imgs/FloorPlan.jpg")} alt=""></img>;
};

const TemperatureBox = () => {
  return <Card title="Temperature Control"></Card>;
};

const intExtTemp = () => {
  return <Card title="Real Time temperature">test</Card>;
};

const generalLighting = () => {
  return <Card title="Light Control">test</Card>;
};

export {
  gridLayout,
  HomeScreen,
  TemperatureBox,
  // nextScreenToggle,
  intExtTemp,
  generalLighting,
};
