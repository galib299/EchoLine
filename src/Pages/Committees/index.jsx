import { useState } from "react";
import { Layout, Typography, Row, Col } from "antd";
import { ImageCarousel } from "../../Components";
import { images1 } from "../../Assets/diplomacyCollection1";
import { RightOutlined } from "@ant-design/icons"; 
import style from "./style.module.scss";

const { Content } = Layout;
const { Title } = Typography;

const committeesData = [
   {
    name: " UNGA",
    agenda: " The Militarization of Artificial Intelligence and the Future of Global Security ",
    description:
      "Emerging technologies are fundamentally reshaping warfare and international security, offering strategic advantages while introducing significant risks that challenge established frameworks of global stability and diplomacy."
  },
  {
    name: "UNW",
    agenda: " Weaponized Patriarchy — Power, Oppression, and the Global Rebellion for Women’s Autonomy",
    description:
      "In today’s world, patriarchy extends beyond cultural norms; it operates as a deliberate instrument of political and institutional control. From legal systems that restrict women’s autonomy to conflict zones where sexual violence is weaponized, and regimes that suppress women’s voices — gender-based oppression is not incidental. It is systemic."
  },
  {
    name: " World Bank Crisis",
    agenda: "Global Financial Collapse: Rebuilding a New Economy",
    description:
      "A sudden and widespread global financial collapse, triggered by a cascade of banking failures, sovereign debt defaults, and severe market crashes, results in profound disruption to the world economy. Both developed and developing nations face significant consequences, including widespread unemployment, social instability, and a sharp rise in poverty."
  },
  {
    name: "FIFA",
    agenda: "Combating Corruption and Ensuring Transparency in FIFA’s Internal Operations ",
    description:
      "FIFA faces significant challenges related to internal corruption and a lack of transparency, including instances of bribery, favoritism, and opaque decision-making processes. These practices undermine the integrity of football, erode public trust, deter sponsors, and create unfair advantages. Without effective governance and accountability, such issues pose a serious threat to FIFA’s credibility and the sport’s future."
  },
  {
    name: "INTERPOL",
    agenda: " Combating Illegal Activities on the Dark Web ",
    description:
      "The Dark Web has emerged as a hub for illicit activities, including drug and weapons trafficking, human exploitation, and cybercrime services. These concealed marketplaces enable serious criminal enterprises to thrive, inflicting harm on individuals and communities worldwide. Due to its anonymous and decentralized nature, law enforcement faces significant challenges in identifying and prosecuting offenders."
  }
];

const Committees = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Layout style={{ backgroundColor: "#0d1429", minHeight: "100vh" }}>
      <Content>
        <div className={style.MainContainer} style={{ paddingTop: "150px" }}> {/* ✅ Pushed down */}
          <Title className={style.MainTitle}></Title>
          <Row gutter={[24, 24]} className={style.CommitteeGrid}>
            {committeesData.map(({ name, agenda, description }, index) => (
              <Col xs={24} sm={24} md={12} lg={12} key={index}>
                <div className={style.PanelItem}>
                  <div
                    className={style.PanelHeaderWithArrow}
                    onClick={() => toggle(index)}
                  >
                    <div>
                      <div className={style.CommitteeName}>{name}</div>
                      <div className={style.AgendaTitle}>{agenda}</div>
                    </div>
                  <RightOutlined
  className={`${style.ArrowIcon} ${
    activeIndex === index ? style.Rotate : ""
  }`}

                    />
                  </div>

                  <div
                    className={style.AgendaDescription}
                    style={{
                      maxHeight: activeIndex === index ? "600px" : "0px",
                      opacity: activeIndex === index ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.6s ease",
                      marginTop: activeIndex === index ? "14px" : "0px",
                    }}
                  >
                    {description}
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className={style.CarouselContainer}>
            <div className={style.CarouselWrapper}>
              <ImageCarousel images={images1} />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Committees;
