import React from "react";
import Form from "../../Form/Song";
import styled from "styled-components";

const Container =styled.div`
padding: 10px;
`;

const SongPresenter =({TopTrack,loading})=>loading ? null :(
    <Container>
        {TopTrack && TopTrack.length > 0 &&(
            <Form title="Top Song">
                
                {TopTrack.map(song=>
                <span>
                    {song.name}
                </span>
                )}
            </Form>
)}
    </Container>
)

export default SongPresenter;