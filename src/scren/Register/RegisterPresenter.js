<<<<<<< HEAD
import RegisterForm from "../../Form/Register"
import styled from "styled-components";
const Container =styled.div`
`;

const Form=styled.form` 
`;


const Input=styled.input`
    display:flex;
    width:400px;
    height:80px;
    border:none;
    border-bottom:2px solid rgba(0,0,0,0.3);
    margin-top:20px;
    font-size:20px;
    outline:none;
    &:hover{
        border-bottom:2px solid black;
    }
    &:focus{
        border-bottom:2px solid black;
    }
`;
const H1=styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    font-weight:600;
    margin-bottom:50px;
`;

const Button =styled.button`
    font-size:18px;
    width:90px;
    height:40px;
    margin-top:20px;
    border-radius:5px;
    border:none;
    color:white;
    background-color:black;
    &:hover{
        color:gray;
    }
`;
const RegisterPresenter =()=>{
    return(
        <Container>
        <RegisterForm>
            <Form >
            <H1>Sign Up</H1>
                <Input type="text" placeholder="ID"  />
                <Input type="password" placeholder="PassWord" />
                <Input type="password" placeholder="PassWord Check" />
                <Button>Sign up</Button>
            </Form>
        </RegisterForm>
        </Container>
=======
import React from "react";
import AuthTemplate from "../../modules/AuthTemplate";
import Form from "../../Form/AuthForm"


const RegisterPresenter =()=>{
    return(
        <Form>
            <AuthTemplate/>
        </Form>
>>>>>>> parent of dd95624 (Register Form)
    )
    
    
};

export default RegisterPresenter;
