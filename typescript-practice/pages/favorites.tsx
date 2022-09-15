import Header from "./Header";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const Favorites = () => {
  const [items, setItems] = useState([]);
  const [notes, saveNotes] = useState()
  const onChange = (e: any) => {
        saveNotes(e.target.value);
        console.log(notes);
    }
  useEffect(() => {
    const localStore: any = localStorage.getItem("favorites");
    const storedItems= JSON.parse(localStore);
    if (storedItems && items.length === 0) {
      setItems(storedItems);
    }

    console.log("stored Items", storedItems);
    console.log("value of url", storedItems.photoUrl);
  }, []);
  //  function submitHandler(e: any) {
  //   e.preventDefault();
  //   console.log('working')
  // }
  const handleDelete  = (index: number) => {
const newItems = [...items]
newItems.splice(index,1)
setItems(newItems)
  }
  return (
    <div>
      <Header />
      <h2 className="favorites-view-text hidden">Favorites</h2>

      {items.map((img, index) => (
        <>
          <div key={index}>
            <div data-view="favorites" className="favorites row">
              <form className="form">
                <div className="column text-align">
                  <img src={img.photoUrl} />
                  <h2>Notes:</h2>
                  <p id="date">Favorite Created:{img.date}</p>

                  <textarea value={notes} onChange={onChange}>{notes}</textarea>
                  <div>
                    <button className="save-btn">save</button>
                    <FaTrash className="icon-red" onClick={() => handleDelete(index)}/>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default Favorites;
