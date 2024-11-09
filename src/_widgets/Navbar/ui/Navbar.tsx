import styled from 'styled-components';
import logo from '/logo.png';

const NavbarContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 16px;
`;

const Logo = styled.img``;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} />
    </NavbarContainer>
  );
};
