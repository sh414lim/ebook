import React from "react";
import styled from "styled-components";

const Container=styled.div`
border-radius:30px;
box-shadow:6px 6px rgba(20,20,20,0.3), -1em 0 .4em rgba(20,20,20,0.5);
background-color:white;
width:90vw;
height:1000vh;
margin-left:80px;
margin-top:30px;
`;

const Title=styled.span`
 display:flex;
  justify-content:center;
  align-items:center;
  font-size:30px;
  font-weight:600;
  margin-top:20px;
  padding:20px;
`;

const Item=styled.ul`
    display:block;
    margin-left:50px;
    `;

const List=styled.li`
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(2,1fr);
    grid-gap:30px;
    margin-top:50px;
    font-weight:600;
`;




function ArtistForm({title,children}){
    return(
        <Container>
            <Title>{title}</Title>
            <Item>
              <List>{children}</List>
                </Item>
        </Container>

    )
}

export default ArtistForm;