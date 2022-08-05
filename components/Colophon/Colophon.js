import styled from "styled-components";
import mediaQueries from "styles/mediaQueries";
import { SrOnly } from "components/SrOnly";

const Container = styled.article`
  margin: 0;
  max-width: 1024px;
  text-align: left;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  display: none;

  ${mediaQueries.m} {
    margin: 10rem auto;
    text-align: center;
    display: block;
  }
`;

const ExtLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 700;

  span {
    display: inline-block;
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &:hover {
    span {
      transform: translateX(3px);
    }
  }

  ${mediaQueries.m} {
    color: #222;
    position: initial;
    background: none;
    padding: 0;
  }
`;

const Colophon = ({ title, text, link }) => {
  return (
    <Container>
      <p>{title}</p>
      <ExtLink
        href={link}
        tabIndex={1}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SrOnly>{title} clicking this link </SrOnly>
        {text}
        <span aria-hidden="true">--&gt;</span>
      </ExtLink>
    </Container>
  );
};

export { Colophon };
