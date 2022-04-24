import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    urlImage: "http://i.imgflip.com/1bij.jpg",
  });

  console.log(meme.topText, meme.bottomText);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      urlImage: url,
    }));
  }

  function handleChanges(event) {
    const {name, value} = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleChanges}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={handleChanges}
          value={meme.bottomText}
        />
        <button type="button" className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.urlImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
