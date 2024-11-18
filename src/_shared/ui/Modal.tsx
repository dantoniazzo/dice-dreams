import styled from 'styled-components';
import modalCloseButton from '/modal-close-button.png';

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

export const ModalBackground = styled.img``;

export const ModalContent = styled.div<{
  padding: number;
  top: string;
  justifyContent?: string;
  alignItems?: string;
}>`
  width: ${(props) => `calc(100% - ${props.padding * 2}px)`};
  height: ${(props) => `calc(100% - ${props.top} - ${props.padding * 2}px)`};
  padding: ${(props) => props.padding}px;
  position: absolute;
  top: ${(props) => props.top};
  left: 0;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent ?? 'space-between'};
  align-items: ${(props) => props.alignItems ?? 'center'};
`;

interface ModalCloseButtonProps {
  align: 'start' | 'end';
  onClick?: () => void;
}

export const ModaCloseButtonContainer = styled.div<ModalCloseButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => `flex-${props.align}`};
  cursor: pointer;
`;

export const ModalCloseButtonImg = styled.img``;

export const ModalCloseButton = (props: ModalCloseButtonProps) => {
  return (
    <ModaCloseButtonContainer {...props}>
      <ModalCloseButtonImg src={modalCloseButton} />
    </ModaCloseButtonContainer>
  );
};

export const Modal = (props: React.ComponentProps<'div'>) => {
  const { children, ...rest } = props;
  return <ModalContainer {...rest}>{children}</ModalContainer>;
};

export interface ModalProps {
  open?: boolean;
  setOpen: (open: boolean) => void;
  ref?: React.RefObject<HTMLDivElement>;
}
