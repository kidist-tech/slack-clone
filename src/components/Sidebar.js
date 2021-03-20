import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DragtsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import  FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
    return (
       <SidebarContainer>
<SidebarHeader>
    <SidebarInfo>
<h2>group3</h2>
<h3>
    
    <FiberManualRecordIcon/>
    kidist
    </h3>
    </SidebarInfo>
    <CreateIcon/>
</SidebarHeader>
<SidebarOption Icon={InsertCommentIcon} title="threads"/>
<SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
<SidebarOption Icon={DragtsIcon} title="Saved items"/>
<SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
<SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
<SidebarOption Icon={AppsIcon} title="Apps"/>
<SidebarOption Icon={FileCopyIcon} title="File browser"/>
<SidebarOption Icon={ExpandLessIcon} title="Show less"/>
<hr/>
<SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
<hr/>
<SidebarOption Icon={AddIcon} AddChannelOption title="Add Channel"/>
       </SidebarContainer>
    );
}

export default Sidebar;
const SidebarContainer = styled.div`
flex:0.3;
background-color:var(--slack);
color: white;
border-top:1px solid #49274b;
max-width: 260px;
margin-top:60px;
> hr{

}
`;

const SidebarHeader = styled.div`
display:flex;
border-bottom:1px solid #49274b;
padding:13px;
justify-content:space-between;
>.MuiSvgIcon-root{
    padding:8px;
    color:var(--slack);
    font-size:18px;
    border-radius:50%;
    background-color:white;
}
`;
const SidebarInfo = styled.div`
>h2{
font-size:15px;
font-weight:900;
margin-bottom: 5px;
}
>h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items:center;
}
> h3> .MuivSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;


