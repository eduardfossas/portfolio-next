import "../styles/globals.css";
import { useRouter } from "next/router";
import { SmoothScroll } from "components/SmoothScroll";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <SmoothScroll>
      <Component key={router.asPath} {...pageProps} />
    </SmoothScroll>
  );
}

export default MyApp;
