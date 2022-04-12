import { Layout } from "antd";
import { Switch } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const ApplianceToggle = () => {
  return (
    <Switch defaultChecked onChange={onChange}>
      <br />
      <Switch size="default" defaultChecked />
      document.getElementById('container')
    </Switch>
  );
};

// fix tiny later // use Space to define the sizes between switches, or Grid, or Divider
const ControlScreen = () => {
  return (
    <Layout>
      {"Switch Toggles"}
      "Test Render"
      <Header>
        {"Header"}
        "Test Header"
        <Content>
          {" "}
          <ApplianceToggle>"1"</ApplianceToggle>
          <ApplianceToggle>"2"</ApplianceToggle>
        </Content>
      </Header>
    </Layout>
  );
};

export { ControlScreen };
export { ApplianceToggle };
