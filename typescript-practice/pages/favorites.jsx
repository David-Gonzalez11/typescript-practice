import Home from "./index";
var FA = require('react-fontawesome')

import { useState, useEffect } from "react";
const Favorites = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites"));
    if (items) {
      setItems(items);
    }
    console.log("value of url", items.photoUrl);
  }, []);
  return (
    <>
      <header>
        <div className="row header">
          <h1>
            Dog Generator<a className="home">Home</a>
            <a className="favorites-link" href="/favorites">
              Favorites
            </a>
          </h1>
        </div>
      </header>
      <div>
        <h2 className="favorites-view-text hidden">Favorites</h2>
        <div data-view="favorites" className="favorites hidden row">
          <form className="form">
            <div className="column text-align">
              <img className="dom-image" src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png'/>
            </div>
            <h2 className="text-align">NOTES:</h2>
            <div>
              <div className="text-align">
                <textarea className="text-area"></textarea>
                <div>
                <button className="save-btn">Save</button>
                <i>Trash Icon</i>
                </div>
              </div>
              <div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};
export default Favorites;
