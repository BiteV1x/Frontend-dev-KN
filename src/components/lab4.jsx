import React, { useState } from "react";
import Navbar from "./navbar";

export default function Lab4() {
  const [finalMessage, setFinalMessage] = useState("");
  const [error, setError] = useState("");

  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ userId: 1, name: "Андрій" });
      }, 1000);
    });

  const processData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data) reject("Немає даних для обробки");
        else resolve(`Користувач: ${data.name}, ID: ${data.userId}`);
      }, 1000);
    });

  const finalStep = (message) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Фінальний результат: ${message}`);
      }, 1000);
    });

  const handleThen = () => {
    fetchData()
      .then((data) => processData(data))
      .then((result) => finalStep(result))
      .then((final) => setFinalMessage(final))
      .catch((err) => setError(err));
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <Navbar />
      <h1>Приклад промісів через .then()</h1>
      <button
        onClick={handleThen}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Запустити проміси (.then)
      </button>

      {finalMessage && <p className="text-green-700">{finalMessage}</p>}
      {error && <p className="text-red-700">{error}</p>}
    </section>
  );
}
