import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="headerRow">
          <input
            id="hamburger"
            type="checkbox"
            className="hamburger-checkbox"/>
          <label className="hamburgerLabel" for="hamburger">
            <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
          </label>

          <Grid className="header-grid">
            <a href="http://technigo.io">Technigo</a>
            <a href="http://technigo.io">Boot Camp</a>
            <a href="http://technigo.io">Stories</a>
            <a href="http://technigo.io">About</a>
          </Grid>
        </div>
      </header>
    )
  }

}

export default Header
