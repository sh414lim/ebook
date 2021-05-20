import React from "react";
import AuthForm from "../../Form/AuthForm"
import styled from "styled-components";
import {Link} from "react-router-dom";

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


const RegisterPresenter =()=>{
    return(
        <Container>
            <AuthForm>
            <Form>
            <H1>Login</H1>
                <Input type="text" placeholder="User Name" />
                <Input type="password" placeholder="User password" />
            </Form>
            </AuthForm>
        
        </Container>
        )
}

export default RegisterPresenter;
