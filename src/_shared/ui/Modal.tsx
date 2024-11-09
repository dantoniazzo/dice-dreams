import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 60px;
  position: relative;
`;

export const Modal = (props: React.ComponentProps<'div'>) => {
  return <ModalContainer>{props.children}</ModalContainer>;
};
