import React from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const StyledFaHtml5 = styled(FaHtml5)`
  color: #e34f26;
  font-size: 60px;
`;

const StyledFaCss3Alt = styled(FaCss3Alt)`
  color: #1572b6;
  font-size: 60px;
`;

const StyledFaJsSquare = styled(FaJsSquare)`
  color: #f7df1e;
  font-size: 60px;
`;

const StyledFaNodeJs = styled(FaNodeJs)`
  color: #3c873a;
  font-size: 60px;
`;

const StyledFaReact = styled(FaReact)`
  color: #61dbfb;
  font-size: 60px;
`;

const StyledSiMongodb = styled(SiMongodb)`
  color: #4db33d;
  font-size: 60px;
`;

const Skills = () => {
  return (
    <section>
      <div>
        <StyledFaHtml5 />
        <StyledFaCss3Alt />
        <StyledFaJsSquare />
        <StyledFaNodeJs />
        <StyledFaReact />
        <StyledSiMongodb />
      </div>
    </section>
  );
};

export default Skills;
