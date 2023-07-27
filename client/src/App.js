import React from 'react';
import LabelBottomNavigation from './Components/tab/Tabs';
import RoutesTree from './Components/RoutesTree';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from "./utils/Theme";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <React.Fragment>
          <CssBaseline />
            <div className='homeContainer'>
              <div className="App">
                <RoutesTree />
                <LabelBottomNavigation />
              </div>
            </div>
        </React.Fragment>
      </Container>
    </ThemeProvider>
  );
}

export default App;
