import { Layout, Typography, Row, Col } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>OUR STORY</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
EchoLine Global MUN, established in 2025, is an initiative that supports the engagement of youth in international affairs, diplomacy, and global development. It offers a platform for young people to deepen their understanding of global issues, participate in high-level discussions, and collaborate with experts and international institutions.
                </Text>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;

