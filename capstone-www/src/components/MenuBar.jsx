import React from "react";
import { Tabs } from "antd";
import {
  HomeOutlined, // Home screen icon
  LineChartOutlined, // Graph screen Icon
  SlidersOutlined, // Control screen Icon
} from "@ant-design/icons";
import { Space } from "antd";

// Local
import {
  HomeScreen,
  TemperatureBox,
  IntExtTemp,
  GeneralLighting,
} from "./HomeScreen";
import { AnalysisScreen } from "./AnalysisScreen";
import { ControlScreen } from "./ControlScreen";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const MenuBar = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={callback}
    centered
    size="large"
    style={{ marginBottom: 16 }}
  >
    <TabPane
      tab={
        <span>
          <HomeOutlined style={{ fontSize: "30px" }} />
          <h style={{ fontSize: "20px" }}> Home Screen </h>
        </span>
      }
      key="1"
    >
      {" "}
      <Space direction="horizontal">
        <HomeScreen />
        <Space direction="vertical">
          <TemperatureBox />
          <IntExtTemp />
          <GeneralLighting />
        </Space>
      </Space>
    </TabPane>
    <TabPane
      tab={
        <span>
          <LineChartOutlined style={{ fontSize: "30px" }} />{" "}
          <h style={{ fontSize: "20px" }}> Usage History </h>
        </span>
      }
      key="2"
    >
      <AnalysisScreen />
    </TabPane>
    <TabPane
      tab={
        <span>
          <SlidersOutlined style={{ fontSize: "30px" }} />{" "}
          <h style={{ fontSize: "20px" }}> Control Panel </h>
        </span>
      }
      key="3"
    >
      {" "}
      <ControlScreen />
    </TabPane>
  </Tabs>
);

export { MenuBar };
