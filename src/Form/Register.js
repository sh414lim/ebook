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
    height:600px;
    margin-left:31%;
    margin-top:150px;
    box-shadow:6px 6px rgba(20,20,20,0.3), 1em 0 .4em rgba(20,20,20,0.2);
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