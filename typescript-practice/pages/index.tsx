import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import { FaPaw } from "react-icons/fa";
import Header from "./Header";
import { Favorites } from "../interfaces";
import axios from "axios";

const Home = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState<Favorites[]>([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(data));
  }, [data]);

  const [image, handleImage] = useState(
    "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
  );
  function handleClick(): any {
    const fetchPromise = axios.get("https://random.dog/woof.json");
    fetchPromise
      // .then((response) => {
      //   return response.json();
      // })
      .then(({ data }) => handleImage(data.url))
      .catch((error) => console.error(error));
  }
  const savedEntries = () => {
    let favoriteObject: Favorites = {
      id: id,
      photoUrl: image,
      date: new Date().toString(),
      notes: "",
    };
    console.log(favoriteObject);
    setData([favoriteObject, ...data]);
    setId(id + 1);
    alert("You saved a favorite!");
    handleImage(
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row generate-img">
          <div className="generate-img">
            <button className="bigbutton" onClick={handleClick}>
              Get Random Dog Image
            </button>
          </div>
        </div>
        <div className="row image-container">
          <img src={image} className="image" id="photoUrl" />
          <a>
            <i onClick={savedEntries}>
              <FaPaw />
            </i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
