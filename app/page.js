"use client";

import React, { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [key, setKey] = useState(["", "", "", "", "", ""]);

  const handleEncode = () => {

    if (key.some((k) => k === "")) {
      setOutputText("Please fill all key slots before encoding.");
      return;
    }
    console.log(key)
    let code = key.map( k => k.charCodeAt() )
    
    let numberInput = inputText.split("").map( i => i.charCodeAt())

    console.log(numberInput)
    
    let codedMessage = numberInput.map( i => i + code[0] + code[1] + code[2] + code[3] + code[4] + code[5] )

    codedMessage = codedMessage.map(c => String.fromCharCode(c) )
    codedMessage = codedMessage.join("");
    console.log(codedMessage)

    setOutputText(`${codedMessage} \n with key ${key.join("")}`);
  };

  const handleDecode = () => {
    if (key.some((k) => k === "")) {
      setOutputText("Please fill all key slots before decoding.");
      return;
    }
  
    let code = key.map((k) => k.charCodeAt());
    let numberInput = inputText.split("").map((i) => i.charCodeAt());
  
    console.log(numberInput);
  
    let decodedMessage = numberInput.map(
      (i) => i - (code[0] + code[1] + code[2] + code[3] + code[4] + code[5])
    );
  
    decodedMessage = decodedMessage.map((c) => String.fromCharCode(c));
    decodedMessage = decodedMessage.join("");
    console.log(decodedMessage);
  
    setOutputText(`${decodedMessage} \n with key ${key.join("")}`);
  };

  const handleRandomKey = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomKey = Array(6)
      .fill("")
      .map(() => characters[Math.floor(Math.random() * characters.length)]);
    setKey(randomKey);
  };

  const handleKeyChange = (index, value) => {
    if (value.length <= 1 && /^[a-zA-Z]*$/.test(value)) {
      const newKey = [...key];
      newKey[index] = value.toUpperCase();
      setKey(newKey);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Thieves' Cant Key Coder</h1>
        <p className="text-lg mt-2">Encode messages using a custom key</p>
      </header>

      <main className="w-full max-w-md">
        <textarea
          id="inputText"
          className="w-full p-4 rounded bg-gray-800 text-white mb-4"
          rows="5"
          placeholder="Enter your message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <div className="flex justify-center gap-2 mb-4">
          {key.map((letter, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={letter}
              onChange={(e) => handleKeyChange(index, e.target.value)}
              className="w-10 h-10 text-center bg-gray-800 text-white border border-gray-700 rounded"
            />
          ))}
        </div>

        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRandomKey}
          >
            Random Key
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleEncode}
          >
            Encode
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDecode}
          >
            Decode
          </button>
        </div>

        <textarea
          id="outputText"
          className="w-full p-4 rounded bg-gray-800 text-white"
          rows="5"
          placeholder="Output will appear here..."
          value={outputText}
          readOnly
        ></textarea>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>
          Created with stealth and cunning by{" "}
          <a
            href="https://www.instagram.com/vivianvanillla/"
            className="text-red-400 underline"
          >
            Slink Dink
          </a>
        </p>
      </footer>
    </div>
  );
}