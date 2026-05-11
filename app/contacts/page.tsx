import Link from 'next/link';

export default function Contacts() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-10 md:p-20 font-sans">
      <Link href="/" className="text-red-600 hover:underline mb-10 inline-block">← На главную</Link>
      <h1 className="text-4xl font-black mb-12 uppercase italic">Связаться <span className="text-red-600">с нами</span></h1>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
        <div className="p-8 border border-gray-900 rounded-3xl bg-black">
          <div className="text-xs text-gray-600 uppercase mb-2">Email</div>
          <div className="text-xl font-bold">support@dragon-money.io</div>
        </div>
        <div className="p-8 border border-gray-900 rounded-3xl bg-black text-red-600">
          <div className="text-xs text-gray-600 uppercase mb-2 text-red-600/50">Telegram</div>
          <div className="text-xl font-bold">@DragonMoney_Official</div>
        </div>
      </div>
    </main>
  );
}