import React from 'react'
import styled from 'styled-components';
const SidebarOption = ({Icon, title, AddChannelOption}) => {
    return (
        <SidebarOptionContainer>
            {Icon &&<Icon fontSize="small" style={{padding:10}}/>}
            {Icon ? (
               <h3> {title}</h3>
            ):(
                <SidebarOptionChannel>

                <span>#</span> {title}
                </SidebarOptionChannel>
            )}
            
        </SidebarOptionContainer>
    );
};

export default SidebarOption;
const SidebarOptionContainer =styled.div`
display:flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover{
opacity: 0.9;
background-color: #340e36;
};
> h3{
    font-weight: 500;
};
`;
const SidebarOptionChannel = styled.div``;