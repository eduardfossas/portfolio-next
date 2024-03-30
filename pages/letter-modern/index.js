import Head from "next/head";
import { Canvas } from "@/components/Three/Canvas";
import { TextVisual } from "@/components/Three/TextVisual";
import { useContext, useRef } from "react";
import { View } from "@react-three/drei";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import Image from "next/image";
import { ScrollContext } from "context";
import { motion, transform, useScroll, useTransform } from "framer-motion";
import { Chooser } from "@/components/Chooser";

const Gradient = ({ containerRef, color = "from-red-500" }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center", "0% end"],
  });

  const backgroundColor = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);

  return (
    <motion.div
      style={{ y: backgroundColor }}
      className={`absolute w-full h-[150%] -top-[50%] bg-gradient-to-t ${color} from-80%`}
    ></motion.div>
  );
};

const Test = () => {
  const ref = useRef(null);

  const { addCallback } = useContext(ScrollContext);
  const transformer = transform([0, 1], [1, 0]);

  addCallback(() => {
    const per = (window.scrollY * 100) / ref.current?.clientHeight;

    if (per < 100) {
      ref.current.style.transform = `scale(1, ${transformer(per / 100)})`;
    }
  });

  return (
    <motion.section
      ref={ref}
      className="h-svh p-5 md:p-10 md:pr-0 mb-10 md:mb-20 origin-bottom"
    >
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 39 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M38.2904 4.48295C38.2904 5.45455 38.1015 6.27415 37.7236 6.94176C37.3458 7.60653 36.8358 8.1108 36.1938 8.45455C35.5518 8.79546 34.8358 8.96591 34.0461 8.96591C33.2506 8.96591 32.5319 8.79403 31.8898 8.45028C31.2506 8.10369 30.7421 7.59801 30.3643 6.93324C29.9893 6.26563 29.8018 5.44886 29.8018 4.48295C29.8018 3.51136 29.9893 2.69318 30.3643 2.02841C30.7421 1.3608 31.2506 0.856534 31.8898 0.515625C32.5319 0.171875 33.2506 0 34.0461 0C34.8358 0 35.5518 0.171875 36.1938 0.515625C36.8358 0.856534 37.3458 1.3608 37.7236 2.02841C38.1015 2.69318 38.2904 3.51136 38.2904 4.48295ZM35.8529 4.48295C35.8529 3.96023 35.7833 3.51989 35.6441 3.16193C35.5077 2.80114 35.3046 2.52841 35.0347 2.34375C34.7677 2.15625 34.4381 2.0625 34.0461 2.0625C33.654 2.0625 33.3231 2.15625 33.0532 2.34375C32.7861 2.52841 32.583 2.80114 32.4438 3.16193C32.3074 3.51989 32.2393 3.96023 32.2393 4.48295C32.2393 5.00568 32.3074 5.44744 32.4438 5.80824C32.583 6.16619 32.7861 6.43892 33.0532 6.62642C33.3231 6.81108 33.654 6.90341 34.0461 6.90341C34.4381 6.90341 34.7677 6.81108 35.0347 6.62642C35.3046 6.43892 35.5077 6.16619 35.6441 5.80824C35.7833 5.44744 35.8529 5.00568 35.8529 4.48295Z"
          fill="black"
          transform="scale(1 0.98) translate(0 0.1)"
        />
        <path
          d="M23.3203 8.8466V0.119324H25.6896V6.93751H29.218V8.8466H23.3203Z"
          fill="black"
        />
        <path
          d="M16.4648 8.8466V0.119324H18.8342V6.93751H22.3626V8.8466H16.4648Z"
          fill="black"
        />
        <path
          d="M9 8.8466V0.119324H15.2898V2.02841H11.3693V3.52841H14.9659V5.43751H11.3693V6.93751H15.2727V8.8466H9Z"
          fill="black"
        />
        <path
          d="M0 8.8466V0.119324H2.36932V3.52841H5.50568V0.119324H7.875V8.8466H5.50568V5.43751H2.36932V8.8466H0Z"
          fill="black"
        />
      </motion.svg>
    </motion.section>
  );
};

export default function Home({}) {
  const containerRef = useRef();
  const firstSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <>
      <Head>
        <title>{`Eduard Fossas | Cover Letter Tailwind`}</title>
      </Head>
      <svg hidden>
        <symbol id="lnr-phone-handset" viewBox="0 0 1024 1024">
          <title>phone-handset</title>
          <path
            className="path1"
            d="M819.2 1024c-90.691 0-187.154-25.699-286.706-76.386-91.794-46.736-182.48-113.654-262.258-193.522-79.763-79.853-146.595-170.624-193.272-262.498-50.608-99.61-76.269-196.102-76.269-286.795 0-58.774 54.765-115.55 78.31-137.232 33.85-31.17 87.104-67.568 125.794-67.568 19.245 0 41.803 12.589 70.994 39.616 21.782 20.17 46.27 47.51 70.814 79.067 14.794 19.021 88.592 116.267 88.592 162.917 0 38.27-43.25 64.853-89.037 92.998-17.694 10.875-35.992 22.122-49.226 32.73-14.114 11.315-16.645 17.288-17.061 18.629 48.602 121.128 197.141 269.651 318.203 318.184 1.085-0.341 7.067-2.699 18.592-17.075 10.608-13.234 21.854-31.531 32.73-49.227 28.144-45.789 54.726-89.038 92.998-89.038 46.648 0 143.896 73.798 162.917 88.592 31.557 24.546 58.898 49.032 79.067 70.816 27.029 29.189 39.616 51.747 39.616 70.992 0 38.701-36.378 92.115-67.528 126.099-21.693 23.662-78.491 78.701-137.272 78.701zM204.477 51.203c-13.731 0.262-50.634 17.054-90.789 54.029-38.115 35.099-61.792 73.25-61.792 99.568 0 344.523 423.093 768 767.304 768 26.28 0 64.418-23.795 99.528-62.099 37.003-40.366 53.806-77.413 54.069-91.178-1.662-9.728-28.57-47.563-102.232-104.283-63.322-48.762-114.699-74.886-127.901-75.237-0.925 0.274-6.656 2.467-18.277 17.222-10.104 12.832-20.912 30.418-31.366 47.424-28.683 46.666-55.774 90.744-95.122 90.744-6.336 0-12.597-1.219-18.608-3.624-134.376-53.75-293.31-212.685-347.061-347.061-6.456-16.138-7.485-41.414 24.272-70.184 16.882-15.293 40.25-29.656 62.848-43.546 17.006-10.453 34.59-21.261 47.422-31.366 14.755-11.619 16.95-17.352 17.222-18.277-0.352-13.203-26.475-64.579-75.237-127.902-56.72-73.659-94.554-100.568-104.282-102.23z"
          ></path>
        </symbol>
        <symbol id="lnr-envelope" viewBox="0 0 1024 1024">
          <title>envelope</title>
          <path
            className="path1"
            d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
          ></path>
        </symbol>

        <symbol id="lnr-link" viewBox="0 0 1024 1024">
          <title>link</title>
          <path
            className="path1"
            d="M546.917 665.512c-48.275 0-96.55-18.376-133.301-55.128-9.998-9.997-9.998-26.206 0-36.203s26.205-9.997 36.203 0c53.539 53.541 140.656 53.541 194.197 0l186.166-186.166c53.539-53.539 53.539-140.656 0-194.197-53.541-53.539-140.656-53.538-194.197 0l-157.082 157.083c-9.998 9.997-26.206 9.997-36.203 0-9.998-9.998-9.998-26.206 0-36.205l157.083-157.083c73.502-73.501 193.101-73.501 266.603 0s73.502 193.101 0 266.603l-186.168 186.168c-36.752 36.752-85.027 55.128-133.302 55.128z"
          ></path>
          <path
            className="path2"
            d="M239.717 972.712c-48.275 0-96.55-18.376-133.302-55.128-73.501-73.502-73.501-193.101 0-266.603l186.166-186.166c73.501-73.501 193.101-73.501 266.603 0 9.998 9.998 9.998 26.206 0 36.203-9.997 9.998-26.206 9.998-36.203 0-53.541-53.541-140.656-53.541-194.197 0l-186.165 186.166c-53.539 53.541-53.539 140.656 0 194.197s140.656 53.541 194.195 0l157.083-157.083c9.997-9.997 26.206-9.997 36.203 0 9.998 9.997 9.998 26.206 0 36.203l-157.083 157.083c-36.75 36.752-85.026 55.128-133.301 55.128z"
          ></path>
        </symbol>
      </svg>
      <main ref={containerRef} className="w-full bg-red-500 min-h-screen">
        <Test />
        <section className="mb-10 md:mb-40 p-5 2xl:p-20">
          <article className="text-2xl relative md:text-3xl 2xl:text-4xl">
            <div className="grid grid-cols-12 md:gap-10 mb-10">
              <motion.figure
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-full md:col-start-4 md:col-span-6 md:mb-10"
              >
                <picture className="relative w-full ar-14-9 block">
                  <Image
                    src="https://a.storyblok.com/f/167748/940x603/3e62e38c75/icaria-magazine.jpg"
                    alt="Screnshot of a magazine"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    sizes="100vw"
                    preload="true"
                  />
                </picture>

                <figcaption className="mt-1 leading-tight text-lg">
                  Icaria Magazine was one of the first professional projects I
                  worked on as a Graphic Designer.
                </figcaption>
              </motion.figure>
            </div>
            <div
              ref={firstSectionRef}
              className="grid grid-cols-12 md:gap-10 overflow-hidden relative"
            >
              <p className="col-span-full md:col-start-1 md:col-span-6">
                Dear Tailwind Labs Team.
                <br />I am writing to you to express my interest in the Design
                Engineer position. I am convinced this is a one-life-time
                opportunity to be part of a team that is pushing the boundaries
                of the world wide web and bring communities together.
              </p>
              <p className="col-span-full md:col-start-7 md:col-span-7">
                My ten years of experience in web technologies could be of
                interest to the team, as I have acquired many skills in all
                phases of web development. I am confident that I can contribute
                to the growth of Tailwind. Furthermore, my background in
                Printing and Graphic Design could be very advantageous for the
                team.
              </p>
              <Gradient containerRef={firstSectionRef} />
            </div>
          </article>
        </section>

        <section ref={ref} className="h-[200vh] bg-white">
          <motion.article
            style={{ opacity: scrollYProgress }}
            className="text-2xl md:text-3xl 2xl:text-5xl h-screen flex items-center justify-center md:grid grid-cols-12 gap-10 sticky top-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-5 2xl:leading-[3.5rem] md:p-0 col-span-full md:col-start-3 md:col-span-8 md:text-center"
            >
              As an example, I would like to speak about Foam Talent 2021, a
              project that brought together all of my skills and of which I am
              very proud. It was a collaborative effort involving design,
              motion, and development, in which I was able to participate in all
              phases of the project. I was genuinely delighted that the project
              garnered a lot of attention and recognition. However, what still
              brings me the greatest joy is the fact that I enjoyed every day,
              every hour, every minute of the project because I already knew how
              special it was.
            </motion.p>
          </motion.article>

          <div className="h-screen flex items-center justify-center">
            <figure className="w-fit px-5 m-auto md:px-10">
              <VideoPlayer
                video={
                  "https://a.storyblok.com/f/167748/x/8c320c79ab/foam-talent-awwwards-01.mp4"
                }
                color="red-500"
              />
              <figcaption className="mt-1 leading-tight text-lg">
                Video of Foam Talent 2021 website. You can see it live{" "}
                <a
                  className="underline hover:no-underline inline-flex items-center"
                  href="https://talent2021.foam.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  here
                  <span>
                    <svg className="w-3 h-3 fill-slate-500 mr-1">
                      <use xlinkHref="#lnr-link"></use>
                    </svg>
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="p-5 md:p-10 2xl:p-20 md:mt-20 md:mb-20">
          <article className="grid grid-cols-12 gap-y-5 md:gap-10 text-2xl md:text-3xl 2xl:text-4xl">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:border-b-3 col-span-full origin-left"
            ></motion.div>
            <p className="border-b-3 pb-20 col-span-full md:col-start-1 md:col-span-6 md:border-none md:pb-0 md:whitespace-break-spaces">
              There are five things that {"\n"}really excite me about this role:
            </p>
            <div className="col-span-full md:col-start-7 md:col-span-6">
              <ul
                role="list"
                className="list-none space-y-3 mb-7 marker:text-indigo-600"
              >
                <li className="pb-5">
                  Being part of a team where individuals have many skills and
                  where I could take on a variety of responsibilities.
                </li>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="border-b-3 mt-0 col-span-full origin-left"
                ></motion.div>

                <li className="mt-3 pb-5">
                  Helping people understand simple and/or complex topics through
                  design and CSS.
                </li>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="border-b-3 mt-0 col-span-full origin-left"
                ></motion.div>
                <li className="mt-3 pb-5">
                  Designing and building templates, interactive experiences, and
                  sites using Tailwind to showcase the power of the product.
                </li>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="border-b-3 mt-0 col-span-full origin-left"
                ></motion.div>
                <li className="mt-3 pb-5">
                  Working with animation APIs as well as CSS animations like
                  GSAP, Framer Motion, or CSS scroll-driven animations.
                </li>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="border-b-3 mt-0 col-span-full origin-left"
                ></motion.div>
                <li>I love to learn new skills and tools.</li>
              </ul>
            </div>
          </article>
        </section>
        <section className="bg-white p-5 py-10 2xl:p-20 2xl:pb-96">
          <article className="text-2xl relative md:text-3xl 2xl:text-4xl">
            <div className="grid grid-cols-12 md:gap-10 mb-10">
              <figure className="col-span-full md:col-start-4 md:col-span-6 md:mb-10">
                {/* <View className="relative w-full ar-14-9 block">
                  <TextVisual />
                </View> */}

                <figcaption className="mt-1 leading-tight text-lg">
                  A bit of fractal brownian motion. Why not?
                </figcaption>
              </figure>
            </div>

            <div
              ref={thirdSectionRef}
              className="grid grid-cols-12 md:gap-10 overflow-hidden relative"
            >
              <p className="col-span-full md:col-start-1 md:col-span-6">
                Dear Tailwind Labs Team.
                <br />I am writing to you to express my interest in the Design
                Engineer position. I am convinced this is a one-life-time
                opportunity to be part of a team that is pushing the boundaries
                of the world wide web and bring communities together.
              </p>
              <p className="col-span-full md:col-start-7 md:col-span-7">
                My ten years of experience in web technologies could be of
                interest to the team, as I have acquired many skills in all
                phases of web development. I am confident that I can contribute
                to the growth of Tailwind. Furthermore, my background in
                Printing and Graphic Design could be very advantageous for the
                team.
              </p>
              <Gradient containerRef={thirdSectionRef} color="from-white" />
            </div>
          </article>
        </section>
        {/* <section className="p-5 md:p-10 md:pb-20 2xl:p-20 2xl:pb-40 h-svh">
          <p className="text-2xl md:text-3xl 2xl:text-4xl">
            Last but not least, one of the main reasons I am applying for this
            role is the ability to teach others. As a Lead Developer in a
            digital agency, time is very limited, so it is hard to explain and
            brief developers complex topics. I do not think it is fair at all,
            neither for them nor for me. You need time to teach others, and this
            time is more valuable than the time spent producing the product.
          </p>
        </section> */}
        <Chooser slug="/letter-modern" />
      </main>
      <Canvas containerRef={containerRef} />
    </>
  );
}
