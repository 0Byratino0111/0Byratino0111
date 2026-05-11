import Link from 'next/link';

export default function Rules() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-10 md:p-20 font-sans">
      <Link href="/" className="text-red-600 hover:underline mb-10 inline-block">← На главную</Link>
      <h1 className="text-4xl font-black mb-8 uppercase italic">Правила <span className="text-red-600 underline">сервиса</span></h1>
      <div className="max-w-3xl space-y-6 text-gray-400 leading-relaxed">
        <p><strong className="text-white">1. Общие положения:</strong> Используя Dragon Money, вы подтверждаете, что вам исполнилось 18 лет.</p>
        <p><strong className="text-white">2. Безопасность:</strong> Мы гарантируем защиту ваших данных согласно лицензии GLH-OCCHKTW0705032021.</p>
        <p><strong className="text-white">3. Выплаты:</strong> Обработка заявок происходит в автоматическом режиме.</p>
      </div>
    </main>
  );
}