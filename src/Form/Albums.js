import React from "react";
import styled from "styled-components";

const Container=styled.div`

`;

const Title=styled.span`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:30px;
  font-weight:600;
  margin-top:20px;
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




function AlbumForm({title,children}){
    return(
        <Container>
            <Title>{title}</Title>
            <Item>
              <List>{children}</List>
                </Item>
        </Container>

    )
}

export default AlbumForm;