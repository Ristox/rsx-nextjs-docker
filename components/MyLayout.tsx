import Header from './Header'
import React from "react";

const layoutStyle = {
  margin: 7,
  padding: 7,
  border: '1px solid #DDD'
}

const contentStyle = {
  marginLeft: 100,
  marginBottom: 20,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <div style={contentStyle}>
      {props.children}
    </div>

  </div>
)

export default Layout;
