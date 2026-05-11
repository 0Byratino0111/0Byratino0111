import Link from 'next/link';

export default function LiveWins() {
  const wins = [
    { user: "ivan_**", amount: "₽45,000", game: "Gates of Olympus", time: "2 мин. назад" },
    { user: "crypto_king", amount: "₽120,500", game: "Sweet Bonanza", time: "5 мин. назад" },
    { user: "dragon_slayer", amount: "₽8,200", game: "Plinko", time: "12 мин. назад" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-20 font-sans">
      <Link href="/" className="text-red-600 hover:text-red-400 transition-colors">← На главную</Link>
      <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-10 mb-16 uppercase">
        Live <span className="text-red-600">Выигрыши</span>
      </h1>
      
      <div className="grid gap-4 max-w-3xl">
        {wins.map((win, i) => (
          <div key={i} className="flex justify-between items-center p-6 bg-black border border-gray-900 rounded-2xl hover:border-red-600/50 transition-all">
            <div>
              <div className="text-lg font-bold">{win.user}</div>
              <div className="text-sm text-gray-500">{win.game}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-green-500">{win.amount}</div>
              <div className="text-[10px] uppercase text-gray-700">{win.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}