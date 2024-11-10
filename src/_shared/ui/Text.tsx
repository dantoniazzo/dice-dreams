import styled from 'styled-components';

export const PrizeText = styled.h1<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize ?? '32px'};
  background: -webkit-linear-gradient(#f3f045, #ed8532);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LargeText = styled.h1<{ top?: string }>`
  position: relative;
  top: ${(props) => props.top || '0'};
`;

export const MediumText = styled.h4`
  font-size: 20px;
`;

export const SmallText = styled.span<{ textDecoration?: string }>`
  text-decoration: ${(props) => props.textDecoration || 'none'};
`;
