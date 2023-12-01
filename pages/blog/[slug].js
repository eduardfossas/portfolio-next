import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { Header } from "components/Header";
import styled from "styled-components";
import { Saggy } from "components/Illustrations/Saggy";
import mediaQueries from "styles/mediaQueries";

const BlogPostWrap = styled.main`
  padding-bottom: 4rem;
`;

const HeroContainer = styled.figure`
  padding-top: 64px;
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1440/550;
  margin-bottom: 5rem;
`;

const HeroDraw = styled.div`
  margin-bottom: 1rem;
  aspect-ratio: 0.689;
  height: 100%;
  margin: auto;
`;

const HeroCaption = styled.div`
  font-size: 14px;
  font-style: italic;
  max-width: 720px;
  margin: 0 auto;
`;

const TextContainer = styled.figcaption`
  max-width: 720px;
  margin: 0 auto;
`;

const Cases = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`Eduard Fossas | ${title}`}</title>test
      </Head>
      <Header />
      <BlogPostWrap>
        <article>
          <HeroContainer>
            <HeroDraw>
              <Saggy />
            </HeroDraw>

            <HeroCaption>
              A few months back, I learned about the Hollywood strikes. This
              pause gave actors the chance to dive into cosmetic surgery,
              causing quite the stir in the surgery world due to the sheer
              number of requests. Now that the strikes are over, I am hoping
              they have all had their check-ups and shaken off any, well, saggy
              results. I want to see beatiful folks! Am I late commenting?
              Maybe. Why? Because it was fun to do.
            </HeroCaption>
          </HeroContainer>

          <TextContainer>
            <h2>The worst prologue ever written</h2>
            <p>
              I remember the other day thinking about the past. Being born in
              the 90s was, let&apos;s say, interesting.
            </p>
            <p>
              Let me explain; Childhood was beautiful, I was in the middle of
              analog and technological worlds. I remember playing a football
              match during break time and playing Ocarina of Time after school,
              or watching The Matrix in the school&apos;s fine arts room with
              all our drawings hanging on the walls.
            </p>
            <p>
              Then, years passed, and at only 11 years of age, I was shocked by
              the dreadful attacks on the Twin Towers. I remember it as if it
              was yesterday; I was watching the news on the TV, standing up,
              with eyes full of horror. This event really touched me; maybe I
              was already a sensible kid.
            </p>
            <p>
              Again, years passed, and I started high school, and, to be honest,
              those were tough years for me. Low on grades, low on steam, high
              on fat and high on bullying; the perfect recipe for disaster, but,
              hey! somehow, somewhat, I survived.
            </p>
            <p>
              Completely lost after high school, I decided to start, by mistake,
              something called Prepress in Graphic Arts. Little I knew about the
              profession and little I knew it will impact me so much in my later
              life.
            </p>
            <p>
              I finally thought that I was in control of my life, I had a
              profession that I loved; making books, and the 2008 crisis hit.
              This crisis accelerated the inevitable, the cease of the printing
              industry, and the vanishing of my job. Unless you wanted to be
              poor, was better to quit and look somewhere else.
            </p>
            <p>
              Graphic design seemed like a good option, so I decided to study
              it. After years of studying and working on it, I realised that it
              was solving my unemployment issue but sadly, not the poor part of
              it. No one to blame but me, did not look far, and that was my
              fault.
            </p>
            <p>
              After this revelation, the Christmas of the same year, I started
              on my own, learning web development, and I was surprised about the
              similarities with the other skills that I learned in the past. It
              was perfect because it was solving all of my problems and I loved
              it!
            </p>
            <p>
              I somehow got trapped into an engineer head with an artist heart
              for almost 6 years and then I discovered creative development or
              the art of knowing tons of things to apply it in the web; computer
              graphics, animation, math, audio, typography, layouts, I really
              felt like a Renaissance man. Of course, this type of job is only
              needed in creative agencies, where they play with your desire to
              become an artist, selling you that all what you do is creative,
              when it is all bullshit. You do not need the agencies, you just
              need yourself.
            </p>
            <p>
              At 33 years of age I am ashamed to finally discover, that all I
              need is already in me and so it is already in you. Stop perfecting
              and start practicing.
            </p>
          </TextContainer>
        </article>
      </BlogPostWrap>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "prologue" } }],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: { title: "The worst prologue" },
  };
};

export default Cases;
