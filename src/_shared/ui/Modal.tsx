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

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  return <ModalContainer>{props.children}</ModalContainer>;
};
