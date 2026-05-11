'use client';
import React, { useState, useEffect } from 'react';

const DragonHero = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Добавляем фоновое красное свечение, чтобы картинка не казалась плоской */}
    <div className="absolute w-[70%] h-[70%] bg-red-600/20 blur-[120px] rounded-full animate-pulse" />
    
    {/* Основное изображение из твоего пути /public/images/dragon.png */}
    <img 
      src="/images/dragon.png" 
      alt="Dragon Money" 
      className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-transform duration-700 hover:scale-105"
    />
  </div>
);
// ─── ДАННЫЕ ─────────────────────────────────────────────────────────────────
const STREAMERS = [
  { name: 'LUDOJOP',   platform: 'Twitch',  viewers: 4821 },
  { name: 'Danzlve',   platform: 'Twitch',  viewers: 2340 },
  { name: 'Mellstroy', platform: 'Kick',    viewers: 12400 },
  { name: 'Screamy',   platform: 'Twitch',  viewers: 980 },
  { name: 'Kashan',    platform: 'YouTube', viewers: 3150 },
];

const GAMES = [
  { name: 'Gates of Olympus',    provider: 'Pragmatic Play', rtp: '96.5%', tag: 'Топ',      icon: '⚡' },
  { name: 'Sweet Bonanza',       provider: 'Pragmatic Play', rtp: '96.4%', tag: 'Хит',      icon: '🍭' },
  { name: 'Dragon Inhouse',      provider: 'Original',       rtp: '99.0%', tag: 'Эксклюзив',icon: '🐉' },
  { name: 'Wanted Dead or Wild', provider: 'Hacksaw',        rtp: '96.3%', tag: 'Хит',      icon: '🤠' },
  { name: 'Razor Shark',         provider: 'Push Gaming',    rtp: '96.7%', tag: 'Топ',      icon: '🦈' },
  { name: 'Money Train 3',       provider: 'Relax Gaming',   rtp: '96.5%', tag: 'Мега',     icon: '🚂' },
  { name: 'Dog House',           provider: 'Pragmatic Play', rtp: '96.5%', tag: 'Слот',     icon: '🐶' },
  { name: 'Reactoonz',           provider: 'Play\'n GO',     rtp: '96.5%', tag: 'Классика', icon: '👾' },
];

// Инициалы для аватара стримера
const Initials = ({ name, seed }: { name: string; seed: number }) => {
  const palettes = [
    ['#7c1010', '#b91c1c'], ['#831843', '#be185d'], ['#1e3a8a', '#1d4ed8'],
    ['#064e3b', '#065f46'], ['#4c1d95', '#6d28d9'],
  ];
  const [c1, c2] = palettes[seed % palettes.length];
  return (
    <div className="w-full h-full flex items-center justify-center text-white font-black text-3xl"
         style={{ background: `radial-gradient(circle at 35% 30%, ${c1}, ${c2} 60%, #000)` }}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};

// ─── ОСНОВНОЙ КОМПОНЕНТ ───────────────────────────────────────────────────────
export default function DragonPortal() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [tab, setTab] = useState('home');;
  const [jackpot, setJackpot] = useState(100452890);
  const [onlineStatus, setOnlineStatus] = useState<Record<string, boolean>>({
    LUDOJOP: true, Danzlve: true, Mellstroy: true, Screamy: false, Kashan: true,
  });

  // 2. Данные всех уровней кэшбэка
  const levels = [
    { 
      id: 'BRONZE', 
      back: '5%', 
      color: 'from-orange-900', 
      border: '#92400e', 
      desc: 'Для начинающих воинов', 
      wagering: 'от 10 000 ₽/нед',
      fullTerms: [
        "Вейджер на кэшбэк: x10",
        "Срок жизни бонуса: 24 часа",
        "Максимальная выплата: 5 000 ₽",
        "Автоматическое зачисление по понедельникам"
      ]
    },
    { 
      id: 'GOLD', 
      back: '12%', 
      color: 'from-yellow-700', 
      border: '#a16207', 
      desc: 'Элитный уровень профи', 
      wagering: 'от 100 000 ₽/нед',
      fullTerms: [
        "Вейджер на кэшбэк: x5",
        "Срок жизни бонуса: 72 часа",
        "Максимальная выплата: 25 000 ₽",
        "Доступ к закрытым турнирам"
      ]
    },
    { 
      id: 'DIAMOND', 
      back: '25%', 
      color: 'from-blue-900', 
      border: '#1d4ed8', 
      desc: 'Королевский возврат', 
      wagering: 'от 500 000 ₽/нед',
      fullTerms: [
        "Вейджер на кэшбэк: x0 (БЕЗ ВЕЙДЖЕРА)",
        "Срок жизни бонуса: Неограничен",
        "Максимальная выплата: БЕЗ ОГРАНИЧЕНИЙ",
        "Персональный менеджер 24/7"
      ]
    },
  ];

  // Имитация онлайна стримеров
  useEffect(() => {
    const statusTimer = setInterval(() => {
      setOnlineStatus(prev => {
        const keys = Object.keys(prev);
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        return { ...prev, [randKey]: !prev[randKey] };
      });
    }, 15000);
    return () => clearInterval(statusTimer);
  }, []);
const STREAMERS_DATA = [
  { 
    name: 'LUDOJOP', 
    platform: 'TWITCH', 
    avatar: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/41765f76-def8-11e9-9b69-784f43822e80-profile_image-300x300.png', 
    viewers: '4 821', 
    live: true 
  },
  { 
    name: 'DANZLVE', 
    platform: 'TWITCH', 
    avatar: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/41765f76-def8-11e9-9b69-784f43822e80-profile_image-300x300.png', 
    viewers: '2 340', 
    live: true 
  },
  { 
    name: 'MELLSTROY', 
    platform: 'KICK', 
    avatar: 'https://kick.com/images/default-avatar.png', 
    viewers: '12 400', 
    live: true 
  },
  { 
    name: 'SCREAMY', 
    platform: 'TWITCH', 
    avatar: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/41765f76-def8-11e9-9b69-784f43822e80-profile_image-300x300.png', 
    viewers: 'ОФЛАЙН', 
    live: false 
  },
  { 
    name: 'KASHAN', 
    platform: 'YOUTUBE', 
    avatar: 'https://www.youtube.com/img/desktop/yt_1200.png', 
    viewers: '3 150', 
    live: true 
  },
];
  const renderView = () => {
    switch (tab) {
      // ── ИГРЫ ──
      case 'games':
        return (
          <div className="animate-in fade-in zoom-in-95 duration-500 space-y-10 pb-40">
            <div className="text-center space-y-3">
              <h2 className="text-7xl md:text-[8rem] font-black italic uppercase tracking-tighter">ИГРЫ</h2>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Лучшие слоты от топовых провайдеров</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {GAMES.map((game, i) => (
                <div key={i} className="aspect-[3/4] rounded-[32px] bg-[#080808] border border-white/5 relative group overflow-hidden shadow-2xl cursor-pointer hover:scale-[1.03] transition-all duration-500 hover:border-red-800/50">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-black to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-[5rem] opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 select-none">
                    {game.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400">{game.tag}</span>
                  </div>
                  <div className="absolute bottom-0 w-full p-5">
                    <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">{game.provider}</p>
                    <h3 className="text-sm font-black italic uppercase text-white leading-tight">{game.name}</h3>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-[9px] font-black text-gray-500 uppercase">RTP {game.rtp}</span>
                      <span className="text-[9px] font-black text-white uppercase bg-white/10 px-3 py-1 rounded-lg group-hover:bg-red-600 transition-colors">Играть</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // ── КЕШБЭК ──
case 'cashback':
  // ЕСЛИ ВЫБРАН УРОВЕНЬ (Нажали "Подробнее")
  if (activeLevel) {
    const lvl = levels.find(l => l.id === activeLevel)!;
    return (
      <div className="animate-in fade-in zoom-in-95 duration-500 max-w-4xl mx-auto pb-40">
        {/* Кнопка назад */}
        <button 
          onClick={() => setActiveLevel(null)}
          className="mb-10 text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Назад к уровням
        </button>
        
        {/* Карточка подробностей */}
        <div className="bg-[#050505] border border-white/5 rounded-[60px] p-16 relative overflow-hidden shadow-2xl">
          {/* Полоска сверху цветом уровня */}
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: lvl.border }} />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <div className="font-black text-sm tracking-[0.5em]" style={{ color: lvl.border }}>{lvl.id} LEVEL</div>
              <div className="text-9xl font-black italic text-white leading-none">{lvl.back}</div>
              <p className="text-xl text-gray-400 font-bold uppercase italic">{lvl.desc}</p>
            </div>

            {/* Блок с условиями */}
            <div className="bg-white/5 rounded-[40px] p-10 space-y-6 flex-1 w-full border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-4">Условия и привилегии</h4>
              <div className="space-y-4">
                {lvl.fullTerms.map((term, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-[11px] font-bold text-gray-300 uppercase tracking-wide leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1 shrink-0" />
                    {term}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] text-gray-500 uppercase mb-2 font-black">Оборот для поддержания:</p>
                <p className="text-xl font-black italic text-white">{lvl.wagering}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ОБЫЧНАЯ СЕТКА (Если ничего не выбрано)
  return (
    <div className="animate-in slide-in-from-bottom-10 duration-700 space-y-16 pb-40">
      <h2 className="text-6xl md:text-9xl font-black italic text-center uppercase tracking-tighter">
        CASH<span className="text-red-600">BACK</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((lvl, i) => (
          <div key={i} className="relative rounded-[50px] overflow-hidden group border border-white/5">
            {/* Фоновый градиент уровня */}
            <div className={`absolute inset-0 bg-gradient-to-b ${lvl.color} to-transparent opacity-10 group-hover:opacity-30 transition-opacity`} />
            <div className="relative bg-black/40 backdrop-blur-md rounded-[49px] p-12 text-center space-y-6 h-full flex flex-col justify-between">
              <div>
                <div className="font-black text-xs tracking-[0.5em] mb-4" style={{ color: lvl.border }}>{lvl.id}</div>
                <div className="text-8xl font-black italic text-white leading-none">{lvl.back}</div>
                <p className="text-gray-400 text-[10px] uppercase font-bold mt-4 tracking-widest">{lvl.desc}</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-white text-[11px] font-black uppercase tracking-widest">{lvl.wagering}</p>
                <button 
                  onClick={() => setActiveLevel(lvl.id)}
                  className="w-full py-5 bg-white/5 hover:bg-red-600 text-white rounded-full font-black transition-all uppercase italic text-[10px] tracking-widest border border-white/10 hover:border-red-600"
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
      // ── СТРИМЕРЫ ──
case 'streamers':
  return (
    <div className="animate-in fade-in duration-500 space-y-12 pb-40 text-center">
      <h2 className="text-7xl font-black italic uppercase tracking-tighter">STREAMERS</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {STREAMERS_DATA.map((streamer, i) => (
          <div key={i} className="bg-[#080808] border border-white/5 rounded-[40px] p-6 hover:border-red-600 transition-all group relative overflow-hidden">
            {/* Аватар */}
            <div className="aspect-square rounded-[30px] bg-gray-900 mb-4 overflow-hidden group-hover:scale-105 transition-transform relative">
              {streamer.platform === 'TWITCH' ? (
                // Twitch аватар
                <img 
                  src={`https://static-cdn.jtvnw.net/jtv_user_pictures/${streamer.name.toLowerCase()}-profile_image-300x300.png`}
                  alt={streamer.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${streamer.name}&background=dc2626&color=fff&size=300&bold=true`;
                  }}
                />
              ) : streamer.platform === 'KICK' ? (
                // Kick аватар (цветной фон)
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <span className="text-6xl font-black text-white">
                    {streamer.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              ) : (
                // YouTube аватар (красный фон)
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <span className="text-6xl font-black text-white">
                    {streamer.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              
              {/* Индикатор онлайн */}
              <div className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-black ${streamer.live ? 'bg-red-600 animate-pulse' : 'bg-gray-600'}`} />
            </div>
            
            {/* Имя стримера */}
            <div className="text-sm font-black uppercase italic text-white">{streamer.name}</div>
            
            {/* Платформа */}
            <div className="text-[8px] text-gray-500 font-bold mt-1 uppercase tracking-widest">{streamer.platform}</div>
            
            {/* Статус онлайн/офлайн */}
            <div className={`text-[9px] font-black mt-2 ${streamer.live ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
              {streamer.live ? `● LIVE - ${streamer.viewers}` : '○ ОФЛАЙН'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
      // ── ГЛАВНАЯ ──
      default:
          return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-12 animate-in fade-in duration-1000">
      <div className="relative group">
        {/* Свечение за текстом */}
        <div className="absolute -inset-10 bg-red-600/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase relative">
          DRAGON <span className="text-red-600">MONEY</span>
        </h1>
      </div>

      {/* КОНТЕЙНЕР ДЛЯ ДРАКОНА */}
      <div className="w-full max-w-5xl h-[500px] md:h-[650px] relative mx-auto my-12">
  <DragonHero />
</div>

            {/* Джекпот */}
            <div className="bg-[#050505] border border-white/5 rounded-[50px] p-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_#dc2626]" />
              <p className="text-[10px] uppercase tracking-[0.8em] text-red-600 font-black mb-4">Global Jackpot</p>
              <div className="text-5xl md:text-8xl font-black italic text-white tabular-nums tracking-tighter">
                ₽{jackpot.toLocaleString()}
              </div>
              <button className="mt-10 px-16 py-5 bg-red-600 hover:bg-red-500 rounded-full font-black uppercase italic hover:scale-105 transition-all shadow-xl shadow-red-900/40 tracking-widest text-sm">
                Ворваться в игру
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-[#020202] text-white relative overflow-x-hidden font-sans flex flex-col">
      {/* Навигация */}
      <nav className="fixed top-6 left-0 w-full z-[100] flex justify-center px-4">
        <div className="bg-black/60 backdrop-blur-3xl border border-white/10 px-6 py-3.5 rounded-full flex gap-6 md:gap-10 items-center shadow-2xl">
          {[
            { key: 'home',      label: 'Главная'  },
            { key: 'games',     label: 'Игры'     },
            { key: 'cashback',  label: 'Кешбэк'   },
            { key: 'streamers', label: 'Стримеры' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`text-[9px] md:text-[10px] font-black uppercase italic tracking-widest transition-all duration-300 ${ tab === key ? 'text-red-500 scale-110' : 'text-gray-500 hover:text-white' }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Основной контент */}
      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 w-full">
        {renderView()}
      </div>

      {/* Футер */}
      <footer className="w-full border-t border-white/5 py-16 mt-auto bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-xl font-black italic uppercase text-white tracking-widest">Dragon Links</h4>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="https://t.me/drgn_money_support_bot" target="_blank" rel="noreferrer" className="text-[10px] font-black text-gray-500 hover:text-red-600 uppercase tracking-widest transition-colors">● Поддержка 24/7</a>
              <a href="https://t.me/dragonmoney_official" target="_blank" rel="noreferrer" className="text-[10px] font-black text-gray-500 hover:text-red-600 uppercase tracking-widest transition-colors">● Telegram канал</a>
            </div>
          </div>
          <p className="text-[9px] font-black text-gray-800 uppercase tracking-widest">© 2026 Dragon Legacy Official</p>
        </div>
      </footer>
    </main>
  );
}