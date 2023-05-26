"use client";

import { useEffect, useState } from "react";
import localforage from "localforage";

let data = "";
const dataSize = 50 * 1024 * 1024;
const possibleChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < dataSize; i++) {
  data += possibleChars.charAt(
    Math.floor(Math.random() * possibleChars.length)
  );
}

export default function Home() {
  const [x, setX] = useState(0);

  const animate = () => {
    setX((x) => (x < 500 ? x + 1 : 0));

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return (
    <main className="p-10 bg-zinc-100 absolute inset-0">
      <button
        onClick={() => {
          // const start = performance.now();
          // while (performance.now() - start < 1000) {
          //   // do nothing
          // }

          const key = generateRandomString();
          localforage.setItem(key, data);
        }}
      >
        Freeze
      </button>

      <span
        className="block absolute  bg-blue-600 p-4 rounded text-white"
        style={{ left: `${x}px`, top: `${x}px` }}
      >
        Hello world
      </span>
    </main>
  );
}

function generateRandomString(): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
