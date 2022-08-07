import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { storyblokPreviewClient } from "clients";
import { Hero } from "components/Hero";
import { Intro } from "components/Intro";
import { Slider } from "components/Slider";
import { Colophon } from "components/Colophon";
import { Outro } from "components/Outro";
import { StickyLink } from "components/StickyLink";
import useMatchMedia from "hooks/useMatchMedia";

export default function Home({
  project: {
    title,
    hero,
    client,
    year,
    tags,
    intro,
    slider,
    ctaText,
    ctaTitle,
    ctaLink,
  },
  nextProject,
}) {
  const contentAnimation = useAnimation();
  const mobileLink = useAnimation();
  const isMobile = useMatchMedia("(max-width: 1024px)");
  const details = [
    { title: "Title", value: title },
    { title: "Client", value: client },
    { title: "Year", value: year },
    { title: "Type", value: tags },
  ];

  return (
    <>
      <Head>
        <title>Eduard Fossas | {title}</title>
      </Head>
      <main>
        <motion.div animate={contentAnimation}>
          <Hero image={hero} title={title} client={client} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.25,
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
              },
            }}
          >
            <Intro details={details} description={intro} />
            <Slider slides={slider} />
            <Colophon title={ctaTitle} text={ctaText} link={ctaLink.url} />
          </motion.div>
        </motion.div>
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.25,
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
              },
            }}
          >
            <StickyLink
              title={ctaTitle}
              link={ctaLink.url}
              animation={mobileLink}
            />
          </motion.div>
        )}
        <Outro
          {...nextProject}
          contentAnimation={contentAnimation}
          linkAnimation={mobileLink}
        />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const {
    data: {
      story: { content: project },
    },
  } = await storyblokPreviewClient.get(`cdn/stories/cases/foam`);

  const {
    data: {
      story: { content: nextProject, slug: nextProjectSlug },
    },
  } = await storyblokPreviewClient.get(`cdn/stories/cases/moooi`);

  const { hero = "", title = "" } = nextProject;

  return {
    props: {
      project,
      nextProject: {
        hero,
        title,
        slug: nextProjectSlug,
      },
    },
  };
};
