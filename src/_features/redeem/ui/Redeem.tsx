import logo from '/logo.png';
import girlGizmo from '/girl-gizmo.png';
import getButton from '/get-button.png';
import styled from 'styled-components';

export const RedeemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const BigLogo = styled.img`
  aspect-ratio: auto;
  width: 100%;
  max-height: ${window.innerHeight}px;
  object-fit: contain;
`;

export const Left = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem;

  @media (max-width: 960px) {
    flex: 1;
    margin-bottom: 0;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex: 4;

  @media (max-width: 960px) {
    align-items: flex-start;
    margin-top: 0;
  }
`;

export const GirlGizmo = styled.img`
  aspect-ratio: auto;
  width: 100%;
  max-height: ${window.innerHeight}px;
  object-fit: contain;
  @media (max-width: 960px) {
    flex-direction: column;
    width: 70%;
  }
`;

export const GetButton = styled.img`
  cursor: pointer;
  aspect-ratio: auto;
  width: 40%;
  object-fit: contain;
`;

export const Redeem = () => {
  return (
    <RedeemContainer>
      <Left>
        <BigLogo src={logo} />
        <GetButton src={getButton} />
      </Left>
      <Right>
        <GirlGizmo src={girlGizmo} />
      </Right>
    </RedeemContainer>
  );
};
