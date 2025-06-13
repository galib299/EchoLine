import React, { useState, useEffect, useMemo } from "react";
import { Layout, Dropdown, Menu, Typography, Image, Button } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";
import style from "./style.module.scss";
import DiplomaticLogo from "../../Assets/Logo/logo1.png";
import { MenuDrawer } from "../../Components";

const { Header } = Layout;
const { Text } = Typography;

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => setDrawerVisible(!drawerVisible);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = useMemo(() => [
    {
      header: "ABOUT US",
      submenu: [
        { key: "whoWeAre", label: "Who We Are", path: "/whoweare" },
        { key: "ourStory", label: "Our Story", path: "/ourstory" },
        { key: "ourMission", label: "Our Mission", path: "/ourmission" },
        { key: "secretaryGeneral", label: "About Secretary-General", path: "/secretarygeneral" },
      ],
    },
    {
      header: "CONFERENCE DETAILS",
      submenu: [
        { key: "committees", label: "Committees", path: "/Committees" },
        { key: "datevenue", label: "Date & Venue", path: "/datevenue" },
        { key: "executivecouncilsessions", label: "Executive Council Sessions", disabled: true },
        { key: "conferenceAgenda", label: "Conference Agenda", disabled: true },
        { key: "policydialogues", label: "Policy Dialogues", disabled: true },
      ],
    },
    {
      header: "ECHOLINE GLOBAL",
      submenu: [
        { key: "constitution", label: "Constitution", path: "constitution.pdf", external: true },
        { key: "internalInterests", label: "Internal Interests", path: "/internalinterests" },
        { key: "structure", label: "Structure", path: "/structure" },
        { key: "stakeholders", label: "Our Stakeholders", path: "/stakeholders" },
      ],
    },
    { header: "PUBLICATIONS", path: "/publications", disabled: true },
    {
      header: "PARTNERSHIP",
      submenu: [
        {
          key: "member",
          label: "Become a Delegate",
          path: "https://docs.google.com/forms/d/e/1FAIpQLSejN8FEXvnPkvK_p3zKsxfQT0SMG9l1uH-8y73Ko4u_L7-Zew/viewform?usp=header",
          external: true,
        },
        {
          key: "staff",
          label: "Join Our Staff",
          path: "https://docs.google.com/forms/d/e/1FAIpQLSeQqIQoNwKArGGdgtupsG3osfjhLBoMDMHebU8YAOc2PdxWdg/viewform?usp=header",
          external: true,
        },
        {
          key: "mediapartner",
          label: "Become a Partner",
          path: "mailto:echolineglobal@gmail.com",
          external: true,
        },
        {
          key: "partner",
          label: "Become a Sponsor",
          path: "mailto:echolineglobal@gmail.com",
          external: true,
        },
      ],
    },
  ], [navigate]);

  // Updated mailto/external/internal navigation handling
  const renderMenuItem = ({ key, label, path, disabled, external }) => {
    const isMailto = external && path?.startsWith("mailto:");

    return (
      <Menu.Item key={key} disabled={disabled}>
        {isMailto ? (
          <a href={path} style={{ color: disabled ? "gray" : "inherit" }}>
            {label}
          </a>
        ) : external ? (
          <a href={path} target="_blank" rel="noopener noreferrer" style={{ color: disabled ? "gray" : "inherit" }}>
            {label}
          </a>
        ) : (
          <span
            onClick={() => {
              if (!disabled && path) navigate(path);
            }}
            style={{ color: disabled ? "gray" : "inherit", cursor: disabled ? "not-allowed" : "pointer" }}
          >
            {label}
          </span>
        )}
      </Menu.Item>
    );
  };

  const logoWidth = "100%";

  return (
    <Header className={style.Header}>
      <div className={style.Logo}>
        <div className={style.DiplomacyLogo}>
          <Link to="/">
            <Image width={logoWidth} preview={false} src={DiplomaticLogo} />
          </Link>
        </div>

        {screenSize.width > 769 ? null : (
          <Button
            className={style.MenuButton}
            onClick={openDrawer}
            style={{ background: "transparent", border: "none" }}
            icon={
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ width: "36px", height: "2px", background: "white" }}></div>
                <div style={{ width: "36px", height: "2px", background: "white" }}></div>
              </div>
            }
          />
        )}
      </div>

      {screenSize.width > 769 ? (
        <div className={style.NavBar}>
          {menuItems.map(({ header, submenu, path, disabled }, index) => {
            const headerKey = typeof header === "string" ? header : `header-${index}`;
            const headerText = typeof header === "string" ? (
              <Text
                strong
                className={style.NavBarText}
                style={disabled ? { color: "gray", cursor: "not-allowed" } : {}}
                onClick={() => !disabled && path && navigate(path)}
              >
                {header}
              </Text>
            ) : (
              header
            );

            return submenu ? (
              <Dropdown
                key={headerKey}
                overlay={<Menu>{submenu.map(renderMenuItem)}</Menu>}
                placement="bottomCenter"
              >
                <span onClick={(e) => e.preventDefault()}>{headerText}</span>
              </Dropdown>
            ) : (
              <div key={headerKey}>{headerText}</div>
            );
          })}
        </div>
      ) : (
        <MenuDrawer items={menuItems} open={drawerVisible} openDrawer={openDrawer} />
      )}
    </Header>
  );
};

export default Index;
