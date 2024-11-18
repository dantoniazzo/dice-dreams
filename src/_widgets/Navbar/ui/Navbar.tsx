import styled from 'styled-components';
import logo from '/logo.png';
import hamburger from '/hamburger.png';
import { PADDING } from '../lib/constants';
import { Image } from '_shared/ui';
import { useSliderMutation } from '_features/slider-mutation';

export const SmallLogo = styled.img`
  width: 177px;
  height: 100px;
`;

const NavbarContainer = styled.div`
  width: calc(100% - ${PADDING * 2}px);
  margin: ${PADDING}px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = () => {
  const _sliderMutation = useSliderMutation();
  return (
    <NavbarContainer>
      <SmallLogo src={logo} />
      <Image
        onClick={_sliderMutation.openSlider}
        cursor="pointer"
        src={hamburger}
      />
    </NavbarContainer>
  );
};
