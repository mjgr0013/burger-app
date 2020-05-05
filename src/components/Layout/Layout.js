import React from 'react';
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
      <Aux>
        <ul>
          <li>Toolbad</li>
          <li>SideDrawer</li>
          <li>BackDrop</li>
        </ul>

        <main className={classes.Content}>
          {props.children}
        </main>
      </Aux>
  )
}

export default Layout
