import { Layout, Space } from "antd";
import { Switch } from "antd";
import { Card } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

// Set a default type to use for onchangeh

const ApplianceToggle = () => {
  return (
    <Switch defaultChecked onChange={onChange} size="Large">
      <br />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </Switch>
  );
};

const ControlScreen = () => {
  return (
    <Layout>
      {" "}
      {"Switch Toggles"}
      <Card title="Kitchen Appliances" align="horizontal">
        <Space>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Main Bedroom Appliances" align="horizontal">
        <Space>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Main Bathroom" align="horizontal">
        <Space>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Living Room Appliances" align="horizontal">
        <Space>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Kids Bedroom Appliances" align="horizontal">
        <Space>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Kids Bathroom" align="horizontal">
        <Space>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
    </Layout>
  );
};

export { ControlScreen };
export { ApplianceToggle };
