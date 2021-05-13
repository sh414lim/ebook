import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Head=styled.header``;

const List =styled.ul`
    display: flex;
    flex-direction:column;
    list-style:none;
`;

const Item=styled.li`
display:flex;
align-items:center;
justify-content:center;
font-size:25px;
font-weight:600;
`;
 

const SLink=styled(Link)`
    text-decoration:none;
`


function Header(){
    return(
        <Head>
        <List>

        <Item>
        <SLink to="/">Home</SLink>
        </Item>

        <Item>
        <SLink to="/book">Book</SLink>
        </Item>

        <Item>
        <SLink to="/comic">Comic</SLink>
        </Item>

        </List>
        </Head>
    )
}

export default Header;