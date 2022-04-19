import { Layout, Space } from "antd";
import { Switch } from "antd";
import { Row } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

// Set a default type to use for onchangeh

const ApplianceToggle = () => {
  return (
    <Switch defaultChecked onChange={onChange} size="Large">
      <br />
      <Switch defaultChecked />
    </Switch>
  );
};

// fix tiny later // use Space to define the sizes between switches, or Grid, or Divider
const ControlScreen = () => {
  return (
    <Layout>
      <Sider>
        <ApplianceToggle>"1"</ApplianceToggle>
        <Space>
          <ApplianceToggle>"2"</ApplianceToggle>
        </Space>
        <Space>
          <ApplianceToggle>{"Test"}</ApplianceToggle>
          <Space>
            <ApplianceToggle>{"Test"}</ApplianceToggle>
          </Space>
        </Space>
      </Sider>
      {"Switch Toggles"}
      <Header>{"Header"}</Header>
      <Content>
        <ApplianceToggle>"1"</ApplianceToggle>
        <Space>
          <ApplianceToggle>"2"</ApplianceToggle>
        </Space>
        <Space>
          <ApplianceToggle>{"Test"}</ApplianceToggle>
          <Space>
            <ApplianceToggle>{"Test"}</ApplianceToggle>
          </Space>
        </Space>
      </Content>
      <Footer>Here is the footer container</Footer>
    </Layout>
  );
};

export { ControlScreen };
export { ApplianceToggle };
