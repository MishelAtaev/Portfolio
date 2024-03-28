import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";

// Creates a background for the whole section
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

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 60px;
  }

  @media (max-width: 600px) {
    padding: 30px;
  }
`;

// Header styling
const Heading = styled.h2`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

//Styling for icons
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 30px;

  @media (min-width: 601px) and (max-width: 1024px) {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

// Styling for pseudo element and icons
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

  @media (min-width: 601px) and (max-width: 1024px) {
    &::before{
      width: 50px;
      height: 50px;
    }
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    &::before{
      width: 40px;
      height: 40px;
    }
    width: 30px;
    height: 30px;
  }
`;

// Component that adds the icons and on click allows the user to either send an email or access the page
const ContactMe = () => {
  const mailTo = "mailto:ataevmishel@hotmail.com";
  const githubUrl = "https://github.com/mishelataev";
  const linkedInUrl = "https://linkedin.com/in/mishel-ataev-8594b41a5/";

  return (
    <Section id="contact-me">
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
