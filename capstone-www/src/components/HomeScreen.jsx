// React, antd
import React from "react";
import { Card } from "antd";
import { Space } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";

//Local
import "../antd.css";
import { ApplianceToggle } from "./ControlScreen";

// Local exports
export const HomeScreen = () => {
  return <img src={require("../imgs/FloorPlan.jpg")} alt=""></img>;
};

// create onClick for temperature state
export const TemperatureBox = () => {
  return (
    <Card title="Temperature Control">
      <span className="site-button-ghost-wrapper-up" align="left">
        <Button type="primary" ghost size="large">
          <UpOutlined style={{ fontSize: "34px" }} align="left" />
        </Button>
      </span>
      <Space>
        <Space></Space>
        <span className="site-button-ghost-wrapper-down" align="right">
          <Button type="primary" ghost size="large">
            <DownOutlined style={{ fontSize: "34px" }} align="right" />
          </Button>
        </span>
      </Space>
      <p style={{ fontSize: "34px" }}> 76° </p>
    </Card>
  );
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
