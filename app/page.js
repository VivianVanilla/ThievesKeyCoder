"use client"

import React from 'react';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Thieves' Cant Translator</h1>
        <p className="text-lg mt-2">Decode or encode messages in Thieves' Cant</p>
      </header>

      <main className="w-full max-w-md">
        <textarea
          id="inputText"
          className="w-full p-4 rounded bg-gray-800 text-white mb-4"
          rows="5"
          placeholder="Enter your message here..."
        ></textarea>
        <div className="flex justify-between">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert("Encoding...")}
          >
            Encode
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert("Decoding...")}
          >
            Decode
          </button>
        </div>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>Created with stealth and cunning by ThievesKeyCoder</p>
      </footer>
    </div>
  );
}