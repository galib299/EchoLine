import React, { useState } from "react";
import { Menu, Drawer, Collapse, Typography, Image } from "antd";
import { CloseOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo1 from "../../Assets/Logo/blacklogo1.png"; // ✅ Correct image

const { Panel } = Collapse;
const { Text } = Typography;

import "./styles.scss";
import style from "./style.module.scss";

const MenuDrawer = ({ open, openDrawer, items }) => {
  const navigate = useNavigate();
  const [activePanels, setActivePanels] = useState([]);

  const handlePanelChange = (keys) => {
    setActivePanels(keys);
  };

  const handleDrawerClose = () => {
    openDrawer();
    setActivePanels([]);
  };

  const formatHeader = (header) => {
    if (typeof header === "string") {
      return header.charAt(0).toUpperCase() + header.slice(1).toUpperCase();
    }
    return header;
  };

  return (
    <Drawer
      placement="bottom"
      closable={true}
      onClose={handleDrawerClose}
      open={open}
      height="100%"
    >
      <div className={style.DrawerHeader}>
        <div className={style.logo1}>
          <Image
            style={{ borderRadius: "3vmin" }}
            width={"20%"}
            preview={false}
            src={logo1} // ✅ Use logo1.png here
          />
        </div>
        <div onClick={handleDrawerClose} className={style.DrawerCloseIcon}>
          <CloseOutlined style={{ color: "#0d1429" }} />
        </div>
      </div>

      <Collapse
        className={style.DrawerCollapse}
        activeKey={activePanels}
        onChange={handlePanelChange}
      >
        {items.map(({ header, submenu = [] }, index) => (
          <Panel
           header={<Text className={style.MenuText}>{header}</Text>}
            expandIcon={({ isActive }) =>
              isActive ? (
                <DownOutlined style={{ color: "#ffffff" }} />
              ) : (
                <RightOutlined style={{ color: "#ffffff" }} />
              )
            }
            key={typeof header === "string" ? header : `panel-${index}`}
          >
            {submenu.length > 0 && (
              <Menu>
                {submenu.map(({ key, label, path, disabled }) => (
                  <Menu.Item
                    key={key}
                    onClick={() => {
                      if (disabled) return;
                      if (path.startsWith("http")) {
                        window.open(path, "_blank");
                      } else {
                        navigate(path);
                      }
                      handleDrawerClose();
                    }}
                    disabled={disabled}
                  >
                    <Text
                      style={
                        disabled
                          ? { color: "gray", cursor: "not-allowed" }
                          : {}
                      }
                      className={style.SubMenuText}
                    >
                      {label}
                    </Text>
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </Panel>
        ))}
      </Collapse>
    </Drawer>
  );
};

export default MenuDrawer;
