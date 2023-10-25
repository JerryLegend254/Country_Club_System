import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
`
function HomeScreen() {
    const [name, setName] = useState("Jeremy")
    return (
        <Container>
            <p >This is the home page{name}</p>
            
        </Container>
    )
}

export default HomeScreen
