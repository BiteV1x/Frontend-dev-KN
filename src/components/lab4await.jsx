import React, { useState } from "react";
import Navbar from "./navbar";

export default function Lab4await() {
  const [finalMessage, setFinalMessage] = useState("");
  const [error, setError] = useState("");
  const [inputText, setInputText] = useState("");

  const fetchData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!inputText) {
          reject("Будь ласка, введіть текст!");
        } else {
          resolve({ text: inputText, length: inputText.length });
        }
      }, 1000);
    });

  const processData = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Ви ввели: "${data.text}" (довжина: ${data.length} символів)`);
      }, 1000);
    });

  const finalStep = (message) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Фінальний результат: ${message}`);
      }, 1000);
    });

  const handleAsyncAwait = async () => {
    try {
      setError("");
      setFinalMessage("");
      const data = await fetchData();
      const result = await processData(data);
      const final = await finalStep(result);
      setFinalMessage(final);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <section className="flex flex-col items-center gap-4 ">
      <Navbar />
      <h1 className="text-2xl font-bold">Async/Await приклад</h1>

      <input
        type="text"
        placeholder="Введіть текст"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="border px-2 py-1 rounded"
      />

      <button
        onClick={handleAsyncAwait}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Запустити асинхронні проміси
      </button>

      {finalMessage && <p className="text-green-700 mt-2">{finalMessage}</p>}
      {error && <p className="text-red-700 mt-2">{error}</p>}
    </section>
  );
}
