import React from "react";
import { Card } from "antd";
import { Space } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

export const HomeScreen = () => {
  return <img src={require("../imgs/FloorPlan.jpg")} alt=""></img>;
};

// const tabList = [ {
//   key: 'tab1',
//   tab: 'tab1',
// },

// {
//   key: 'tab2',
//   tab: 'tab2',
// }

//put these in ghost buttons
export const TemperatureBox = () => {
  return (
    <Card title="Temperature Control">
      <UpOutlined style={{ fontSize: "44px" }} />
      <DownOutlined style={{ fontSize: "44px" }} />
      <p style={{ fontSize: "34px" }}>76°</p>
    </Card>
  );
};

export const IntExtTemp = () => {
  return (
    <Card title="Real-time Temperature">
      {/* <h align="top"> YES </h> */}
      <Space direction="vertical">
        <p style={{ fontSize: "20px" }} align="center">
          Internal: <p style={{ fontSize: "25px" }}> 76° </p>
        </p>
        <p style={{ fontSize: "20px" }} align="center">
          External: <p style={{ fontSize: "25px" }}> 85° </p>
        </p>
      </Space>
    </Card>
  );
};

export const GeneralLighting = () => {
  return (
    <Card title="Light Control">
      <p>Test</p>
    </Card>
  );
};
