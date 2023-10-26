import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';
import React from 'react'
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
function AppLayout({user,  children }) {
    return (
        <StyledAppLayout>
            <SideBar />
            <Header user={user} />
            <Main>{children}</Main>
        </StyledAppLayout>
    );
}

export default AppLayout