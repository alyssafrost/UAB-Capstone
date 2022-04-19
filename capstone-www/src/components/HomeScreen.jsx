// React, antd
import React from "react";
import { Card } from "antd";
import { Space } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { Button } from "antd";

import "../antd.css";

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
    <Card title="Light Control">
      <Space direction="vertical" align="left">
        <Switch></Switch>
        <Switch></Switch>
        <Switch></Switch>
      </Space>
    </Card>
  );
};
