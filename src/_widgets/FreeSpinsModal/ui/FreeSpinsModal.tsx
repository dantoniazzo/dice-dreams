import { Checkbox, Modal } from '_shared/ui';
import styled from 'styled-components';
import modal1 from '/modal-1.png';
import { PADDING, TOP } from '../lib/constants';
import { useNavigate } from 'react-router-dom';
import socialButtons from '/social-buttons.png';

export const Background = styled.img``;

export const Content = styled.div`
  width: calc(100% - ${PADDING * 2}px);
  height: calc(100% - ${TOP} - ${PADDING * 2}px);
  padding: ${PADDING}px;
  position: absolute;
  top: ${TOP};
  left: 0;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1<{ top?: string }>`
  position: relative;
  top: ${(props) => props.top || '0'};
`;

export const IdInput = styled.input``;

export const Text = styled.span`
  text-decoration: underline;
`;

export const Confirmations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const SocialButton = styled.img``;

export const FreeSpinsModal = () => {
  const navigate = useNavigate();
  return (
    <Modal>
      <Background src={modal1} />
      <Content>
        <Title>ENTER YOUR PLAYER ID</Title>
        <IdInput />
        <Text>Where is my Player ID?</Text>
        <Confirmations>
          <Checkbox
            label={
              <>
                I agree to the{' '}
                <Text onClick={() => navigate('/terms-and-conditions')}>
                  Terms
                </Text>
                &nbsp;and&nbsp;
                <Text onClick={() => navigate('/privacy-policy')}>
                  Privacy Policy
                </Text>
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
        <Title top="1rem">NOT A PLAYER YET?</Title>
        <SocialButton src={socialButtons} />
      </Content>
    </Modal>
  );
};
