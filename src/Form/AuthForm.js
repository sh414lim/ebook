import React from "react";
import styled from "styled-components";



const Container=styled.div`
  
`;

const AuthForm=({children})=>{
    return(
        <Container>
            {children}
        </Container>
    );
};

export default AuthForm;