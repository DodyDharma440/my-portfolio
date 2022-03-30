import styled from "styled-components";

const Section = styled.section`
  padding: ${(p) => p.theme.spacing.xs};
  padding-top: calc(74px + ${(p) => p.theme.spacing.xs});
`;

export default Section;
