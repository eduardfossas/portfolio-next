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
                    A humanist with multiple interests. Born in the beautiful
                    city of Barcelona, and although I have lived in many cities,
                    finally decided to settle in the one with the best weather:
                    Amsterdam. Husband and father of two, my days are neither
                    boring nor cold.
                  </Paragraph>
                </section>

                <CategorySections>
                  {/* <h3>Past & Current</h3> */}
                  <SectionArticle>
                    <SmallTitle>Printing and Prepress</SmallTitle>
                    <SmallP>
                      We all love a well bind, printed book, and so do I, and
                      that is exactly why this was my first profession.
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
                      Do you know what jQuery is? And Dreamweaver? What about
                      old-plain HTML tables and CSS?
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Creative Development</SmallTitle>
                    <SmallP>
                      Do you like books? Do you like movies? Do you like video
                      games? Do you like Math? and design? what about animation?
                      I certainly do too, that is why the past three years I
                      have been working as a creative frontend developer. I also
                      created the{" "}
                      <a
                        href="https://www.instagram.com/creativedvloper/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @creativedvloper
                      </a>
                      account where I post mostly creative coding sketches born
                      out of curiosity.
                    </SmallP>
                  </SectionArticle>

                  <SectionArticle>
                    <SmallTitle>Computer Graphics</SmallTitle>
                    <SmallP>
                      The passion for computer graphics sparkled during my time
                      learning creative development libraries like Three.js,
                      Openframeworks or P5.js. I created my own WebGPU rendering
                      engine to get knowledge about how computer graphics work.
                      You can check it in this{" "}
                      <a
                        href="https://github.com/eduardfossas/webgpu-renderer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github repository
                      </a>
                      .
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
