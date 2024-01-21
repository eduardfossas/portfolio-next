import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";
import { ScrollContext } from "context";
import { useContext, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.header)`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 12px 24px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  background: white;
  padding: 12px 24px;
  border-radius: 9999px;
  box-shadow: 0px 0px 5.3px rgba(0, 0, 0, 0.028),
    0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 80px rgba(0, 0, 0, 0.07);

  ${mediaQueries.m} {
    font-size: 16px;
  }
`;

const Aside = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  height: 100%;
`;

const Box = styled(motion.article)`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  height: 100%;
  background: #fff;
  padding: 0;
  z-index: 10;
  font-size: 16px;

  ${mediaQueries.m} {
    width: 800px;
    padding: 24px 24px;
  }
`;

const Trap = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 24px;

  &:last-of-type {
    margin-bottom: 48px;
  }
`;

const SmallTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;

  margin: 0 0 0.5rem;
`;

const SmallP = styled.p`
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
`;

const CategorySections = styled.section`
  max-width: 560px;
  margin: auto;

  a {
    color: #222;
  }
`;

const SectionArticle = styled.article`
  margin-bottom: 35px;
`;

const Scroll = styled.div`
  overflow-y: auto;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  overscroll-behavior: contain;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

const Close = styled(motion.div)`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 11;
  font-size: 32px;
  font-weight: 200;
  background-color: white;
  border: 1px solid black;
  line-height: 1;
  color: black;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaQueries.m} {
    display: none;
  }
`;

const Header = ({ key }) => {
  const { scroll } = useContext(ScrollContext);
  const [isNavOpen, setNavOpen] = useState();
  return (
    <Wrapper>
      <Nav>
        <div>Eduard Fossas</div>
        <StyledLink href="mailto:eduardfp@gmail.com">Contact</StyledLink>
      </Nav>
    </Wrapper>
  );
};

export { Header };
