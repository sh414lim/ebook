import React from "react";
import Form from "../../Form/Albums";
import styled from "styled-components";

const Container =styled.div``;



const Album =({toptags,loading})=>loading ? null : (
        <Container>
            {toptags && toptags.length > 0 && (
                <Form title="Album Rank">
                    {toptags.map(album=>
                        <span>
                            {album.name}
                        </span>
                        )}
                </Form>
            )}
        </Container>
    )

export default Album;