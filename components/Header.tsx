import Link from 'next/link'
import React from 'react';

const linkStyle = {
  marginRight: 15
}

class Header extends React.Component {

  render() {
    return (
        <div>
          <Link href="/">
            <a style={linkStyle}>Home Page</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
          <Link href="/apitest">
            <a style={linkStyle}>Api Test</a>
          </Link>
        </div>
    );
  }

}

export default Header;
