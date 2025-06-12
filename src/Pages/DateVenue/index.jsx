import { Layout, Typography, Row, Col, Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { ImageCarousel } from "../../Components";
import { images2 } from "../../Assets/diplomacyCollection2";
import style from "./style.module.scss";

const { Content } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>
          {/* TOP DATE & VENUE */}
          <Row justify="center" className={style.DateRow}>
            <Col>
              <div className={style.DateBox}>
                August 27–28, 2025 · ADA University · Baku, Azerbaijan
              </div>
            </Col>
          </Row>

          {/* INTRO PARAGRAPH */}
          <Row justify="center">
            <Col xs={24} md={20}>
              <Text className={style.IntroText}>
                EchoLine Global MUN will take place at ADA University, a distinguished academic institution situated at the intersection of modern innovation and cultural heritage in Baku. The conference will offer two impactful days of diplomacy, international dialogue, and youth leadership development.
              </Text>
            </Col>
          </Row>

          {/* COLLAPSE + IMAGES */}
          <Row gutter={[24, 24]} className={style.MainRow}>
            <Col xs={24} md={12}>
              <Collapse
                ghost
                expandIconPosition="right"
                className={style.CollapseBox}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined
                    style={{
                      color: "#ffffff",
                      fontSize: "1.3em",
                      transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease"
                    }}
                  />
                )}
              >
                <Panel
                  header={<span className={style.PanelHeader}>Logistics for Delegates & Staff</span>}
                  key="1"
                >
                  <div className={style.PanelContent}>
                    <div><b>Check-in:</b> August 27, 11:00–12:00 · ADA University Lobby</div>
                    <div><b>Opening Ceremony:</b> August 27, 12:30 · Main Auditorium, Building C</div>
                    <div><b>Committee Sessions:</b> August 27–28 · Building B</div>
                    <div><b>Closing Ceremony:</b> August 28, 17:00 · Conference Hall, Building C</div>
                    <div><b>Language:</b> English</div>
                    <div><b>Dress Code:</b> Western business attire or traditional formal</div>
                  </div>
                </Panel>
                <Panel
                  header={<span className={style.PanelHeader}>ADA University Campus Information</span>}
                  key="2"
                >
                  <div className={style.PanelContent}>
                    <div><b>Location:</b> Ahmadbey Aghaoglu Street, Baku 1008</div>
                    <div><b>Nearest Metro:</b> Ganjlik Station (15 min walk)</div>
                    <div><b>Nearby Hotels:</b> Diplomatic Hotel, Park Inn, Midtown Hotel</div>
                    <div><b>Food Access:</b> ADA canteen and surrounding cafes in ADA</div>
                    <div>A campus map and entrance guide will be shared with all participants prior to the event.</div>
                  </div>
                </Panel>
              </Collapse>
            </Col>

            <Col xs={24} md={12}>
              <ImageCarousel images={images2} />
            </Col>
          </Row>

          {/* MAP SECTION */}
          <Row className={style.MainRow} justify="center" style={{ marginTop: "3em" }}>
            <Col span={24}>
              <Text className={style.MainTitleText} style={{ textAlign: "center" }}>
                Venue Location
              </Text>
              <div className={style.MapWrapper}>
                <iframe
                  title="ADA University Map"
                  src="https://maps.google.com/maps?q=ADA%20University%20Baku&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>

          {/* MOTTO */}
          <Row className={style.MainRow} style={{ marginTop: "2em" }}>
            <Col span={24}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5em" }}>
                <Text className={style.MainItalicFont}>Resonance of</Text>
                <Text className={style.MainItalicFont}>Dialogue,</Text>
                <Text className={style.MainItalicFont}>Power in </Text>
                <Text className={style.MainItalicFont}>Development.</Text>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
