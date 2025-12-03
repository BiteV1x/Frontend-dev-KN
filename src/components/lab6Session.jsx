import React, { useEffect, useState } from "react";

export default function Lab6Session() {
  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");

  useEffect(() => {
    // При відкритті сторінки
    const saved = sessionStorage.getItem("mySession");
    if (saved) setText(saved);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    sessionStorage.setItem("mySession", value);
    // Показуємо відразу збережене значення
    const saved = sessionStorage.getItem("mySession");
    setSavedText(saved);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Lab6 - Session Storage</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border px-2 py-1"
        placeholder="Введіть текст"
      />
      <p className="mt-2">
        {text ? `Введене: ${text}` : "Інформації поки немає"}
      </p>
      <p className="mt-1 text-gray-600">
        Збережене у sessionStorage: {savedText}
      </p>
    </div>
  );
}
