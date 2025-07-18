import React from "react";

export default function EagleCoinSite() {
  return (
    <main className="min-h-screen font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-white via-yellow-100 to-yellow-300 flex flex-col items-center justify-center pt-10 pb-8 px-4 text-center">
        {/* Social Icons */}
        <div className="fixed top-6 right-4 md:right-6 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 z-50">
          <a href="https://t.me/eaglesola" target="_blank" rel="noopener noreferrer">
            <img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://x.com/EAGLESOLAN" target="_blank" rel="noopener noreferrer">
            <img src="/icons/x.svg" alt="Twitter (X)" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/birdeye.svg" alt="Birdeye" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/dexscreener.svg" alt="Dexscreener" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>


        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 uppercase tracking-wider flex items-center justify-center gap-6 flex-wrap outlined-text drop-shadow-xl">
          <span>EAGLE</span>
          <img src="/eagle_coin new.png" alt="Eagle Coin Logo" className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 animate-rotateY drop-shadow-md" />
          <span>COIN</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-semibold">
          EAGLE COIN is a community-driven meme coin soaring with strength, freedom, and fierce potential in the crypto skies.
        </p>
      </section>

      {/* ABOUT */}
      <section className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-red-400 pt-10 pb-14 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">
          <img
            src="/eagle new.png"
            alt="Eagle flying"
            className="rounded-xl w-full max-w-3xl mx-auto"
          />

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">What is EAGLE COIN?</h2>
            <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Eagle Coin is a crypto meme born in 2025, featuring a bold gold coin engraved with a fierce eagle, wings wide and gaze forward.
              Inspired by classic power symbols, it quickly spread online as a symbol of digital strength and pride.
              Its clean design and iconic eagle pose made it popular in animations, memes, and Web3 communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-yellow-100 via-white to-pink-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* WHERE TO BUY */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-900">🦅 WHERE TO BUY EAGLE COIN?</h3>
            <p className="text-gray-800 leading-relaxed">
              You can buy <strong>$EAGLE Coin</strong> on multiple popular crypto exchanges:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-4">
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

          {/* VIDEO */}
          <div className="flex justify-center items-start">
            <video
              src="/videos/eagle reel.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full max-w-sm border shadow-lg border-yellow-300"
            />
          </div>

          {/* HOW TO BUY */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-900">💡 HOW TO BUY EAGLE COIN?</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-4">
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
      <footer className="bg-white text-gray-500 py-6 text-center text-sm border-t">
        <p>© 2025 EAGLE COIN. All rights reserved.</p>
      </footer>
    </main>
  );
}