import React from "react";
import { Tabs } from "antd";
import {
  HomeOutlined, // Home screen icon
  LineChartOutlined, // Graph screen Icon
  SlidersOutlined, // Control screen Icon
} from "@ant-design/icons";
import { Space } from "antd";
import { Divider } from "antd";

// Local
import { HomeScreen, TemperatureBox } from "./HomeScreen";
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
        <div>
          <HomeOutlined /> Home Screen
        </div>
      }
      key="1"
    >
      {" "}
      <HomeScreen />
      <gridLayout>
        <Divider orientation="vertical">
          {" "}
          <TemperatureBox></TemperatureBox>
        </Divider>{" "}
      </gridLayout>
    </TabPane>
    <TabPane
      tab={
        <div>
          <LineChartOutlined /> Usage History
        </div>
      }
      key="2"
    >
      <AnalysisScreen />
    </TabPane>
    <TabPane
      tab={
        <div>
          <SlidersOutlined /> Control Panel
        </div>
      }
      key="3"
    >
      {" "}
      <ControlScreen />
    </TabPane>
  </Tabs>
);

export { MenuBar };
