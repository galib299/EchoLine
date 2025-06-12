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
                <Text className={style.MainRowTitle}>Who We Are</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                EchoLine Global is a dialogue-driven initiative that unites emerging voices and established thinkers to navigate global complexities through diplomacy, development, and intellectual collaboration. Rooted in the belief that meaningful communication drives true progress, it fosters spaces where ideas resonate, perspectives are understood, and global engagement is redefined through clarity and reflection.


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
