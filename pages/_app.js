import "../styles/globals.css";
import { useRouter } from "next/router";
import { SmoothScroll } from "components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <SmoothScroll>
      <Component key={router.asPath} {...pageProps} />
      <Analytics />
    </SmoothScroll>
  );
}

export default MyApp;
