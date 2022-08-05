import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { storyblokPreviewClient } from "clients";

const HeroWrapper = styled.article`
  position: relative;
`;

const HeroImage = styled(motion.figure)`
  width: 100vw;
  height: 100vh;
`;

const Moooi = () => {
  return (
    <main>
      <HeroWrapper>
        <HeroImage>
          <Image
            alt="go to atp project"
            src="/moooi/moooi-hero.jpg"
            objectFit="cover"
            layout="fill"
            quality="100"
            size="100vw"
          />
        </HeroImage>
      </HeroWrapper>
    </main>
  );
};

export const getStaticProps = async ({}) => {
  const res = await storyblokPreviewClient.get(`cdn/stories/cases/moooi`);

  return {
    props: {
      posts: "",
    },
  };
};

export default Moooi;
