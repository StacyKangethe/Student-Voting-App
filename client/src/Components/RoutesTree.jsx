import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import ResourcesPage from './Pages/resources/ResourcesPage';
import VotePage from './Pages/vote/VotePage';
import Chat from './Pages/Chat';
import SignIn from './Pages/SignIn';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../utils/Theme";

const Container = styled.div`
  display: flex;
`;

function RoutesTree() {
    return (
        <div>
            <ThemeProvider theme={lightTheme}>
            <Container>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/vote" element={<VotePage />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </Container>
            </ThemeProvider>
        </div>
    );
}

export default RoutesTree;