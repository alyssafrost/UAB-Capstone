import { Layout } from "antd";
import { Switch } from "antd";

// function onChange(checked) {
//   console.log(`switch to ${checked}`);
// }

// ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);

// const Switch = (checked) => {
//   console.log();
// };

const { Header, Footer, Sider, Content } = Layout;

const ControlScreen = () => {
  return (
    <Layout>
      {"Layout Text"}
      "Test Render"
      <Header>
        {"Header"}
        "Test Header"
        <Content>"Test Content"</Content>
      </Header>
    </Layout>
  );
};

export { ControlScreen };
