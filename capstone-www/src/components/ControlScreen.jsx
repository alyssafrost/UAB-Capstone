import { Layout, Space } from "antd";
import { Switch } from "antd";
import { Card } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

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
          <h> Overhead light </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Dish Washer </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Stove </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Oven </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Refridgerator </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Microwave </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Living Room Appliances" align="horizontal">
        <Space>
          <h> Overhead light </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Lamp 1 </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Lamp 2 </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Television </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Main Bedroom Appliances" align="horizontal">
        <Space>
          <h> Overhead light </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Lamp 1 </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Lamp 2 </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Television </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Kids Bedroom Appliances" align="horizontal">
        <Space>
          <h> Overhead light </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Lamp 1 </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Lamp 2 </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Main Bathroom" align="horizontal">
        <Space>
          <h> Overhead light </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Exhaust Fan </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Kids Bathroom" align="horizontal">
        <Space>
          <h> Overhead light </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Exhaust Fan </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
      <Card title="Wash Room" align="horizontal">
        <Space>
          <h> Washing Machine </h>
          <ApplianceToggle></ApplianceToggle>
          <h> Dryer </h>
          <ApplianceToggle></ApplianceToggle>
        </Space>
      </Card>
    </Layout>
  );
};

export { ControlScreen };
export { ApplianceToggle };
