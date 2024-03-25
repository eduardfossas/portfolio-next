import { motion, useAnimation } from "framer-motion";

import Head from "next/head";
import { Canvas } from "@/components/Three/Canvas";
import { Visual } from "@/components/Three/Visual";
import { useRef } from "react";
import { Environment, Text, View } from "@react-three/drei";
import { MeshBasicMaterial, MeshPhysicalMaterial, Vector3 } from "three";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import Image from "next/image";

export default function Home({}) {
  const containerRef = useRef();
  return (
    <>
      <Head>
        <title>{`Eduard Fossas | Cover Letter Tailwind`}</title>
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
      </Head>

      <main ref={containerRef} className="mx-auto max-w-4xl py-20 px-5">
        <article className="md:flex text-slate-800">
          <header className="sticky top-0 flex-1 shrink-0 basis-1/3.75 mb-5 md:mb-0">
            <h2 className="text-2xl font-semibold leading-none mb-0.5">
              Eduard Fossas
            </h2>
            <p className="text-sm text-slate-500 mb-5">Wearer Of Many Hats</p>
            <p className="mb-5">
              <a href="mailto:eduardfp@gmail.com" className="flex items-center">
                <span>
                  <svg className="w-4 h-4 fill-indigo-500 mr-1">
                    <use xlinkHref="#lnr-envelope"></use>
                  </svg>
                </span>
                eduardfp@gmail.com
              </a>

              <a href="tel:+310682341904" className="flex items-center">
                <span>
                  <svg className="w-4 h-3.5 fill-indigo-500 mr-1">
                    <use xlinkHref="#lnr-phone-handset"></use>
                  </svg>
                </span>
                +310682341904
              </a>
            </p>
            <p>
              Hudsonstraat 45,
              <br />
              Amsterdam, 1057RX
              <br />
              The Netherlands
              <br />
            </p>
          </header>
          <section className="c-text">
            <p>
              <mark className="bg-indigo-600 text-white px-1.5 py-0.5">
                Dear Tailwind Labs Team
              </mark>
            </p>
            <p>
              I am writing to you to express my interest in the Design Engineer
              position. I am convinced this is a one-life-time opportunity to be
              part of a team that is pushing the boundaries of the world wide
              web and bring communities together.
            </p>
            <p>
              My ten years of experience in web technologies could be of
              interest to the team, as I have acquired many skills in all phases
              of web development. I am confident that I can contribute to the
              growth of Tailwind. Furthermore, my background in Printing and
              Graphic Design could be very advantageous for the team.
            </p>
            <figure className="mb-5 w-full">
              <picture className="relative w-full ar-14-9 block">
                <Image
                  src="https://a.storyblok.com/f/167748/940x603/3e62e38c75/icaria-magazine.jpg"
                  alt="Screnshot of a magazine"
                  layout="fill"
                  objectFit="contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </picture>

              <figcaption className="text-slate-500 mt-1 text-sm">
                Icaria Magazine was one of the first professional projects I
                worked on as a Graphic Designer.
              </figcaption>
            </figure>
            <p>
              As an example, I would like to speak about Foam Talent 2021, a
              project that brought together all of my skills and of which I am
              very proud. It was a collaborative effort involving design,
              motion, and development, in which I was able to participate in all
              phases of the project. I was genuinely delighted that the project
              garnered a lot of attention and recognition. However, what still
              brings me the greatest joy is the fact that I enjoyed every day,
              every hour, every minute of the project because I already knew how
              special it was.
            </p>
            <figure className="mb-5">
              <VideoPlayer
                video={
                  "https://a.storyblok.com/f/167748/x/8c320c79ab/foam-talent-awwwards-01.mp4"
                }
              />
              <figcaption className="text-slate-500 mt-1 text-sm">
                Video of Foam Talent 2021 website. You can see it live{" "}
                <a
                  className="underline hover:underline-none inline-flex items-center"
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
            <p>There are five things that really excite me about this role:</p>
            <ul role="list" className="list-disc pl-5 space-y-3 mb-7">
              <li>
                Being part of a team where individuals have many skills and
                where I could take on a variety of responsibilities.
              </li>
              <li>
                Helping people understand simple and/or complex topics through
                design and CSS.
              </li>
              <li>
                Designing and building templates, interactive experiences, and
                sites using Tailwind to showcase the power of the product.
              </li>
              <li>
                Working with animation APIs as well as CSS animations like GSAP,
                Framer Motion, or CSS scroll-driven animations.
              </li>
              <li>I love to learn new skills and tools.</li>
            </ul>
            <p>
              One skill that I always wanted to learn since I was a kid was 3D.
              Funny enough, it was not until 4 years ago that I started
              self-studying computer graphics. I am mentioning this because,
              meanwhile, I was learning, I decided to release my WebGPU engine,
              and I participated actively in the Lygia GLSL library.
              <br /> I am aware that this might be quite off-topic for CSS...Or
              maybe not? Did someone say CSS 3D transforms?
            </p>
            <figure className="mb-5">
              <View style={{ width: "100%", height: 300 }}>
                <Visual />
              </View>
              <figcaption className="text-slate-500 mt-1 text-sm">
                Having fun with computer graphics. Cubes inside cubes inside
                cubes.
              </figcaption>
            </figure>
            <p>
              Last but not least, one of the main reasons I am applying for this
              role is the ability to teach others. As a Lead Developer in a
              digital agency, time is very limited to explain and brief
              developers so they can understand complex topics, and I do not
              think it is fair at all, neither for them nor for me. You need
              time to teach others, and this time is more valuable than the time
              spent producing the product.
            </p>
            <p className="mt-10">
              Sincerely,
              <br /> Eduard Fossas
            </p>
          </section>
        </article>
      </main>
      <Canvas containerRef={containerRef} />
    </>
  );
}
