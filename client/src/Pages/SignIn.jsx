import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 3px solid;
  border-color: var(--main);
  padding: 20px 50px;
  gap: 10px;
  background-color: black;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: white;
`;

const Input = styled.input`
  border: 1px solid;
  border-radius: 3px;
  border-color: var(--main);
  padding: 10px;
  background-color: white;
  width: 100%;
  color: black;
`;

const Button = styled.button`
  border-radius: 3px;
  border: 2px solid;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  border-color: var(--main);
  color: black;
  margin: 20px;
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: black;
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Top = styled.div`
  margin-top: 200px;
  `;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    try{
      const res = await axios.post("/auth/signin", {name, password})
      dispatch(loginSuccess(res.data));
      navigate("/")
    }catch(err){
      dispatch(loginFailure())
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerStart())
    try{
      const res = await axios.post("/auth/signup", {name, email, password})
      dispatch(registerSuccess(res.data));
      navigate("/")
    }catch(err){
      dispatch(registerFailure())
    }
  };

  return (   
    <>
   <Top />
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign In</Button>
        <SubTitle>Or</SubTitle>
        <Title>Sign Up</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Sign Up</Button>
      </Wrapper>
    </Container>
   </> 
  );
};

export default SignIn;
