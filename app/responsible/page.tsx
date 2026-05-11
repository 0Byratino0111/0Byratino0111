import Link from 'next/link';

export default function Responsible() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-10 md:p-20 font-sans text-center">
      <Link href="/" className="text-red-600 hover:underline mb-10 inline-block">← На главную</Link>
      <h1 className="text-4xl font-black mb-8 uppercase">Ответственная <span className="text-red-600">игра</span></h1>
      <p className="max-w-2xl mx-auto text-gray-500 mb-10">
        Мы заботимся о наших игроках. Помните, что игра — это развлечение, а не способ заработка. 
        Устанавливайте лимиты и играйте с умом.
      </p>
      <div className="inline-block px-8 py-4 border border-red-900/30 rounded-2xl bg-red-950/10 text-red-500 font-bold">
        Нужна помощь? Напишите в нашу службу поддержки.
      </div>
    </main>
  );
}