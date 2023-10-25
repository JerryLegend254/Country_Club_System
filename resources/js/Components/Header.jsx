import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: var(--color-grey-0);
    padding: 2.4rem 1.6rem;
    grid-column: 1 / -1;
`;
function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export default Header