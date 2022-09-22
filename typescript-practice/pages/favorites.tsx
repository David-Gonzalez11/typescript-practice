import Header from "./Header";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Favorites} from '../interfaces';
import { log } from "console";

const Favorites = () => {
  const [items, setItems] = useState<Favorites[]>([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const localStore: any = localStorage.getItem("favorites");
    const storedItems = JSON.parse(localStore);
    if (storedItems && items.length === 0) {
      setItems(storedItems);
    }

    // console.log("stored Items", storedItems[2].id);
    // console.log("value of url", storedItems[2].photoUrl);
  }, []);
  const handleDelete = (id: number) => {
    console.log
    const newItems = [...items];
        console.log('newItems',newItems)

    const indexToDelete = newItems.findIndex((item)=> item.id === id);
    console.log('index del', indexToDelete)

    newItems.splice(indexToDelete, 1);
    setItems(newItems);

    console.log('newItems',newItems)
    handleClose();
  };
    const onUpdateNote = (index: number) => (e: React.SyntheticEvent)=> {
    console.log(index, e.target.value);
    const updatedItems = items.map((item: Favorites)=> {
      if(item.id === index){
        return {...item, notes: e.target.value}
      }
      return item;
    })
        setItems(updatedItems)

   if(updatedItems){
   }
  };

  // on Change for user value
  const onSave = (index: number) => (e: React.SyntheticEvent) =>{
    e.preventDefault();
    localStorage.setItem("favorites", JSON.stringify(items));
  };



  const noData = setItems === null ? "No entries recorded" : "Favorites";
  return (
    <div>
      <Header />
      <h2 className="favorites-view-text hidden">{noData}</h2>
      <form className="form">
      {items.map((item, index) => (
        <div key={item.id}>
          <div data-view="favorites" className="favorites row">
              <div className="column text-align">
                <img src={item.photoUrl} />
                <h2>Notes:</h2>
                <p id="date">Favorite Created: {item.date}</p>

                <textarea onBlur={onUpdateNote(item.id)} defaultValue={items[index].notes}>

                </textarea>
                <div>
                  <button onClick={onSave(item.id)} className="save-btn">save</button>

                  <FaTrash onClick={handleShow} className="icon-red">
                    Delete Entry
                  </FaTrash>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure you want to delete this favorite?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(item.id)}>
                        <span>
                          Delete
                        </span>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
          </div>
        </div>
      ))}
      </form>
    </div>
  );
};
export default Favorites;
