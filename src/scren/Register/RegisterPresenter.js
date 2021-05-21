import React, { useState } from "react";
import RegisterForm from "../../Form/Register"
import styled from "styled-components";
import {signUp} from "../../firebase_config"
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
function SignUp(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleOnChange =(e)=>{
        const type=e.target.name;
        if(type === "email"){
            setEmail(e.target.value);

        }else if (type ==="password"){
            setPassword(e.target.value);
        }
    };

    const hadleOnSubmit=async (e) =>{
        e.preventDefault();
        if(email !== "" && password !== ""){
            try{
                await signUp(email,password);
            }catch(error){
                console.log(error);
            }
        }
    }

    
    
    return(
        <Container>
        <RegisterForm>
            <Form onSubmit={hadleOnSubmit}>
            <H1>Sign Up</H1>
                <Input type="text" placeholder="ID" name="email" value={email} onChange={handleOnChange} />
                <Input type="password" placeholder="PassWord" name="password" value={password} onChange={handleOnChange} />
                <Input type="password" placeholder="PassWord Check" />
                <Button>Sign up</Button>
            </Form>
        </RegisterForm>
        </Container>
    )
    
    
};

export default SignUp;
