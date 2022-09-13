import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import { FaPaw } from "react-icons/fa";

const Home = (res: any) => {
  const [id, setId] = useState(1);

  const [image, handleImage] = useState(
    "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
  );
  function handleClick(res: any): any {
    const fetchPromise = fetch("https://random.dog/woof.json");
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((data) => handleImage(data.url));
  }

  const savedEntries = (): any => {
    let favoriteObject: any = {
      id: id,
      photoUrl: image,
    };
  };


   const [data, setData] = useState({ id: id, photoUrl: image });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(data));
  }, [data]);

  return (
    <>
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
      <div className="container">
        <div className="row generate-img">
          <div className="generate-img">
            <button
              className="bigbutton"
              onLoad={handleClick}
              onClick={handleClick}
            >
              Get Random Dog Image
            </button>
          </div>
        </div>
        <div data-view="home-page" className="row image-container">
          <img src={image} className="image" id="photoUrl" />
          <a href="favorites">
            <i onClick={savedEntries()}>
              <FaPaw />
            </i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
