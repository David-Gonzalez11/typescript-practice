import Header from "./Header";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
const Favorites = () => {
  const [items, setItems] = useState([]);
  const [notes, saveNotes] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const localStore: any = localStorage.getItem("favorites");
    const storedItems = JSON.parse(localStore);
    if (storedItems && items.length === 0) {
      setItems(storedItems);
    }

    // console.log("stored Items", storedItems);
    // console.log("value of url", storedItems.photoUrl);
  }, []);
  const handleDelete = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    console.log(index);
  };
  // on Change for user value
  const onChange = (e: any) => {
    saveNotes(e.target.value);
    console.log(notes);
  };



  const noData = setItems === null ? "No entries recorded" : "Favorites";
  return (
    <div>
      <Header />
      <h2 className="favorites-view-text hidden">{noData}</h2>
      {items.map((img, index) => (
        <>
          <div key={index}>
            <div data-view="favorites" className="favorites row">
              <form className="form">
                <div className="column text-align">
                  <img src={img.photoUrl} />
                  <h2>Notes:</h2>
                  <p id="date">Favorite Created: {img.date}</p>

                  <textarea value={notes} onChange={onChange}>
                    {notes}
                  </textarea>
                  <div>
                    <button className="save-btn">save</button>
                    {/* <FaTrash
                    /> */}
                    {/* <Example className="icon-red"
                      onClick={() => handleDelete(index)}/> */}
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
                        <Button variant="danger" onClick={handleClose}>
                          <span onClick={() => handleDelete(index)}>
                            Delete
                          </span>
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
