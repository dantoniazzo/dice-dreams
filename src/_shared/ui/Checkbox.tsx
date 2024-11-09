import * as RadixCheckbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const StyledRoot = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--background);
  }
`;

export const StyledIndicator = styled(RadixCheckbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const StyledLabel = styled.label`
  color: white;
  padding-left: 15px;
  font-size: 13px;
  line-height: 1;
`;

interface Props {
  label?: React.ReactNode;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: Props) => (
  <Container>
    <StyledRoot
      defaultChecked={props.defaultChecked}
      id="checkbox"
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
    />
    <StyledLabel htmlFor="checkbox">{props.label}</StyledLabel>
  </Container>
);
