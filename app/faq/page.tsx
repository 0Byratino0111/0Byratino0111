import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">
      <Link href="/" className="text-red-600 mb-10 inline-block">← Назад</Link>
      <h1 className="text-5xl font-bold mb-10 uppercase tracking-tighter">Частые вопросы</h1>
      <div className="space-y-6 max-w-2xl">
        <details className="group border-b border-gray-900 pb-4">
          <summary className="text-xl cursor-pointer list-none font-bold group-hover:text-red-600">Как вывести деньги?</summary>
          <p className="mt-4 text-gray-500">Вывод занимает от 5 до 15 минут на любую карту или криптокошелек.</p>
        </details>
        <details className="group border-b border-gray-900 pb-4">
          <summary className="text-xl cursor-pointer list-none font-bold group-hover:text-red-600">Нужна ли верификация?</summary>
          <p className="mt-4 text-gray-500">До 50 000 рублей вывод происходит мгновенно и без документов.</p>
        </details>
      </div>
    </div>
  );
}