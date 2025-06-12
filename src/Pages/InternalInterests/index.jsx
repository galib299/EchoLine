import { Layout, Typography, Row } from "antd";
const { Content } = Layout;
const { Text, Title } = Typography;
import style from "./style.module.scss";

function App() {
  return (
    <Layout className="layout" style={{ backgroundColor: "#0d1429" }}>
      <Content>
        <div className={style.MainContainer}>
          <Row className={style.MainRow}>
            <div className={style.ContentWrapper}>
              <Title className={style.MainRowTitle}>Internal Interest</Title>
              <Text className={style.QuoteText}>
                "We enhance national interests through international diplomacy and support foreign missions within our country."
              </Text>
            </div>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
