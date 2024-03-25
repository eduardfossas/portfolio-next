import Lenis from "@studio-freight/lenis";
import { useRef, forwardRef, useEffect } from "react";
import { ScrollContext } from "context";
import { cubicBezier } from "framer-motion";

const callbacks = new Set();

const onScroll = () => {
  callbacks.forEach((callback) => {
    callback();
  });
};

const ScrollProvider = ({ children, isStop }) => {
  const scroll = useRef();
  const animationId = useRef();
  const addCallback = (callback) => {
    callbacks.add(callback);
  };

  const removeCallback = (callback) => {
    callbacks.delete(callback);
  };

  useEffect(() => {
    scroll.current = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // lerp: 0.09,
    });

    const animate = (time) => {
      scroll.current.raf(time);
      animationId.current = window.requestAnimationFrame(animate);
    };

    animationId.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationId.current);
      scroll.current.off("scroll", onScroll);
      animationId.current = null;
      scroll.current.destroy();
      scroll.current = null;
    };
  }, []);

  useEffect(() => {
    if (!scroll.current) return;

    scroll.current.on("scroll", onScroll);

    return () => {
      if (scroll.current) scroll.current.off("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isStop) {
      scroll.current.stop();
    } else {
      scroll.current.start();
    }
  }, [isStop]);

  return (
    <ScrollContext.Provider value={{ scroll, addCallback, removeCallback }}>
      {children}
    </ScrollContext.Provider>
  );
};

const Scroll = (props, ref) => <ScrollProvider forwardedRef={ref} {...props} />;

export default forwardRef(Scroll);
