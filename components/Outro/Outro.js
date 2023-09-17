import { useRef } from "react";

import Image from "next/image";
import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import useMatchMedia from "hooks/useMatchMedia";
import { ScrollContext } from "context";
import { useContext } from "react";

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 25vh;
  width: 100vw;
`;

const Title = styled(motion.div)`
  position: absolute;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #333;
  bottom: 50%;
  pointer-events: auto;
  font-weight: 600;
  line-height: 1.1;

  small {
    display: block;
    font-size: 16px;
    font-weight: 500;
  }

  ${mediaQueries.m} {
    color: #333;
    bottom: 105%;
  }
`;

const ClickContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CoverImage = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 25vh;
  transform: scale(0.85);
  bottom: -50%;
  pointer-events: none;

  ${mediaQueries.m} {
    height: 100vh;
    bottom: 0;
    width: 100vw;
    transform: scale(0.5);
  }
`;

const MotionImage = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 0);
  width: 100%;
  left: 50%;
  height: 100%;
  cursor: pointer;
  pointer-events: auto;

  ${mediaQueries.m} {
    transform: translate(-50%, 50%);
    top: 50%;
  }
`;

const Outro = ({ title, hero, slug, contentAnimation, linkAnimation }) => {
  const { scroll } = useContext(ScrollContext);
  const { push } = useRouter();
  const animate = useAnimation();
  const coverAnimate = useAnimation();
  const titleAnimate = useAnimation();
  const clicked = useRef(false);
  const isMobile = useMatchMedia("(max-width: 1024px)");
  const imageRef = useRef();

  const loadNextProject = async () => {
    if (clicked.current) return;
    document.body.style.overflow = "hidden";

    const { top, height } = imageRef.current.getBoundingClientRect();
    const marginTop = ((height * 100) / 85 - height) / 2;

    clicked.current = true;
    linkAnimation.start({
      opacity: 0,
    });
    contentAnimation.start({
      opacity: 0,
      y: -10,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    });
    titleAnimate.start({
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.87, 0, 0.13, 1],
      },
    });

    if (!isMobile) {
      await scroll.current.scrollTo(imageRef.current);

      await animate.start({
        x: ["-50%", "-50%"],
        y: isMobile ? ["0vh", "-50vh"] : ["50%", "-50%"],
        transition: {
          duration: 1,
          ease: [0.87, 0, 0.13, 1],
        },
      });
    }

    if (isMobile) {
      await coverAnimate.start({
        y: ["0px", `-${top - marginTop}px`],
        scale: [0.85, 0.85],
        transition: {
          duration: 1,
          ease: [0.87, 0, 0.13, 1],
        },
      });
    }

    if (!isMobile) {
      await coverAnimate.start({
        scale: [0.5, 1],

        transition: {
          duration: 1,
          ease: [0.87, 0, 0.13, 1],
        },
      });
    }

    push(`/cases/${slug}`);
    document.body.style.overflow = "";
  };

  const handleOnKeyPress = ({ keyCode }) => {
    if (keyCode === 0) loadNextProject();
  };

  return (
    <Element>
      <ClickContainer>
        <CoverImage ref={imageRef} initial={false} animate={coverAnimate}>
          <MotionImage
            onClick={loadNextProject}
            onKeyPress={handleOnKeyPress}
            animate={animate}
            tabIndex={1}
          >
            <Image
              alt={`Go To Next Project`}
              src={hero.filename}
              objectFit="cover"
              layout="fill"
              quality="90"
              size="100vw"
              priority="true"
            />
          </MotionImage>
        </CoverImage>
        <Title
          animate={titleAnimate}
          onClick={loadNextProject}
          onKeyPress={handleOnKeyPress}
        >
          <small>Next Project</small> <span>{title}</span>
        </Title>
      </ClickContainer>
    </Element>
  );
};

export { Outro };
