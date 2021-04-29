import React, { useEffect, useRef } from "react";

const Menu = ({ menu, setMenu }) => {
  const menuWindow = useRef();
  useEffect(() => {
    document.addEventListener(
      "mousedown",
      (e) => !menuWindow.current.contains(e.target) && setMenu(false)
    );
  }, [setMenu]);

  return (
    <nav ref={menuWindow} style={{ width: menu ? "15rem" : "0" }}>
      <a id="home" href="/">
        Home
      </a>
      <a id="about" href="/about">
        About
      </a>
      <a id="contact" href="/contact">
        Contact
      </a>
      <a href="html">Settings</a>
    </nav>
  );
};

export default Menu;
