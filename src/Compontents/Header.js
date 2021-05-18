import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const Head=styled.header`
    display:flex;
   height:50px;
   width:100%;
   box-shadow:5px 5px 5px rgba(0,0,0,0.5);
   background-color:black;

`;

const List =styled.ul`

 display:flex;
 justify-content:space-around;
 align-items:center;
 width:100%;
height:50px;
`;

const Item=styled.li`
    font-size:15px;
    font-weight:600;
    color:${props=>(props.current ? "white" :"gray")};
    transition: color 0.7s ease-in-out;
    &:hover{
        color:white;
    }

`;
 

const SLink=styled(Link)`

`


export default withRouter(({location:{pathname}})=>(
    <>
    <Head>
    <List>

    <Item current={pathname === "/"}>
    <SLink to="/">Song</SLink>
    </Item>

    <Item current={pathname === "/albums"}>
    <SLink to="/albums" >Album</SLink>
    </Item>

    <Item current={pathname === "/artist"}>
    <SLink to="/artist" >Artist</SLink>
    </Item>

    <Item current={pathname === "/search"}>
        <SLink to="/search" >Search</SLink>
    </Item>

    
    <Item current={pathname === "/login"}>
        <SLink to="/login" >Login</SLink>
    </Item>

    </List>
    </Head>
    </>
));