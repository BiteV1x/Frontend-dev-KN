import React, { useEffect, useState } from "react";

export default function Lab6Local() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("myLocal");
    if (saved) setText(saved);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem("myLocal", value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Lab6 - Local Storage</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border px-2 py-1"
        placeholder="Введіть текст"
      />
      <p className="mt-2">
        {text ? `Збережено: ${text}` : "Інформації поки немає"}
      </p>
    </div>
  );
}
