import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Header from "./api/header";
import { FaPaw } from "react-icons/fa";

const Home = (res: any) => {
  const [image, handleImage] = useState('')
  function handleClick(res: any): any {
    const fetchPromise = fetch("https://random.dog/woof.json")
    fetchPromise.then(response => {
      return response.json()
    }).then(data => handleImage(data.url))

  }

  return (
    <>
      <Header />
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
          <img

            src={image}
            className="image"
            id="photoUrl"
          />
          <i>
            <FaPaw />
          </i>
        </div>
      </div>

    </>
  );
};

export default Home;
