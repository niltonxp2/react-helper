import styled from 'styled-components';
import { ILayoutProps } from './types';

const MaxWidthSection = styled.section<ILayoutProps>`
  grid-column: 2 / span 14;
  display: grid;
  grid-template-columns: repeat(14, minmax(auto, 4.2rem));
  grid-template-rows: max-content;
  gap: ${(props) => (props.gapDefault ? props.gapDefault : '2rem 2rem')};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-column: 2 / span 12;
    grid-template-columns: repeat(12, 1fr);
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 2 / span 10;
    grid-template-columns: repeat(10, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 2 / span 8;
    grid-template-columns: repeat(8, 1fr);
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-column: 2 / span 4;
    grid-template-columns: repeat(4, 1fr);
    gap: ${(props) => (props.gapMedium ? props.gapMedium : '1rem 1rem')};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }
`;

export { MaxWidthSection };
