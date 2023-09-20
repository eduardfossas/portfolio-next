import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { Header } from "components/Header";

const Cases = () => {
  return (
    <>
      <Head>
        <title>{`Eduard Fossas | `}</title>
      </Head>
      <Header />
      <main></main>
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
    props: {},
  };
};

export default Cases;
