import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

export default function Lab5() {
  const [initialImage, setInitialImage] = useState("");
  const [buttonImage, setButtonImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const res = await axios.get("https://dog.ceo/api/breeds/image/random");
        setInitialImage(res.data.message);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchInitial();
  }, []);

  const handleAxiosButton = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setButtonImage(res.data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Navbar />
      <h1 className="text-2xl font-bold">Lab5 - Axios API</h1>

      {error && <p className="text-red-600">{error}</p>}

      <div>
        <h2>Картинка при відкритті сторінки:</h2>
        {initialImage && (
          <img
            src={initialImage}
            alt="Dog"
            className="w-64 h-64 object-cover"
          />
        )}
      </div>

      <div>
        <h2>Картинка при натисканні кнопки:</h2>
        {buttonImage && (
          <img src={buttonImage} alt="Dog" className="w-64 h-64 object-cover" />
        )}
        <button
          onClick={handleAxiosButton}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Завантажити нову картинку
        </button>
      </div>
    </div>
  );
}
