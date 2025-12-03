import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

export default function Lab5() {
  const [initialImage, setInitialImage] = useState("");
  const [buttonImage, setButtonImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!res.ok) throw new Error("Помилка при отриманні даних");
        const data = await res.json();
        setInitialImage(data.message);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchInitial();
  }, []);

  const handleFetchButton = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!res.ok) throw new Error("Помилка при отриманні даних");
      const data = await res.json();
      setButtonImage(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Navbar />
      <h1 className="text-2xl font-bold">Lab5 - Fetch API</h1>

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
          onClick={handleFetchButton}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Завантажити нову картинку
        </button>
      </div>
    </div>
  );
}
