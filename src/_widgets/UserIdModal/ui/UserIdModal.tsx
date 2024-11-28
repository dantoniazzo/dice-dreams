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
import { useNavigate } from 'react-router-dom';
import googlePlay from '/google-play.png';
import appStore from '/app-store.png';
import { IdInstructionsModal } from '_widgets/IdInstructionsModal';
import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLazyGetPlayerQuery } from '_entities/player';
import { useAppDispatch, setPlayerId } from '_app/redux';
import { IErrorResponse } from '_shared/model/types';

export const InputContainer = styled.div`
  border: 3px solid black;
  height: 48px;
  width: 77%;
  border-radius: 1000px;
  display: flex;
  overflow: hidden;
`;

export const EmptySpaceOnTop = styled.div`
  height: 25%;
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

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
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
  background: ${(props) =>
    props.disabled
      ? 'linear-gradient(#959595, #5c5c5c)'
      : 'linear-gradient(#68FF3C, #099400)'};
  border: none;
  border-left: 3px solid black;
  font-family: inherit;
  font-size: 1.2rem;
  color: #344767;
  flex: 2.5;
  cursor: pointer;
`;

export const Confirmations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const AppsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AppLink = styled.a``;

export const EmptySpaceOnBottom = styled.div``;

const schema = yup
  .object({
    playerId: yup.string().required('Please provide your player ID'),
    terms: yup
      .boolean()
      .oneOf([true], 'You must accept terms and conditions and privacy policy'),
    age: yup.boolean().oneOf([true], 'You must be 18 or older'),
  })
  .required();

export const UserIdModal = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [handlePlayer] = useLazyGetPlayerQuery();
  const [isPlayerIdInstruction, setIsPlayerIdInstructions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      terms: false,
      age: false,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<{
    playerId?: string;
    terms?: boolean;
    age?: boolean;
  }> = async (data) => {
    if (!data.playerId) return;
    dispatch(setPlayerId(data.playerId));
    const response = await handlePlayer(data.playerId, true);
    if (response.error) {
      setErrorMsg((response.error as IErrorResponse).data.detail);
    }
  };

  const togglePlayerIdInstructions = () => {
    setIsPlayerIdInstructions(!isPlayerIdInstruction);
  };

  return (
    <Modal>
      <ModalBackground src={modal1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent padding={'0'} top={'0'}>
          <EmptySpaceOnTop />
          <LargeText>ENTER YOUR PLAYER ID</LargeText>
          <Controller
            name="playerId"
            control={control}
            render={({ field }) => (
              <InputContainer>
                <InputTextContainer>
                  <InputText>GD</InputText>
                  <IdInput type="text" {...field} />
                  <InputText>A</InputText>
                </InputTextContainer>

                <GoButton type="submit" disabled={!formState.isValid}>
                  GO!
                </GoButton>
              </InputContainer>
            )}
          ></Controller>
          {errorMsg && (
            <SmallText textAlign="center" color="red">
              {errorMsg}
            </SmallText>
          )}
          <SmallText
            onClick={togglePlayerIdInstructions}
            textDecoration="underline"
            cursor="pointer"
          >
            Where is my Player ID?
          </SmallText>
          <IdInstructionsModal
            open={isPlayerIdInstruction}
            setOpen={setIsPlayerIdInstructions}
          />
          <Confirmations>
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
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
                  checked={field.value}
                  onChange={field.onChange}
                />
              )}
            ></Controller>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <Checkbox
                  label={<>I confirm that I am 18 or older</>}
                  checked={field.value}
                  onChange={field.onChange}
                />
              )}
            ></Controller>
          </Confirmations>
          <LargeText top="1rem">NOT A PLAYER YET?</LargeText>
          <AppsContainer>
            <AppLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.superplaystudios.dicedreams&pli=1"
            >
              <Image cursor="pointer" src={googlePlay} />
            </AppLink>
            <AppLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/us/app/dice-dreams/id1484468651"
            >
              <Image cursor="pointer" src={appStore} />
            </AppLink>
          </AppsContainer>

          <EmptySpaceOnBottom />
        </ModalContent>
      </form>
    </Modal>
  );
};
