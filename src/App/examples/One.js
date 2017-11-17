import React from "react"
import styled from "styled-components"
import Animated from "animated/lib/targets/react-dom"

import NestedContainer from "core/NestedContainer"

import Demo from "library/Demo"
import Markdown from "library/Markdown"

function One() {
  return (
    <NestedContainer>
      <Markdown light>
        {intro}
      </Markdown>
      <Demo height={5}>
        <Move>
          <BlueBox />
        </Move>
      </Demo>
      <Markdown>
        {code}
      </Markdown>
      <Markdown>
        {usage}
      </Markdown>
    </NestedContainer>
  )
}

export default One

class Move extends React.Component {
  state = {
    anim: new Animated.Value(46),
  }

  render() {
    return (
      <Animated.div style={{ position: "absolute", left: this.state.anim }}>
        {this.props.children}
      </Animated.div>
    )
  }
}

const BlueBox = styled.div.attrs({
  className: "h3 w3 bg-blue br1",
})``

const intro = `
<br />
Animations have for a long time been a weak point of the React ecosystem. The Animated library aims at solving this problem. It embraces the declarative aspect of React and obtains performance by using raw DOM manipulation behind the scenes instead of the usual diff.

### Animated.Value

The basic building block of this library is Animated.Value. This is a variable that's going to drive the animation. You use it like a normal value in style attribute. Only animated components such as Animated.div will understand it.
`

const code = `
\`\`\`js
class Move extends Component {
  state = {
    anim: new Animated.Value(46),
  }

  render() {
    return (
      <Animated.div style={{
        position: "absolute",
        left: this.state.anim
      }}>
        {this.props.children}
      </Animated.div>
    )
  }
}
\`\`\`
`

const usage = `
\`\`\`js
<Move>
  <BlueBox />
<Move>
\`\`\`
`
