import styled from 'styled-components';
import background from '/background.jfif';
import { Navbar } from '_widgets/Navbar';

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
  left: 0;
  top: 0;
`;
function App() {
  return (
    <AppContainer>
      <Blur />
      <Content>
        <Navbar />
      </Content>
    </AppContainer>
  );
}

export default App;
