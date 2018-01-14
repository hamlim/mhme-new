import styled from 'react-emotion';
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  responsiveStyle,
  alignItems
} from 'styled-system';

const wrap = responsiveStyle({
  prop: 'wrap',
  cssProperty: 'flexWrap'
});

export const Box = styled.div`
  overflow: hidden;
  ${space} ${width} ${fontSize} ${color} ${textAlign};
`;

export const Flex = styled.div`
  display: flex;
  ${justifyContent} ${wrap};
  ${alignItems};
`;

export const Container = styled.div`
  width: 60rem;
  max-width: 90vw;
  margin: 0 auto;
`;
