import React, { useState } from "react";
import { Button } from "antd";
import { Space } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "../thermostat.css";

export const Thermostat = () => {
  const [tempValue, setTempValue] = useState(76);

  const increaseTemp = () => {
    const newTemp = tempValue + 1;
    setTempValue(newTemp);
  };

  const decreaseTemp = () => {
    const newTemp = tempValue - 1;
    setTempValue(newTemp);
  };

  return (
    <Card title="Temperature Control">
      <div className="button-container">
        <Button
          type="primary"
          ghost
          size="large"
          onClick={() => increaseTemp()}
        >
          <UpOutlined style={{ fontSize: "34px" }} align="left" />
        </Button>
        <Space></Space>
        <Button
          type="primary"
          ghost
          size="large"
          onClick={() => decreaseTemp()}
        >
          <DownOutlined style={{ fontSize: "34px" }} align="right" />
        </Button>
        <div className="app-container">
          <div className="temp-display-container">
            <div className="temp-display">{tempValue}°</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
