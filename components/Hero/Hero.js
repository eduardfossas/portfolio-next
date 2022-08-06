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

const HeroTitle = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
`;

const Title = styled(motion.div)`
  font-size: 7.2vw;
  color: #fff;
  font-weight: 400;
  margin: 0;

  small {
    display: block;
    font-size: 4vw;
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

      <HeroTitle aria-hidden="true">
        <Title
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25, duration: 1, ease: [0.87, 0, 0.13, 1] },
          }}
        >
          <small>{client}</small>
          {title}
        </Title>
      </HeroTitle>
    </HeroWrapper>
  );
};

export { Hero };
