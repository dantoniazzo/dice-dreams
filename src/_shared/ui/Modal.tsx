import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px solid white;
  border-radius: 60px;
`;

export const Modal = (props: React.ComponentProps<'div'>) => {
  return <ModalContainer>{props.children}</ModalContainer>;
};
