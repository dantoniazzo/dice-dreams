import styled from "styled-components";
import background from "/background.jfif";
import { Navbar } from "_widgets/Navbar";
import { Game } from "_widgets/Game";
import { BrowserRouter as Router } from "react-router-dom";
import { Redeem } from "_features/redeem";
import { useAppSelector } from "_app/redux";
import { useEffect } from "react";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  backdrop-filter: blur(4px);
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  overflow-y: auto;
`;
function App() {
  const isRedeem = useAppSelector((state) => state.main.isRedeem);

  function saveAudio() {
    window.__WHEEL_CLICK_AUDIO__ = new Audio("/wheel-spin-click.wav");
  }
  useEffect(() => {
    saveAudio();
  }, []);

  return (
    <Router>
      <AppContainer>
        <Blur />
        <Content className="no-scrollbar">
          {isRedeem ? (
            <Redeem />
          ) : (
            <>
              <Navbar />
              <Game />
            </>
          )}
        </Content>
      </AppContainer>
    </Router>
  );
}

export default App;
