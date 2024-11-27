import {
  Checkbox,
  Image,
  LargeText,
  Modal,
  ModalBackground,
  ModalContent,
  SmallText,
} from "_shared/ui";
import styled from "styled-components";
import modal1 from "/modal-1.png";
import { PADDING, TOP } from "../lib/constants";
import { useNavigate } from "react-router-dom";
import socialButtons from "/social-buttons.png";
import { IdInstructionsModal } from "_widgets/IdInstructionsModal";
import { useState } from "react";
import { useFreeSpins } from "_features/free-spins";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLazyGetPlayerQuery } from "_entities/player";

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

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
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
      ? "linear-gradient(#959595, #5c5c5c)"
      : "linear-gradient(#68FF3C, #099400)"};
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

const schema = yup
  .object({
    playerId: yup.string().required("Please provide your player ID"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept terms and conditions and privacy policy"),
    age: yup.boolean().oneOf([true], "You must be 18 or older"),
  })
  .required();

export const UserIdModal = () => {
  const [handlePlayer] = useLazyGetPlayerQuery();
  const [isPlayerIdInstruction, setIsPlayerIdInstructions] = useState(false);
  const navigate = useNavigate();
  const _freeSpins = useFreeSpins();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      terms: false,
      age: false,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<{
    playerId?: string;
    terms?: boolean;
    age?: boolean;
  }> = async (data) => {
    try {
      if (!data.playerId) return;
      await handlePlayer(data.playerId);
    } catch (error) {
      console.error(error);
    }
    console.log(data);
    _freeSpins.generateFreeSpins();
  };

  const togglePlayerIdInstructions = () => {
    setIsPlayerIdInstructions(!isPlayerIdInstruction);
  };

  return (
    <Modal>
      <ModalBackground src={modal1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent padding={PADDING} top={TOP}>
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
                      I agree to the{" "}
                      <SmallText
                        textDecoration="underline"
                        onClick={() => navigate("/terms-and-conditions")}
                      >
                        Terms
                      </SmallText>
                      &nbsp;and&nbsp;
                      <SmallText
                        textDecoration="underline"
                        onClick={() => navigate("/privacy-policy")}
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
          <Image src={socialButtons} />
        </ModalContent>
      </form>
    </Modal>
  );
};
