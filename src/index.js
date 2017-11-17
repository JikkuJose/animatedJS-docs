import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import "tachyons"
import "styles/tachyons_extended.css"
import "styles/custom.css"
import "styles/fonts.css"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
