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
                <Text className={style.MainRowTitle}>OUR MISSION</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                EchoLine Global’s mission is to promote international dialogue, foster global understanding, and support the development of youth in diplomacy and global affairs. Through collaboration with experienced diplomats, experts, and institutions, the initiative aims to cultivate informed, empathetic, and solution-oriented leaders capable of addressing today’s complex global challenges with clarity and purpose.


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
