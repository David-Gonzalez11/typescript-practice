import Link from "next/link"

const Header = () => {
  return (
   <header>
        <div className="row header">
          <h1>
            Dog Generator
            <Link href="/">
            <a className="home">
              Home
            </a>
            </Link>
            <Link href="/favorites">
               <a className="favorites-link">
              Favorites
            </a>
            </Link>

          </h1>
        </div>
      </header>
  )
}
export default Header
