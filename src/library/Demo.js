import React from "react"
import styled from "styled-components"

function Demo({ children, height }) {
  return (
    <Container height={height}>
      {children}
    </Container>
  )
}

const Container = styled.div.attrs({
  className: "pa2 inset1 br2 relative flex",
})`
  height: ${p => p.height}rem;
`

export default Demo
