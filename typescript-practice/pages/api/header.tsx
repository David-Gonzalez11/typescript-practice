import React from "react";
import Link from "next/link";
const Header = () => {
  return <header>
    <div className="row header">
      <h1>Dog Generator<a className="home">Home</a>
      {/* <Link> */}
       <a className="favorites-link" href="/favorites">Favorites</a>
      {/* </Link> */}
</h1>
    </div>
  </header>
}

export default Header
