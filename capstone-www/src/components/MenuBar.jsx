import React from "react";
import { Tabs } from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// Local
import { HomeScreen } from "./HomeScreen";
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
          <HomeOutlined />
          Floorplan
        </span>
      }
      key="1"
    >
      {" "}
      <HomeScreen />
    </TabPane>
    <TabPane
      tab={
        <span>
          <LineChartOutlined />
          Usage History
        </span>
      }
      key="2"
    >
      <AnalysisScreen />
    </TabPane>
    {/* <TabPane
      tab={
        <span>
          <SettingOutlined />
          Dev Tools
        </span>
      }
      key="3"
    >
      {" "}
      <ControlScreen />
    </TabPane> */}
  </Tabs>
);

export { MenuBar };
