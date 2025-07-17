import React from "react";

export default function EagleCoinSite() {
  return (
    <main className="min-h-screen font-sans overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-yellow-100 to-yellow-300 flex flex-col items-center justify-center pt-6 pb-4 px-4 text-center">
  {/* Social Icons */}
  <div className="absolute top-6 right-6 flex flex-col space-y-4">
    <a href="https://t.me/eaglesola" target="_blank" rel="noopener noreferrer">
      <img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8 hover:scale-110 transition" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/icons/x.svg" alt="Twitter (X)" className="w-8 h-8 hover:scale-110 transition" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/icons/birdeye.svg" alt="Birdeye" className="w-8 h-8 scale-150 transform transition" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/icons/dexscreener.svg" alt="Dexscreener" className="w-8 h-8 hover:scale-110 transition" />
    </a>
  </div>

    <h1
        className="text-7xl md:text-9xl font-extrabold mb-12 uppercase tracking-wider flex items-center justify-center gap-8 outlined-text drop-shadow-xl">
        <span>EAGLE</span>
      <img
        src="/eagle_coin new.png"
        alt="Eagle Coin Logo"
        className="w-32 h-32 animate-rotateY drop-shadow-md"
      />
        <span>COIN</span>
    </h1>


        <p className="text-xl font-bold mb-4 md:text-2xl text-gray-700 max-w-2xl">
          EAGLE COIN is a community-driven meme coin soaring with strength, freedom, and fierce potential in the crypto skies.
        </p>
      </section>

      {/* ABOUT */}
      <section className="bg-gradient-to-r from-yellow-500 via-black-500 to-red-500 pt-6 pb-10 px-4 text-center">
  <div className="max-w-4xl mx-auto flex flex-col items-center">
    <img
       src="/eagle new.png"
      alt="Eagle flying"
      className="rounded-xl h-auto mx-auto"
      style={{ width: '42rem' }}
    />



    <div>
      <h2 className="text-6xl font-bold mb-4 text-black-700">What is EAGLE COIN ?</h2>
      <p className="text-gray-700 font-bold mb-4 text-lg leading-relaxed max-w-2xl mx-auto">
        Eagle Coin is a crypto meme born in 2025, featuring a bold gold coin engraved with a fierce eagle, wings wide and gaze forward.
        Inspired by classic power symbols, it quickly spread online as a symbol of digital strength and pride.
        Its clean design and iconic eagle pose made it popular in animations, memes, and Web3 communities.


      </p>
    </div>
  </div>
</section>

      {/* CTA */}
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-yellow-100 via-white to-pink-100">
  <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14 items-start">

    {/* LEFT: WHERE TO BUY */}
    <div className="space-y-5 text-left lg:pr-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 whitespace-nowrap">
     🦅 WHERE TO BUY EAGLE COIN?
      </h3>
     <p className="text-gray-800 leading-relaxed">
        You can buy <strong>$EAGLE Coin</strong> on multiple popular crypto exchanges:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-10">
        <li><strong>KuCoin:</strong> A secure, user-friendly centralized exchange.</li>
        <li><strong>MEXC:</strong> Great liquidity and fast trading.</li>
        <li><strong>Gate.io:</strong> Low fees and global reach.</li>
        <li><strong>Bybit:</strong> Offers leveraged trading and pro tools.</li>
        <li><strong>Crypto.com:</strong> Buy with fiat easily, globally available.</li>
        <li><strong>DEXs:</strong> Use Raydium or Uniswap to trade without intermediaries.</li>
      </ul>
      <div className="bg-yellow-200/80 p-4 rounded-md shadow border border-yellow-300">
        <p className="text-sm font-semibold text-yellow-900">
          🔒 Always double-check exchange links, trading pairs, and keep your tokens in a secure wallet.
        </p>
      </div>
    </div>

    {/* CENTER: VIDEO */}
    <div className="flex justify-center items-start lg:pt-1">
      <video
        src="/videos/eagle reel.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl w-full max-w-md border shadow-lg border-yellow-300"
      />
    </div>

    {/* RIGHT: HOW TO BUY */}
    <div className="space-y-5 text-left lg:pl-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 whitespace-nowrap">
  💡 HOW TO BUY EAGLE COIN?
</h3>
      <ol className="list-decimal pl-5 text-gray-700 space-y-12">
        <li><strong>Select Exchange:</strong> KuCoin, MEXC, Gate.io, etc.</li>
        <li><strong>Create Account:</strong> Register, verify KYC.</li>
        <li><strong>Deposit Funds:</strong> Use bank, card, or crypto.</li>
        <li><strong>Search for $EAGLE:</strong> Find correct trading pair.</li>
        <li><strong>Place Order:</strong> Use Market or Limit order.</li>
        <li><strong>Secure Wallet:</strong> Move tokens to a hardware or software wallet.</li>
        <li><strong>Stay Updated:</strong> Follow Eagle Coin on Telegram, Twitter, Discord.</li>
      </ol>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-white text-gray-500 py-8 text-center text-sm border-t">
        <p>© 2025 EAGLE COIN. All rights reserved.</p>
      </footer>
    </main>
  );
}