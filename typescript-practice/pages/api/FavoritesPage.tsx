import React from "react";
 const Favorites = ()  => {
return (
  <>
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
     <div id="overlay" className="hidden overlay">
       <div id="modal" className="hidden">
         <h4>Are you sure you want to delete this entry?</h4>
         <a id="confirm-modal" className="confirm-modal">CONFIRM</a>
         <a id="close-modal-btn" className="close-modal-btn">CANCEL</a>
       </div>
     </div>
        </>

)
 }
