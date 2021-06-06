import React from "react";
import styled from "styled-components";



const Container=styled.div`
`;

const Loginbox =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:30px;
    background-color:white;
    width:750px;
    height:450px;
    margin-left:31%;
    margin-top:250px;
`;

const Title= styled.span``;


const AuthForm=({title,children})=>{
    return(
        <Container>
            <Title>{title}</Title>
            <Loginbox>
                {children}
            </Loginbox>
        </Container>
    );
};

export default AuthForm;