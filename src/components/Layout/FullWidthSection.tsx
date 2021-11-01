import styled from 'styled-components';
import { ILayoutProps } from './types';

const FullWidthSection = styled.section<ILayoutProps>`
  grid-column: 1 / span 16;
  display: grid;
  grid-template-columns: 1fr repeat(14, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: max-content;
  gap: ${(props) => (props.gapDefault ? props.gapDefault : '2rem 2rem')};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-column: 1 / span 14;
    grid-template-columns: 1rem repeat(12, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 1 / span 12;
    grid-template-columns: 1rem repeat(10, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 1 / span 10;
    grid-template-columns: 1rem repeat(8, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-column: 1 / span 6;
    grid-template-columns: 2rem repeat(4, 1fr) 2rem;
    gap: ${(props) => (props.gapMedium ? props.gapMedium : '1rem 1rem')};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }
`;

export { FullWidthSection };
