import { Layout, Typography, Row, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import stakeholders from "../../Assets/stakeholders.png";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#09122f"}}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
          <Image
                src={stakeholders}
                preview={false}
              />
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
