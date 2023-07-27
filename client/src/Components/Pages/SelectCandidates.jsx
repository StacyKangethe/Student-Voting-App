import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: coral;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const SelectCandidates = () => {
  return (
    <Container>
        <Title>President</Title>
    </Container>
  )
}

export default SelectCandidates