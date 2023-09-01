import styled from "styled-components";
import Image from "next/image";
import mediaQueries from "styles/mediaQueries";
import { motion } from "framer-motion";
import useMatchMedia from "hooks/useMatchMedia";

const HeroWrapper = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImageMobile = styled(motion.figure)`
  height: 25vh;
  margin: 0;
  width: 100vw;
  aspect-ratio: 16/9;
  transform: scale(0.85);
  position: relative;

  ${mediaQueries.m} {
    display: none;
  }
`;

const HeroImage = styled.figure`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: none;

  ${mediaQueries.m} {
    display: block;
  }
`;

const HeroTitle = styled(motion.div)`
  width: 100%;
  position: absolute;
  background-color: white;
  text-align: center;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 60px;
  bottom: -30px;
  padding: 0 24px;
  display: none;

  ${mediaQueries.m} {
    height: 96px;
    bottom: 0;
    justify-content: center;
    display: flex;
  }
`;

const Title = styled(motion.div)`
  font-size: 24px;
  color: #000;
  font-weight: 400;
  margin: 0;
  font-weight: bold;

  span {
    font-weight: normal;
  }
`;

const Hero = ({ image, title, client }) => {
  return (
    <HeroWrapper>
      <HeroImageMobile
        initial={{ scale: 0.85 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1,
            ease: [0.87, 0, 0.13, 1],
          },
        }}
      >
        <Image
          alt={image.alt}
          src={image.filename}
          objectFit="cover"
          layout="fill"
          sizes="100vw"
          quality="90"
          priority="true"
          aria-hidden="false"
        />
      </HeroImageMobile>

      <HeroImage>
        <Image
          alt={image.alt}
          src={image.filename}
          objectFit="cover"
          layout="fill"
          sizes="100vw"
          quality="90"
          priority="true"
        />
      </HeroImage>

      <HeroTitle
        aria-hidden="true"
        initial={{ y: 100 }}
        animate={{
          y: 0,
          transition: { delay: 0, duration: 1, ease: [0.87, 0, 0.13, 1] },
        }}
      >
        <Title
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25, duration: 1, ease: [0.87, 0, 0.13, 1] },
          }}
        >
          <span>{client} </span>
          {title}
        </Title>
      </HeroTitle>
    </HeroWrapper>
  );
};

export { Hero };
