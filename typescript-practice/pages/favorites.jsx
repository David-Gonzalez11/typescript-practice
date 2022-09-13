 const Favorites = ()  => {


return (
  <>
  <header>
    <div className="row header">
      <h1>Dog Generator<a className="home">Home</a>
       <a className="favorites-link" href="/favorites">Favorites</a>
</h1>
    </div>
  </header>
  <div>
    <h2 className="favorites-view-text hidden">Favorites</h2>
        <div data-view="favorites" className="favorites hidden row">
         <form className="form">
           <div>
             <input type="submit" className="save-btn hidden" id="button" value="SAVE"/>
           </div>
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

)
 }
export default Favorites
