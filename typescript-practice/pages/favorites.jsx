import Home from "./index";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";
const Favorites = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites"));
    if (items) {
      setItems(items);
    }
    console.log("value of url", items[1].photoUrl);
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
            {/* <div className="column text-align">
              <img className="dom-image" src={items.photoUrl} />
            </div>
            <h2 className="text-align">NOTES:</h2>
            <div>
              <div className="text-align">
                <textarea className="text-area"></textarea>
                <div>
                <button className="save-btn">Save</button>
                </div>
              </div>
              <div>

              </div> */}
              {/* <input type="submit" className="save-btn hidden" id="button" value="SAVE"/> */}
            {/* </div> */}
          </form>
        </div>
      </div>
      {/* <div id="overlay" className="hidden overlay">
       <div id="modal" className="hidden">
         <h4>Are you sure you want to delete this entry?</h4>
         <a id="confirm-modal" className="confirm-modal">CONFIRM</a>
         <a id="close-modal-btn" className="close-modal-btn">CANCEL</a>
       </div>
     </div> */}
    </>
  );
};
export default Favorites;
