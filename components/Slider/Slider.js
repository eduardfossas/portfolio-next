import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";

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
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled.div`
  flex: 0 0 65vw;
  margin: 0 5px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 100%;
  }

  ${mediaQueries.m} {
    flex: 0 0 30vw;
  }
`;

const Slider = ({ slides }) => {
  return (
    <Container>
      <SliderScroll>
        {slides.map((el) => {
          return (
            <SliderItem key={el.id} tabIndex={1}>
              <img src={el.filename} />
            </SliderItem>
          );
        })}
      </SliderScroll>
    </Container>
  );
};

export { Slider };
