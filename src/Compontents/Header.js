import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const Head=styled.header`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: fixed;
    height:100vh;
    width:13%;
    box-shadow:5px 3px 2px 1px rgba(20, 20, 20, 0.5);
    background-color:#ecf0f1;
    
`;

const List =styled.ul`
    display:flex;
    flex-direction:column;

    
`;

const Item=styled.li`
    padding-top:50px;
    font-size:20px;
    font-weight:600;
    color:${props=>(props.current ? "green" :"black")};
    transition: color 0.7s ease-in-out;
    &:hover{
        color:green;
    }
`;
 

const SLink=styled(Link)`

`


export default withRouter(({location:{pathname}})=>(
    <>
    <Head>
    <List>

    <Item current={pathname === "/"}>
    <SLink to="/">Home</SLink>
    </Item>

    <Item current={pathname === "/book"}>
    <SLink to="/book" >Book</SLink>
    </Item>

    <Item current={pathname === "/comic"}>
    <SLink to="/comic" >Comic</SLink>
    </Item>

    <Item current={pathname === "/search"}>
        <SLink to="/search" >Search</SLink>
    </Item>

    </List>
    </Head>
    </>
));