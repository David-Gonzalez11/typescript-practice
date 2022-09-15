const Header = () => {
  return (
   <header>
        <div className="row header">
          <h1>
            Dog Generator
            <a className="home" href="/">
              Home
            </a>
            <a className="favorites-link" href="/favorites">
              Favorites
            </a>
          </h1>
        </div>
      </header>
  )
}
export default Header
