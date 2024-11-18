import styled from 'styled-components';

export const PrizeText = styled.h1<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize ?? '32px'};
  background: -webkit-linear-gradient(#f3f045, #ed8532);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LargeText = styled.h1<{ top?: string; fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '32px'};
  position: relative;
  top: ${(props) => props.top || '0'};
`;

export const MediumText = styled.h4<{ textAlign?: string }>`
  font-size: 20px;
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const SmallText = styled.span<{
  textDecoration?: string;
  cursor?: string;
}>`
  text-decoration: ${(props) => props.textDecoration || 'none'};
  cursor: ${(props) => props.cursor};
`;
