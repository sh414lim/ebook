import React from "react";
import styled from "styled-components";

const Container=styled.div`
:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title=styled.span`
    display:flex;
    justify-content:center;
    align-items:center;
     font-size: 50px;
  font-weight: 600;
`;

const Item=styled.div`
        margin-top: 25px;
            display:grid;
            gap:30;
            width:100vw;
            height:100vh;
         grid-template-columns:repeat(2,2fr);
    `;

    const View=styled.span``;



function SongForm({view,title,children}){
    return(
        <Container>
            <Title>{title}</Title>
            <Item>{children}</Item>
            <View>{view}</View>
        </Container>

    )
}

export default SongForm;