import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";

const Container = styled.article`
  padding: 0 24px;
  max-width: 1024px;
  display: flex;
  position: relative;
  align-items: baseline;
  flex-flow: column;
  margin: 3rem 0;

  ${mediaQueries.m} {
    margin: 6rem auto;
    flex-flow: row;
  }
`;

const IntroDetails = styled.div`
  padding-right: 20px;
  margin-bottom: 2rem;

  ${mediaQueries.m} {
    flex: 1 0 25%;
  }
`;

const IntroText = styled.p`
  font-size: 24px;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0 0 0.75rem;
  }
`;

const EmSpace = styled.strong`
  padding-right: 0.25em;
`;

const Intro = ({ details, description }) => {
  return (
    <Container>
      <IntroDetails>
        <List>
          {details.map(({ title, value }) => {
            return (
              <li key={value} tabIndex={1}>
                <EmSpace>{title}:</EmSpace>
                {value}
              </li>
            );
          })}
        </List>
      </IntroDetails>
      <IntroText tabIndex={1}>{description}</IntroText>
    </Container>
  );
};

export { Intro };
