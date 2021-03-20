import React from 'react'
import styled from"styled-components"
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import HeaderRight from '@material-ui/icons/HeaderRight';
function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar/>
                <AccessTimeIcon/>
            </HeaderLeft>
            {/* // HeaderSearch */}
            <HeaderSearch>
                <SearchIcon/>
                <input placeholder='Search'/>
            </HeaderSearch>
            {/* // HeaderRight */}
            <HeaderRight>
                <HelpOutlineIcon/>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderRight = styled.div`
cursor: pointer;
flex:0.3;
display:flex;
align-items:flex-end;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}
`;
const HeaderSearch = styled.div`
flex:0.4;
opacity:1;
display:flex;
text-align:center;
background-color:#421f44;
border-radius:6px;
padding:0 50px;
padding:0 50px;
color: gray;
border:1px gray solid;
> input{
    border: none;
    background-color: transparent;
    min-width:30vw;
    outline:none;
    color:white;
    
}

`;

const HeaderContainer = styled.h1` 
color:red;
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack);
color: white;

`;

/* styled.HeaderContainer`background-color:red`; */
const HeaderLeft = styled.div`
display: flex;
align-items: center;
flex: 0.3;
margin-left: 20px;
> .MuiSvgIcon-root {
    margin-right: 30px;
    margin-left:auto;
}
`;

const HeaderAvatar=styled(Avatar)`
:hover{
    opacity:0.8;
}`;
