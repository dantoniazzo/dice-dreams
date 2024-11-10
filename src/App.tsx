import styled from 'styled-components';
import background from '/background.jfif';
import { Navbar } from '_widgets/Navbar';
import { Game } from '_widgets/Game';
import { Redeem } from '_features/redeem';
import { BrowserRouter as Router } from 'react-router-dom';

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
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  overflow-y: auto;
`;
function App() {
  return (
    <Router>
      <AppContainer>
        <Blur />
        <Content className="no-scrollbar">
          <Navbar />
          <Game />
          {/* <Redeem /> */}
        </Content>
      </AppContainer>
    </Router>
  );
}

export default App;
