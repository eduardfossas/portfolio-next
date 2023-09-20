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
  font-weight: 300;
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
        <StyledLink href="mailto:eduardfp@gmail.com">Contact</StyledLink>
        <div>Eduard Fossas</div>
        <StyledLink
          onClick={() => {
            scroll.current.stop();
            setNavOpen(true);
          }}
        >
          About
        </StyledLink>
      </Nav>
      <AnimatePresence>
        {isNavOpen && (
          <Aside>
            <Close
              onClick={() => {
                scroll.current.start();
                setNavOpen(false);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              ✗
            </Close>
            <Box
              tabIndex={1}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.6 }}
            >
              <Scroll data-lenis-prevent>
                <section>
                  <Title>About Eduard Fossas</Title>
                  <Paragraph>
                    I am Eduard Fossas, a Renaissance man trapped in the 21st
                    century. I was born in the beautiful city of Barcelona, and
                    although I have lived in many cities, I finally decided to
                    settle in the one with the best weather: Amsterdam. Husband
                    and father of two, my days are neither boring nor cold.
                  </Paragraph>
                  <Paragraph>
                    To not fill you with boredom, I have created the following
                    sections for you to learn more about me: what I have done,
                    what I am doing, and what I plan to do.
                  </Paragraph>
                </section>

                <CategorySections>
                  {/* <h3>Past & Current</h3> */}
                  <SectionArticle>
                    <SmallTitle>Printing and Prepress</SmallTitle>
                    <SmallP>
                      That was my first profession and where my journey started.
                      I absolutely loved it and I have real nostalgia about
                      those days, long live to the analog world. You can check
                      my printed works here: (Links coming soon.)
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Graphic Design</SmallTitle>
                    <SmallP>
                      After a few years in printing, I studied Graphic Design
                      and absolutely loved it, especially Typography. I
                      primarily worked as an Editorial Designer. You can
                      probably see its influence in everything I do.
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Frontend Development</SmallTitle>
                    <SmallP>
                      I am a self taught Frontend Developer and I have been
                      working as one for almost a decade. You can check my
                      recent works in this page.
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Creative Development</SmallTitle>
                    <SmallP>
                      The past three years I have been working as a creative
                      frontend developer. You can check most of this works in
                      this webpage. I also created the{" "}
                      <a
                        href="https://www.instagram.com/creativedvloper/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @creativedvloper
                      </a>{" "}
                      account where I post mostly creative coding sketches born
                      out of curiosity.
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Writing</SmallTitle>
                    <SmallP>
                      Writing has always been a joy of mine but never publicly.
                      I decided to start my own blog this year where I write
                      about everything. You can read it here. (Links coming
                      soon.)
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Computer Graphics</SmallTitle>
                    <SmallP>
                      The passion for computer graphics sparkled during my time
                      learning creative development libraries like Three.js,
                      Openframeworks or P5.js. I created my own WebGPU rendering
                      engine to get knowledge about how computer graphics work.
                      You can check it in this github repository. (Links coming
                      soon.)
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Ilustration</SmallTitle>
                    <SmallP>
                      I have a background in painting and drawing. What I always
                      enjoyed the most was sketching and drawing ideas. You can
                      check some of my current Ilustrations in my blog. (Links
                      coming soon.)
                    </SmallP>
                  </SectionArticle>
                </CategorySections>
              </Scroll>
            </Box>
            <Trap
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                scroll.current.start();
                setNavOpen(false);
              }}
            />
          </Aside>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export { Header };
