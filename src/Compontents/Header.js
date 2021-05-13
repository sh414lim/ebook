import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Head=styled.header`
    display:flex;
    flex-direction:column;
    
`;

const List =styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Item=styled.li`


`;
 

const SLink=styled(Link)`
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

        <Item>
            <SLink to="/search">Search</SLink>
        </Item>

        </List>
        </Head>
    )
}

export default Header;