import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";

const Section = styled.section`
  background-color: var(--second-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  z-index: 1;
  padding: 100px;
`;

const Heading = styled.h2`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 30px;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    width: 60px;
    height: 60px;
    background-color: var(--background-color);
    border-radius: 20px;
    z-index: 2;
  }

  svg {
    width: 100%;
    height: 100%;
    z-index: 3;
  }
`;

const ContactMe = () => {
  const mailTo = "mailto:ataevmishel@hotmail.com";
  const githubUrl = "https://github.com/mishelataev";
  const linkedInUrl = "https://linkedin.com/in/mishel-ataev-8594b41a5/";

  return (
    <Section>
      <Heading>CONTACT ME</Heading>
      <IconsContainer>
        <IconWrapper
          as="a"
          href={mailTo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail />
        </IconWrapper>
        <IconWrapper
          as="a"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconWrapper>
        <IconWrapper
          as="a"
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </IconWrapper>
      </IconsContainer>
    </Section>
  );
};

export default ContactMe;
