import React from "react";
import Form from "../../Form/Artist";
import styled from "styled-components";

const Container=styled.div``;


const ArtistPresenter=({TopArtist,loading})=>loading ? null:(
    <Container>
        {TopArtist && TopArtist.length > 0 && (
            <Form title="Top Artist">
                {TopArtist.map(artist=>
                    <span>
                        {artist.name}
                    </span>
                    )}
            </Form>
        )}
    </Container>
)

export default ArtistPresenter;