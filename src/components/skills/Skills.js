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

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200px;
  margin: 250px 0;

  &::before {
    content: "";
    position: absolute;
    width: 700px;
    height: 180px;
    background-color: var(
      --second-color
    ); 
    border-radius: 800px;
    z-index: -1;
  }
`;

const IconStyle = styled.div`
  font-size: 70px;
  margin: 0 10px; 
`;

const Skills = () => {
  return (
    <section>
      <SkillContainer>
        <IconStyle>
          <FaHtml5 color="#e34f26" />
        </IconStyle>
        <IconStyle>
          <FaCss3Alt color="#1572b6" />
        </IconStyle>
        <IconStyle>
          <FaJsSquare color="#f7df1e" />
        </IconStyle>
        <IconStyle>
          <FaNodeJs color="#3c873a" />
        </IconStyle>
        <IconStyle>
          <FaReact color="#61dbfb" />
        </IconStyle>
        <IconStyle>
          <SiMongodb color="#4db33d" />
        </IconStyle>
      </SkillContainer>
    </section>
  );
};

export default Skills;
