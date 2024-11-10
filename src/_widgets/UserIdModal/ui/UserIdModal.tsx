import {
  Checkbox,
  Image,
  LargeText,
  Modal,
  ModalBackground,
  ModalContent,
  SmallText,
} from '_shared/ui';
import styled from 'styled-components';
import modal1 from '/modal-1.png';
import { PADDING, TOP } from '../lib/constants';
import { useNavigate } from 'react-router-dom';
import socialButtons from '/social-buttons.png';

export const InputContainer = styled.div`
  border: 3px solid black;
  height: 48px;
  width: 77%;
  border-radius: 1000px;
  display: flex;
  overflow: hidden;
`;

export const InputTextContainer = styled.div`
  height: 100%;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 7.5;
`;

export const IdInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 6rem;
  text-align: center;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
`;

export const InputText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.04rem;
  color: #444444;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const GoButton = styled.button`
  background: linear-gradient(#959595, #5c5c5c);
  border: none;
  border-left: 3px solid black;
  font-family: inherit;
  font-size: 1.2rem;
  color: #344767;
  flex: 2.5;
`;

export const Confirmations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const UserIdModal = () => {
  const navigate = useNavigate();
  return (
    <Modal>
      <ModalBackground src={modal1} />
      <ModalContent padding={PADDING} top={TOP}>
        <LargeText>ENTER YOUR PLAYER ID</LargeText>
        <InputContainer>
          <InputTextContainer>
            <InputText>GD</InputText>
            <IdInput />
            <InputText>A</InputText>
          </InputTextContainer>

          <GoButton>GO!</GoButton>
        </InputContainer>
        <SmallText>Where is my Player ID?</SmallText>
        <Confirmations>
          <Checkbox
            label={
              <>
                I agree to the{' '}
                <SmallText
                  textDecoration="underline"
                  onClick={() => navigate('/terms-and-conditions')}
                >
                  Terms
                </SmallText>
                &nbsp;and&nbsp;
                <SmallText
                  textDecoration="underline"
                  onClick={() => navigate('/privacy-policy')}
                >
                  Privacy Policy
                </SmallText>
              </>
            }
            checked={true}
            onChange={() => void 0}
          />
          <Checkbox
            label={<>I confirm that I am 18 or older</>}
            checked={true}
            onChange={() => void 0}
          />
        </Confirmations>
        <LargeText top="1rem">NOT A PLAYER YET?</LargeText>
        <Image src={socialButtons} />
      </ModalContent>
    </Modal>
  );
};
