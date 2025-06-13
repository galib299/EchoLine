import React, { useState } from "react";
import style from "./style.module.scss";
import {
  FacebookOutlined,
  XOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  CopyrightOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Input, Button, Row, Col, message } from "antd";
import LinktreeOutlined from "../../Components/LinktreeIcon/index";
import { SiTiktok } from "react-icons/si";
import { useLocation } from "react-router-dom";

const { TextArea } = Input;
const { Title, Text } = Typography;
const { Footer } = Layout;

const Index = () => {
  const location = useLocation();
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleSendEmail = () => {
    // Basic validation
    if (!formData.name.trim()) {
      message.error('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      message.error('Please enter your email');
      return;
    }
    if (!formData.message.trim()) {
      message.error('Please enter your message');
      return;
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      message.error('Please enter a valid email address');
      return;
    }

    // Create mailto URL with form data
    const subject = encodeURIComponent(`Message from ${formData.name} - Secretary-General Contact`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:galibabdullayev00@icloud.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Clear form after sending
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    message.success('Email client opened! Please send the email from your email application.');
  };

  return (
    <Footer
      className={style.Footer}
      style={{
        background: location.pathname === "/structure" || "/stakeholders" ? "#09122f" : "#0d1429",
      }}
    >
      <Row
        gutter={[40, 0]}
        style={{
          background: location.pathname === "/structure" || "/stakeholders" ? "#09122f" : "#0d1429",
        }}
        className={style.FooterRow}
      >
        {location.pathname === "/" && (
          <Col xs={24} sm={24} md={12} lg={6}>
            <Text className={`${style.FooterTitle} ${style.centered}`}>
              Contact Secretary-General
            </Text>
            <Input 
              style={{ borderRadius: "0px", margin: "10px 0" }} 
              placeholder="Name Surname"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <Input 
              placeholder="Email" 
              style={{ borderRadius: "0px", margin: "10px 0" }}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <TextArea
              style={{ borderRadius: "0px", margin: "10px 0" }}
              rows={3}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
            <Button
              style={{
                backgroundColor: "Black",
                color: "white",
                border: "none",
                borderRadius: "0px",
                width: "100%",
                marginTop: "10px",
              }}
              onClick={handleSendEmail}
            >
              Send
            </Button>
          </Col>
        )}
        <Col xs={24} sm={24} md={12} lg={5}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              Contact Us
            </Text>
          </Row>
          <Row>
            <a href="mailto:echolineglobal@gmail.com" style={{ color: "white" }}>
              <Text className={style.FooterText}>echolineglobal@gmail.com</Text>
            </a>
          </Row>
          <Row>
            <a href="tel:+994552237211" style={{ color: "white" }}>
              <Text className={style.FooterText}>(+994 55) 223 72 11</Text>
            </a>
          </Row>
          <Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <Text className={style.FooterText}></Text>
            </a>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={7}>
          <Row>
            <Col span={24}>
              <Text level={3} className={`${style.FooterTitle} ${style.centeredLeft}`}>
                Connect With Us
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>INSTAGRAM:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://www.instagram.com/echoline.global?igsh=MXB0aHJmdGltcThvNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @ECHOLINE GLOBAL
                </a>
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>YOUTUBE:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://www.youtube.com/@EchoLineGlobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @ECHOLINE GLOBAL
                </a>
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
              <Text className={[style.FooterText, style.ConnectWithUsText]}>TIKTOK:</Text>
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  href="https://www.tiktok.com/@echoline.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  @ECHOLINE GLOBAL
                </a>
              </Text>
            </Col>
          </Row>
          <Row gutter={[10, 0]}>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={7}
              className={[style.FooterTextColumn, style.ConnectWithUsTitle]}
            >
            </Col>
            <Col xs={16} sm={16} md={16} lg={17}>
              <Text className={[style.FooterText, style.ConnectWithUsText]}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                </a>
              </Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3}>
          <Row>
            <Text level={3} className={style.FooterTitle}>
              Publications
            </Text>
          </Row>
          <Row>
            <Text className={style.FooterText}>Become an Author</Text>
          </Row>
          <Row>
            <Text className={style.FooterText}> Share Your Research</Text>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={3}>
          <Text level={3} className={style.FooterTitle}>
            Follow Us
          </Text>
          <div style={{ display: "flex", gap: "10px" }}>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.instagram.com/echoline.global?igsh=MXB0aHJmdGltcThvNw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://linktr.ee/echolineglobal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <LinktreeOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.tiktok.com/@echoline.global"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <SiTiktok style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.youtube.com/@EchoLineGlobal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <YoutubeOutlined style={{ fontSize: "24px" }} />
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://linktr.ee/diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
              </a>
            </Col>
            <Col style={{ padding: "0px" }} xs={4}>
              <a
                href="https://www.youtube.com/@diplomacycommunity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
              </a>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <CopyrightOutlined style={{ paddingTop: "10px", marginRight: "10px" }} />
        <Text className={style.FooterText}>2025 All rights reserved.</Text>
      </Row>
    </Footer>
  );
};

export default Index;