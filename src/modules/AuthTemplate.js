import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;



const AuthTemplate =({children})=>{
    return(
        <Container>
            {children}
        </Container>
    )
}

export default AuthTemplate;