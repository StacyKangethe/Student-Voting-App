import React, { useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", {email, password});
      dispatch(loginSuccess(res.data));
      navigate("/home")
    }catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Student Voting App</Title>
        <SubTitle>Already Registered? Log In</SubTitle>
        <form>
        <Input
          type="email"
          placeholder="email"
          onChange={e=>setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={e=>setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Input
          placeholder="school"
        />
        <Input placeholder="email" onChange={e=>setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={e=>setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;