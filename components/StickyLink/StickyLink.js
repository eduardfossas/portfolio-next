import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { SrOnly } from "components/SrOnly";
import { useEffect } from "react";

const Container = styled(motion.div)`
  margin: 0;
  max-width: 1024px;
  text-align: left;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

const ExtLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  line-height: 1;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #222;
  padding: 10px 20px;
  border-radius: 9999px;

  span {
    display: inline-block;
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &:hover {
    span {
      transform: translateX(3px);
    }
  }
`;

const StickyLink = ({ title, link, animation }) => {
  return (
    <Container animate={animation}>
      <ExtLink
        tabIndex={1}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title} <SrOnly>clicking this link</SrOnly>
        <span aria-hidden="true">--&gt;</span>
      </ExtLink>
    </Container>
  );
};

export { StickyLink };
