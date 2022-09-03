import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import david from "./Img.Container";

const Home: NextPage = () => {
  const handleClick: any =  (event: any) => {

fetch('https://random.dog/woof.json')
.then(res => (res.json()))
  }

  return (
    <>
  <header>
    <div className="row header">
      <h1>Dog Generator<a className="home">Home</a><a className="favorites-link">Favorites</a></h1>
    </div>
  </header>
   <div className="container">
      <div className="row generate-img">
        <div className="generate-img">
          <button className="bigbutton" onLoad={handleClick} onClick={handleClick}>Get Random Dog Image</button>
        </div>
        {/* <div className="lds-spinner hidden">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </div>
      <div data-view="home-page" className="row image-container">
        <img src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" className="image" id="photoUrl"/>
        <i className="fa-solid fa-paw fa-2x icon"></i>
      </div>
      </div>
      {/* <h2 className="favorites-view-text hidden">Favorites</h2> */}

{/* <div data-view="favorites" class="favorites hidden row">
        <form class="form">
          <div>
            <input type="submit" class="save-btn hidden" id="button" value="SAVE">
          </div>
        </form>
      </div>
    </div>
    <div id="overlay" class="hidden overlay">
      <div id="modal" class="hidden">
        <h4>Are you sure you want to delete this entry?</h4>
        <a id="confirm-modal" class="confirm-modal">CONFIRM</a>
        <a id="close-modal-btn" class="close-modal-btn">CANCEL</a>
      </div>
    </div> */}
        </>
  );
};

export default Home;
