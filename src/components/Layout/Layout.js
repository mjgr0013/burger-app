import React from 'react';
import Aux from "../../hoc/Aux";

const Layout = (props) => {
  return (
      <Aux>
        <ul>
          <li>Toolbad</li>
          <li>SideDrawer</li>
          <li>BackDrop</li>
        </ul>

        <main>
          {props.children}
        </main>
      </Aux>
  )
}

export default Layout
