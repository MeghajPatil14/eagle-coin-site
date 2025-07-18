import React from "react";

export default function EagleCoinSite() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-rose-100 to-yellow-200 font-sans overflow-x-hidden relative">
      {/* Floating Social Icons */}
      <div className="fixed top-6 right-4 md:right-6 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 z-50">
        <a href="https://t.me/eaglesola" target="_blank" rel="noopener noreferrer">
          <img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8 hover:scale-110 transition-transform duration-300 float-animation" />
        </a>
        <a href="https://x.com/EAGLESOLAN" target="_blank" rel="noopener noreferrer">
          <img src="/icons/x.svg" alt="Twitter (X)" className="w-8 h-8 hover:scale-110 transition-transform duration-300 float-animation" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/icons/birdeye.svg" alt="Birdeye" className="w-8 h-8 hover:scale-110 transition-transform duration-300 float-animation" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/icons/dexscreener.svg" alt="Dexscreener" className="w-8 h-8 hover:scale-110 transition-transform duration-300 float-animation" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
        <h1 className="text-5xl font-extrabold outlined-text mb-2">EAGLE</h1>
        <h2 className="text-4xl font-bold text-red-800 mb-4">COIN</h2>
        <p className="max-w-md text-gray-800 text-sm md:text-base leading-relaxed">
          EAGLE COIN is a community-driven meme coin soaring with strength, freedom, and fierce potential in the crypto skies.
        </p>
      </section>

      {/* Eagle Image + Description */}
      <section className="flex flex-col items-center justify-center px-4 pb-10 text-center">
        <img src="/icons/eagle.png" alt="Eagle Logo" className="w-40 h-40 md:w-52 md:h-52 mb-6 animate-rotateY" />
        <h3 className="text-2xl font-bold text-red-900 mb-2">What is EAGLE COIN?</h3>
        <p className="max-w-md text-sm md:text-base text-gray-700 leading-relaxed">
          Eagle Coin is a crypto meme born in 2025, featuring a bold gold coin engraved with a fierce eagle, wings wide and gaze forward. Inspired by classic power symbols, it quickly spread online as a symbol of digital strength and pride.
        </p>
      </section>

      {/* Where to Buy */}
      <section className="bg-white rounded-3xl shadow-md mx-4 md:mx-10 py-8 px-6 mb-10">
        <h4 className="text-xl font-semibold text-center text-red-900 mb-4">🛒 WHERE TO BUY EAGLE COIN?</h4>
        <p className="text-gray-800 text-sm md:text-base mb-4 text-center">
          You can buy $EAGLE Coin on multiple popular crypto exchanges:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
          <li><strong>KuCoin</strong>: A secure, user-friendly centralized exchange.</li>
          <li><strong>MEXC</strong>: Great liquidity and fast trading.</li>
          <li><strong>Gate.io</strong>: Low fees and global reach.</li>
          <li><strong>Bybit</strong>: Offers leveraged trading and pro tools.</li>
          <li><strong>Crypto.com</strong>: Easy mobile app, globally available.</li>
          <li><strong>DEXs</strong>: Use Raydium or Uniswap to trade without intermediaries.</li>
        </ul>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-3 mt-4 rounded text-sm">
          ⚠️ Always double-check exchange links, trading pairs, and keep your tokens in a secure wallet.
        </div>
      </section>

      {/* Image / Meme Section */}
      <section className="mx-4 md:mx-10 mb-10 text-center">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">📸 Pow: when it comes to EGO...</h4>
        <img src="/icons/eaglefight.jpg" alt="Eagle Fight" className="rounded-xl w-full max-w-md mx-auto shadow-lg" />
      </section>

      {/* How to Buy */}
      <section className="bg-gradient-to-b from-pink-50 to-yellow-100 rounded-3xl shadow-md mx-4 md:mx-10 py-8 px-6 mb-20">
        <h4 className="text-xl font-semibold text-center text-red-900 mb-4">🧭 HOW TO BUY EAGLE COIN?</h4>
        <ol className="list-decimal list-inside text-gray-800 text-sm md:text-base space-y-2">
          <li>Select Exchange: KuCoin, MEXC, Gate.io, etc.</li>
          <li>Create Account: Register, verify KYC.</li>
          <li>Deposit Funds: Use bank, card, or crypto.</li>
          <li>Search for $EAGLE: Find correct trading pair.</li>
          <li>Place Order: Use Market or Limit order.</li>
          <li>Secure Wallet: Move tokens to a hardware or software wallet.</li>
          <li>Stay Updated: Follow Eagle Coin on Telegram, Twitter, Discord.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 py-4">
        © 2025 EAGLE COIN. All rights reserved.
      </footer>
    </main>
  );
}
