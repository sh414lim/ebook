import React from "react";
import AuthForm from "../../Form/AuthForm"
import styled from "styled-components";
import {Link} from "react-router-dom";
import Google from "../../Form/google";

const Container =styled.div`
`;

const Form =styled.form`
`;

const Input=styled.input`
    display:flex;
    width:400px;
    height:60px;
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
font-size:30px;
font-weight:600;
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

const SLink=styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:200px;
    font-size:20px;
    font-weight:500;
    &:hover{
        color:gray;
    }

`;




const RegisterPresenter =()=>{
    return(
        <Container>
            <AuthForm>
            <Form>
            <H1>Login</H1>
                <Input type="text" placeholder="User Name" />
                <Input type="password" placeholder="User password" />
            <Button>Login</Button>
            </Form>
            <SLink to="register">Sign Up</SLink>
            <Google/>
            </AuthForm>
        
        </Container>
        )
}

export default RegisterPresenter;
