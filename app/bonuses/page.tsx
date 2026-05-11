import Link from 'next/link';

export default function Bonuses() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-10 font-sans">
      <Link href="/" className="text-red-600 mb-10 inline-block hover:underline">← Назад на главную</Link>
      <h1 className="text-5xl font-bold mb-8">ЭКСКЛЮЗИВНЫЕ БОНУСЫ</h1>
      <div className="grid gap-6">
        <div className="p-6 border border-red-900/30 bg-black rounded-2xl">
          <h2 className="text-2xl font-bold text-red-600">+500% К ДЕПОЗИТУ</h2>
          <p className="text-gray-400">Доступно только при регистрации сегодня.</p>
        </div>
        <div className="p-6 border border-gray-800 bg-black rounded-2xl">
          <h2 className="text-2xl font-bold text-white">100 БЕСПЛАТНЫХ СПИНОВ</h2>
          <p className="text-gray-400">Промокод: DRAGON2026</p>
        </div>
      </div>
    </div>
  );
}