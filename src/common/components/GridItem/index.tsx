import styled, { Size } from "styled-components";

type Span = number | string;

type SizeKey = keyof Size;

export type GridItemProps = {
  [k in SizeKey]?: Span;
};

const GridItem = styled.div<GridItemProps>`
  ${(p) =>
    p.xs &&
    `  @media ${p.theme.breakpoints.down.xs} {
    grid-column: span ${p.xs};
  }`}
  ${(p) =>
    p.sm &&
    `  @media ${p.theme.breakpoints.down.sm} {
    grid-column: span ${p.sm};
  }`}
    ${(p) =>
    p.md &&
    `  @media ${p.theme.breakpoints.down.md} {
    grid-column: span ${p.md};
  }`}
    ${(p) =>
    p.lg &&
    `  @media ${p.theme.breakpoints.down.lg} {
    grid-column: span ${p.lg};
  }`}
    ${(p) =>
    p.xl &&
    `  @media ${p.theme.breakpoints.down.xl} {
    grid-column: span ${p.xl};
  }`}
`;

export default GridItem;
