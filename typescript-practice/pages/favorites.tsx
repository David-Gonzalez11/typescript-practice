import Header from "./Header";
import { useState, useEffect } from "react";
const Favorites = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localStore: any = localStorage.getItem("favorites");
    const storedItems = JSON.parse(localStore);
    if (storedItems && items.length === 0) {
      setItems(storedItems);
    }

    console.log("stored Items", storedItems);
    console.log("value of url", storedItems.photoUrl);
  }, []);
  return (
    <div>
      <Header />
      <h2 className="favorites-view-text hidden">Favorites</h2>

      {items.map((img) => (
        <>
          <div>
            <div data-view="favorites" className="favorites row">
              <form className="form">
                <div className="column text-align">
                  <img src="" />
                  <h2>Notes:</h2>
                  <p>Favorite Created:</p>

                  <textarea></textarea>
                  <div>
                    <button className="save-btn">save</button>
                    <button className="save-btn">trash</button>
                  </div>
                </div>
                <div className="column text-align">
                  <img src={img.photoUrl} />
                  <h2>Notes:</h2>
                  <p>Favorite Created:{img.date}</p>
                  <textarea></textarea>
                  <div>
                    <button className="save-btn">save</button>
                    <button className="save-btn">trash</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ))}
    </div>
    // <>
    //   <Header />
    //   <div>
    //     <h2 className="favorites-view-text hidden">Favorites</h2>
    //     <div data-view="favorites" className="favorites hidden row">
    //       <form className="form">
    //         <div className="column text-align">
    //           <img src=""/>
    //           <h2>Notes:</h2>
    //           <p>Favorite Created:</p>

    //           <textarea></textarea>
    //           <div>
    //             <button className="save-btn">save</button>
    //             <button className="save-btn">trash</button>
    //           </div>
    //         </div>
    //         <div className="column text-align">
    //           <img src={items.photoUrl} />
    //           <h2>Notes:</h2>
    //           <p>Favorite Created:</p>
    //           <textarea></textarea>
    //           <div>
    //             <button className="save-btn">save</button>
    //             <button className="save-btn">trash</button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </>
  );
};
export default Favorites;
