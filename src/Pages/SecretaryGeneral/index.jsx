import { Layout, Typography, Row, Col, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import style from "./style.module.scss";
import SecretaryGeneral from "../../Assets/Logo/SecretaryGeneral.jpg";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>

          <Row className={style.MainRow}>
            <Col xs={24} sm={24} md={12} lg={2} className={style.MainImageRow}>
              <Image
                src={SecretaryGeneral}
                style={{ borderRadius: "50%" }}
                preview={{
                  maskClassName: style.hidePreviewText,
                  mask: false
                }}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={21}>
              <Row>
                <Text className={style.MainRowText}>
                Galib Abdullayev, the founding Secretary-General of EchoLine Global,
                 established the initiative in 2025 with a vision to create a vibrant 
                 platform for dialogue and global collaboration. As Secretary-General,
                Galib Abdullayev serves as the chief representative and strategic leader of EchoLine Global,
                 entrusted with advancing its mission to foster diplomacy,
                 intellectual exchange, and youth empowerment on the international stage.
                </Text>
                <Text className={style.MainRowText}>
                In this role, Galib Abdullayev guides the overall direction of the initiative,
                 steering programs and partnerships that encourage cross-cultural understanding
                  and innovative approaches to complex global issues. He plays a central role 
                  in organizing events, workshops, and collaborative projects designed to equip 
                  emerging leaders with the skills and insights necessary for effective global 
                  engagement.
                </Text>
                <Text className={style.MainRowText}>
                The Secretary-General also ensures that EchoLine Global operates in alignment with its core values of inclusivity, respect, and thoughtful dialogue. By maintaining strong relationships with international partners, experts, and institutions, the office strengthens the initiative’s ability to create meaningful opportunities for its members to contribute to global conversations and solutions.

Through dedicated leadership, the position fosters an environment that nurtures the growth of future diplomats, thinkers, and changemakers, reinforcing EchoLine Global’s position as a leading platform for constructive international engagement and cooperation.
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
