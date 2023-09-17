import { useGesture } from "@use-gesture/react";
import { useRef } from "react";

import styled from "styled-components";

const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    pointer-events: none;
  }
`;

const Scroll = ({ children }) => {
  const element = useRef();
  let sumDistance = 0;

  useGesture(
    {
      onWheel: (state) => {
        const maxScrollWidth = element.current.scrollWidth - window.innerWidth;

        if (
          !(element.current.scrollLeft >= maxScrollWidth) &&
          state.direction[1] == 1
        ) {
          state.event.preventDefault();
        }

        if (!(element.current.scrollLeft === 0) && state.direction[1] == -1) {
          state.event.preventDefault();
        }

        if (state.axis === "y") {
          element.current.scrollBy({ left: state.delta[1] });
        }
      },
    },
    {
      target: element,
      wheel: { eventOptions: { passive: false } },
    }
  );

  return (
    <Container ref={element} data-lenis-prevent>
      {children}
    </Container>
  );
};

export { Scroll };
