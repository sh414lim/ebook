import React from "react";
import styled from "styled-components";

const Container=styled.div`

`;

const Title=styled.span`
 
`;

const Item=styled.div`
    
    `;




function SongForm({title,children}){
    return(
        <Container>
            <Title>{title}</Title>
            <Item>{children}</Item>
        </Container>

    )
}

export default SongForm;