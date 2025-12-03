import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Lab6Cookie() {
  const [cookies, setCookie] = useCookies(["myCookie"]);
  const [text, setText] = useState("");

  useEffect(() => {
    // При відкритті сторінки читаємо кукі
    if (cookies.myCookie) {
      setText(cookies.myCookie);
    }
  }, [cookies]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // Створюємо/оновлюємо кукі
    setCookie("myCookie", value, { path: "/", maxAge: 7 * 24 * 60 * 60 });
    // maxAge = 7 днів
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Lab6 - Cookie (react-cookie)</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border px-2 py-1"
        placeholder="Введіть текст"
      />
      <p className="mt-2">
        {text ? `Збережено у кукі: ${text}` : "Інформації поки немає"}
      </p>
    </div>
  );
}
