import React from "react"

import SiteWrapper from "core/SiteWrapper"
import Header from "./Header"
import One from "./examples/One"

class App extends React.Component {
  render() {
    return (
      <SiteWrapper>
        <Header />
        <One />
      </SiteWrapper>
    )
  }
}

export default App
