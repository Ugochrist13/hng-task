import { Flex, Text, Box, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/img/ifg.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p id="zuri">
        Zuri<span>.</span>Internship
      </p>
      <p id="hng">HNG Internship 9 Frontend Task</p>
      <div className="img">
        <img src={logo} />
      </div>
    </div>
  );
}

export default Footer;
