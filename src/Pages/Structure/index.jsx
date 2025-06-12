import { Layout, Typography, Row, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import Structure from "../../Assets/structure.jpg";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#09122f"}}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
          <Image
                src={Structure}
                preview={false}
              />
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
