import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: var(--color-grey-0);
    padding: 2.4rem 1.6rem;
    text-align: end;
`;
function Header({user}) {
  return (
    <StyledHeader>{user.name}</StyledHeader>
  )
}

export default Header