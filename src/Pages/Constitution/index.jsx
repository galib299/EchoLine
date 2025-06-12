import { Layout, Typography, Row, Col } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429"}}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>

          <object data="src/Assets/constitution.pdf" type="application/pdf" width="100%" height="100%" />

          </Row>

        </div>
      </Content>
    </Layout>
  );
}

export default App;
