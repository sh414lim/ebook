import React from "react";
import Form from "../../Form/Albums";
import styled from "styled-components";
import {Link} from "react-router-dom"


const Container =styled.div``;

const SLINK=styled(Link)`
font-size: 13px;
cursor: pointer;
`;

const Span=styled.span`
font-size: 23px;
&:hover{
    font-size:28px;
    transition: font-size 0.5s ease-in-out;
}
`;


const Album =({toptags,loading})=>loading ? null : (
        <Container>
            {toptags && toptags.length > 0 && (
                <Form title="Album Rank">
                    {toptags.map(album=>
                        <Span>
                            {album.name}<br/>
                            <SLINK to={album.url}>❔</SLINK>
                        </Span>
                        )}
                </Form>
            )}
        </Container>
    )

export default Album;