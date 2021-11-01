import styled from 'styled-components';
import { IRowProps } from './types';

const Row = styled.div<Partial<IRowProps>>`
  grid-column-start: ${(props) => props.xxls || 1};
  grid-column-end: span ${(props) => props.xxle || 14};

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-column-start: ${(props) => props.xls || 1};
    grid-column-end: span ${(props) => props.xle || 12};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column-start: ${(props) => props.lgs || 1};
    grid-column-end: span ${(props) => props.lge || 10};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column-start: ${(props) => props.mds || 1};
    grid-column-end: span ${(props) => props.mde || 8};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column-start: ${(props) => props.sms || 1};
    grid-column-end: span ${(props) => props.sme || 6};
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-column-start: ${(props) => props.xss || 1};
    grid-column-end: span ${(props) => props.xse || 4};
  }
`;

export { Row };
