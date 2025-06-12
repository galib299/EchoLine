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
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>Who We Are</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community is a non-governmental organization (NGO) dedicated to
                  fostering international cooperation, dialogue, and cultural exchange. Based in
                  Azerbaijan, the organization collaborates with diplomats, international
                  institutions, and policymakers to address global challenges and promote mutual
                  understanding among nations. We work at the crossroads of diplomacy and
                  international relations, serving as a hub for meaningful conversations and
                  actionable initiatives.
                </Text>
              </Row>
            </Col>
          </Row>
          {/* <Row className={style.MainImageRow}>
            <Image preview={false} src={DiplomacyLogo} />
          </Row> */}
          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>Our Story</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  The Diplomacy Community was established in 2020 at ADA University to contribute to
                  global diplomacy through impactful events, collaborations, and policy discussions.
                  Since its inception, the organization has built strong relationships with
                  ambassadors, politicians, international organizations, and influential leaders,
                  driving projects that prioritize dialogue and constructive solutions to the
                  pressing challenges of our times.
                </Text>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={11}>
              <Row>
                <Text className={style.MainRowTitle}>Our Mission</Text>
              </Row>
              <Row>
                <Text className={style.MainRowText}>
                  Our mission is to advance international diplomacy by providing a platform for
                  dialogue, collaboration, and cultural understanding. We are committed to bridging
                  gaps between cultures and fostering partnerships that promote peace, prosperity,
                  and sustainable development in a rapidly changing world. The Diplomacy Community
                  stands as a platform where future diplomats and policymakers develop the skills
                  and connections to address the complexities of our globalized world.
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
