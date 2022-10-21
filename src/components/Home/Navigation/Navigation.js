import { AppBar, IconButton, Link } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WalletIcon from "@mui/icons-material/Wallet";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import $ from "jquery";
import styled from "styled-components";
const navArray = [
  { title: "portfolio", href: "#portfolio", icon: RemoveRedEyeOutlinedIcon },
  { title: "à propos", href: "#àpropos", icon: PersonIcon },
  { title: "services", href: "#services", icon: AppShortcutIcon },
  { title: "tarifs", href: "#tarifs", icon: WalletIcon },
  { title: "contact", href: "#contact", icon: SendIcon },
];
const LinkBar = styled(Link)({
  fontSize: ".8em",
  textTransform: "capitalize",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  marginBottom: "10px",
});
export default function Navigation() {
  const [navState, setNavState] = useState("200px");
  const [buttonNav, setButtonNav] = useState("130px");

  $(window).on("scroll", () => {
    if ($(window).scrollTop() < 500) {
      setButtonNav("130px");
      setNavState("200px");
    } else {
      setButtonNav("0");
    }
  });

  const openNav = () => {
    if (navState === "0px") {
      setNavState("200px");
    } else {
      setNavState("0px");
    }
  };
  return (
    <>
      <AppBar
        sx={{
          width: "200px",
          transform: `translate(${navState})`,
          height: "100vh",
          background: "rgba(255,255,255,0.3)",
          flexFlow: "column",
          justifyContent: "center",
          transition: "all .5s",
          zIndex: "1",
          backdropFilter: "blur(10px)",
        }}
      >
        {navArray.map((item, index) => (
          <IconButton key={index} sx={{ margin: "0 auto" }} onClick={openNav}>
            <LinkBar
              href={item.href}
              sx={{
                textDecoration: "none",
                width: "70px",
                height: "70px",
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <item.icon sx={{ marginBottom: "10px", color: "#000" }} />
              <small style={{ color: "#000" }}>{item.title}</small>
            </LinkBar>
          </IconButton>
        ))}
      </AppBar>
      <IconButton
        onClick={openNav}
        sx={{
          border: "none",
          position: "fixed",
          background: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          boxShadow: 4,
          top: "20px",
          right: "65px",
          zIndex: "1",
          transition: "all .5s",
          color: "#000",
          padding: "10px",
          width: "50px",
          height: "50px",
          transform: `translate(${buttonNav})`,
          "&:hover": { background: "rgba(255,255,255,0.8)" },
        }}
      >
        <MenuRoundedIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
    </>
  );
}
