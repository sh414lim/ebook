import React from "react";
import Form from "../../Form/Artist";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container=styled.div`
`;
const P=styled.p`
font-size: 12px;
color:black;
color: rgba(0,0,0,0.5);
&:hover{
    font-size:15px;
    transition: font-size 0.5s ease-in-out;
    color:black;
}
`;

const Span=styled.span`
font-size: 25px;

&:hover{
    font-size:30px;
    transition: font-size 0.5s ease-in-out;
  
}
`;


const ArtistPresenter=({TopArtist,loading})=>loading ? null:(
    <Container>
        {TopArtist && TopArtist.length > 0 && (
            <Form title="Top Artist">
                {TopArtist.map(artist=>
                    <Span>
                        #{artist.name}<br/>
                       <P>playcount: {artist.playcount}<br/>
                      Listeners: {artist.listeners}
                      </P>
                      {artist.image.array}
                    
                    </Span>
                    )}
            </Form>
        )}
    </Container>
)

export default ArtistPresenter;