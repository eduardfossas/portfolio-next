import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";
import Image from "next/image";
import { Scroll } from "components/Scroll";

const Container = styled.article`
  width: 100%;
  overflow: hidden;
  margin: 6rem 0 4vh;

  ${mediaQueries.m} {
    margin: 6rem 0 0;
  }
`;

const SliderScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const SliderItem = styled.div`
  flex: 0 0 65vw;
  margin: 0 5px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${mediaQueries.m} {
    flex: 0 0 30vw;
  }
`;

const Slider = ({ slides }) => {
  return (
    <Container>
      <Scroll>
        <SliderScroll>
          {slides.map((el) => {
            return (
              <SliderItem key={el.id} tabIndex={1}>
                <Image
                  alt={el.alt || "Coming soon"}
                  src={el.filename}
                  layout="responsive"
                  width="1920"
                  height="1440"
                  sizes="65vw"
                  quality="100"
                  priority="true"
                />
              </SliderItem>
            );
          })}
        </SliderScroll>
      </Scroll>
    </Container>
  );
};

export { Slider };
