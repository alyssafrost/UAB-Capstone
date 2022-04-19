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
    style={{ marginBottom: 32 }}
  >
    <TabPane
      tab={
        <span>
          <HomeOutlined /> Home Screen
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
          <LineChartOutlined /> Usage History
        </span>
      }
      key="2"
    >
      <AnalysisScreen />
    </TabPane>
    <TabPane
      tab={
        <span>
          <SlidersOutlined /> Control Panel
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
