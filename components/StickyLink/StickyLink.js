import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";
import { motion } from "framer-motion";
import { SrOnly } from "components/SrOnly";

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
  color: #222;
  font-weight: 700;
  line-height: 1;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 9999px;
  box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
    0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 80px rgba(0, 0, 0, 0.07);
  transition: background 300ms cubic-bezier(0.87, 0, 0.13, 1),
    color 300ms cubic-bezier(0.87, 0, 0.13, 1);

  span {
    display: inline-block;
    position: relative;
    transform: translateY(0);
  }

  &:hover {
    background: #222;
    color: #fff;
  }

  ${mediaQueries.m} {
    bottom: 28px;
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
        <span aria-hidden="true">↗</span>
      </ExtLink>
    </Container>
  );
};

export { StickyLink };
