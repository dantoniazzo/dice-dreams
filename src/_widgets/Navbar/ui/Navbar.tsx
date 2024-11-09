import styled from 'styled-components';
import logo from '/logo.png';
import hamburger from '/hamburger.png';
import { PADDING } from '../lib/constants';

const NavbarContainer = styled.div`
  width: calc(100% - ${PADDING * 2}px);
  margin: ${PADDING}px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img``;

const Hamburguer = styled.img``;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} />
      <Hamburguer src={hamburger} />
    </NavbarContainer>
  );
};
