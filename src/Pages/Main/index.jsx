import { Layout, Typography, Row, Col } from "antd";
import { ImageCarousel } from "../../Components";
import { images1 } from "../../Assets/diplomacyCollection1";
import { images2 } from "../../Assets/diplomacyCollection2";

const { Content } = Layout;
const { Text } = Typography;

import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
          <video className={style.DiplomacyVideo} autoPlay loop muted playsInline>
            <source
              src="https://s3.echolineglobal.org/Echo%20line.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className={style.DiplomacyVideoMainContainer}>
            <div className={style.DiplomacyVideoContainer}>
              <Row>
                <Text className={style.DiplomacyVideoTitle}>EchoLine Global</Text>
              </Row>
              <Row>
                <Text className={style.DiplomacyVideoText}>
                  Resonance of Dialogue, Power in Development
                </Text>
              </Row>
            </div>
          </div>
        </div>
        <div className={style.MainContainer}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={8}>
              <ImageCarousel images={images1} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <ImageCarousel images={images2} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <ImageCarousel images={images1} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
