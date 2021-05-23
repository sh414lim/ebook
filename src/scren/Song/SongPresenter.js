import React from "react";
import Form from "../../Form/Song";
import styled from "styled-components";

const Container =styled.div`
padding: 10px;

`;

const P=styled.p`
font-size: 13PX;
color:rgba(0,0,0,0.5);
&:hover{
font-size: 15px;

}
`;

const H3=styled.h3`
font-size: 17px;
padding: 10px;
`;

const Span =styled.span`
font-size: 20px;
`;


const SongPresenter =({TopTrack,loading})=>loading ? null :(
    <Container>
        {TopTrack && TopTrack.length > 0 &&(
            <Form title="Top Song">
                {TopTrack.map(song=>
                <Span>
                    #Title:{song.name}<br/>
                   <H3>#Artist:{song.artist.name}</H3>
                    <P>playcount:{song.playcount}</P>
                    <P>listeners:{song.listeners}</P>
                </Span>
                )}
            </Form>
            
)}
    </Container>
)

export default SongPresenter;