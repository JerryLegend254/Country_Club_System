import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';
import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
    background-color: var(--color-grey-100);
`;

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`
function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <SideBar />
            <Main><Outlet /></Main>
        </StyledAppLayout>
    );
}

export default AppLayout