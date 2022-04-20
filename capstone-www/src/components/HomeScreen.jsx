// React, antd
import React from "react";
import { Card } from "antd";
import { Space } from "antd";

//Local
import "../antd.css";
import { ApplianceToggle } from "./ControlScreen";
import { Thermostat } from "./Thermostat";

// Local exports
export const HomeScreen = () => {
  return <img src={require("../imgs/FloorPlan.jpg")} alt=""></img>;
};

// create onClick for temperature state
export const TemperatureBox = () => {
  return <Thermostat></Thermostat>;
};

export const IntExtTemp = () => {
  return (
    <Card title="Real-time Temperature">
      <Space direction="vertical">
        <p style={{ fontSize: "23px" }} align="center">
          Internal: <p style={{ fontSize: "27px" }}> 76° </p>
        </p>
        <p style={{ fontSize: "23px" }} align="center">
          External: <p style={{ fontSize: "27px" }}> 85° </p>
        </p>
      </Space>
    </Card>
  );
};

export const GeneralLighting = () => {
  return (
    <Card title="Light Control" align="left">
      <Space direction="vertical" align="left">
        <h> Overhead Living Room Light </h>
        <ApplianceToggle></ApplianceToggle>
        <h> Overhead Kitchen Light </h>
        <ApplianceToggle></ApplianceToggle>
      </Space>
    </Card>
  );
};
