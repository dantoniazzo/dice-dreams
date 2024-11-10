import styled from 'styled-components';

export const Image = styled.img<{ cursor?: string }>`
  cursor: ${(props) => props.cursor || 'auto'};
`;
