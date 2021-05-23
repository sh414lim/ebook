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


const SideHead=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    background-color:black;
   width:6vw;
   height:13vh;
   border-radius:20px;
   margin-top:8px;
   margin-left:5px;
   box-shadow:3px 2px rgba(20,20,20,0.3), 1em 0 .4em rgba(20,20,20,0.2);
`
const SideList=styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const SLogin=styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
font-weight:600;
padding:10px;
color:${props=>(props.current ? "white" :"gray")};
&:hover{
    color:white;
    transition: color 0.7s ease-in-out;
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

    <Item current={pathname === "/poster"}>
        <SLink to="/poster" >Poster</SLink>
    </Item>

    </List>
    </Head>
    <SideHead>
        <SideList>

    <SLogin current={pathname === "/login"} >
        <SLink to="/login" >Login</SLink>
    </SLogin>

    <SLogin current={pathname === "/register"} >
        <SLink to="/register" >Sign Up</SLink>
    </SLogin>
    </SideList>
    </SideHead>


    </>
));