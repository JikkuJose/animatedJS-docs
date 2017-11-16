import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function OverlayFrame(props) {
  const { hasMask } = props

  return hasMask ? (
    <Wrapper>
      <Container {...props} />
    </Wrapper>
  ) : (
    <Container {...props} />
  )
}

export default OverlayFrame

OverlayFrame.defaultProps = {
  hasMask: false,
}

OverlayFrame.propTypes = {
  hasMask: PropTypes.bool,
}

const Wrapper = styled.div.attrs({
  className: "fixed bg-black-80 ca",
})`
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Container = styled.div.attrs({
  className: "absolute",
})`
  top: ${p => (p.top ? p.top : "auto")};
  right: ${p => (p.right ? p.right : "auto")};
  left: ${p => (p.left ? p.left : "auto")};
  bottom: ${p => (p.bottom ? p.bottom : "auto")};
  width: ${p => (p.width ? p.width : "auto")};
`
