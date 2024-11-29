import styled from 'styled-components';
import modalCloseButton from '/modal-close-button.png';
import { MOBILE_SIZE } from '_shared/lib';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ModalBackground = styled.img`
  height: 100%;
  @media (max-width: ${MOBILE_SIZE}px) {
    height: 80%;
  }
`;

export const ModalContent = styled.div<{
  padding: string;
  top: string;
  justifyContent?: string;
  alignItems?: string;
}>`
  width: 350px;
  height: 100%;
  padding: ${(props) => props.padding};
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translateX(-50%);
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
