import {useState} from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    urlImage: "http://i.imgflip.com/1bij.jpg"
  })

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      urlImage: url
    }));
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button type="button" className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <img src={meme.urlImage} alt="meme" className="meme--image" />
    </main>
  );
}
