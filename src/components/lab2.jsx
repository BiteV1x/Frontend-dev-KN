import React, { useState } from "react";
import Navbar from "./navbar";

export default function Lab2({ name, value, expression, items }) {
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [showBlock, setShowBlock] = useState(true);

  const handleChangeStyles = () => {
    if (window.confirm("Змінити стилі?")) {
      setHighlight(!highlight);
    }
  };

  const handleToggleBlock = () => {
    if (window.confirm("Показати/сховати блок?")) {
      setShowBlock(!showBlock);
    }
  };

  return (
    <section
      className={`w-full  flex flex-col items-center justify-center gap-6 ${
        highlight ? "bg-yellow-200" : ""
      }`}
    >
      <Navbar />
      <div>
        <h1 className="text-3xl">Імʼя з пропса: {name}</h1>
      </div>
      <div>
        <h2 className="text-xl">Число з пропса: {value}</h2>
      </div>
      <div>
        <p className="text-lg">Результат виразу: {expression}</p>
      </div>

      <div>
        <h3>Список з пропса:</h3>
        <ul className="list-disc pl-3 list-inside">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <input
          type="text"
          className="border px-2 py-1"
          placeholder="Введіть текст"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <p className="mt-2 text-lg">Ви ввели: {inputText}</p>
      </div>

      {/* Зміна числового значення */}
      <div className="flex flex-col items-center">
        <p className="text-xl">Лічильник: {counter}</p>
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          +1
        </button>
      </div>

      {/* Кнопки з confirm */}
      <div className="flex gap-4">
        <button
          onClick={handleChangeStyles}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Змінити стилі
        </button>

        <button
          onClick={handleToggleBlock}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Показати / Сховати блок
        </button>
      </div>

      {/* Блок що ховається */}
      {showBlock && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p>Цей блок можна сховати або показати</p>
        </div>
      )}
    </section>
  );
}
