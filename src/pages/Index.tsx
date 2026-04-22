import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_BUILDING = "https://cdn.poehali.dev/projects/7303aae0-3366-4a8a-b0c2-f20de2dea74c/files/a96a6a2a-a3bb-486d-9f31-13f71cf9dbab.jpg";
const IMG_CLASS = "https://cdn.poehali.dev/projects/7303aae0-3366-4a8a-b0c2-f20de2dea74c/files/e2ebf386-7263-436a-8e04-574ac4cf4471.jpg";
const IMG_STUDENTS = "https://cdn.poehali.dev/projects/7303aae0-3366-4a8a-b0c2-f20de2dea74c/files/1cb3d7e2-c3c6-43f6-b5f6-55f02a9989db.jpg";

const navItems = [
  { id: "about", label: "О колледже" },
  { id: "general", label: "Общие правила" },
  { id: "dress", label: "Внешний вид" },
  { id: "phones", label: "Телефоны" },
  { id: "respect", label: "Уважение" },
  { id: "sanctions", label: "Последствия" },
];

const generalRules = [
  { icon: "Clock3", num: "01", title: "Пунктуальность", text: "Студент обязан являться на занятия строго по расписанию. Опоздание без уважительной причины является нарушением дисциплины." },
  { icon: "BookOpen", num: "02", title: "Подготовка к занятиям", text: "Все домашние задания выполняются в срок. На занятия необходимо иметь при себе необходимые учебные материалы." },
  { icon: "DoorOpen", num: "03", title: "Порядок входа и выхода", text: "Вход на территорию колледжа осуществляется только при наличии студенческого билета или пропуска." },
  { icon: "Volume2", num: "04", title: "Соблюдение тишины", text: "В коридорах, библиотеке и учебных кабинетах необходимо соблюдать тишину и не мешать учебному процессу." },
  { icon: "Trash2", num: "05", title: "Чистота и порядок", text: "Студенты обязаны поддерживать чистоту в помещениях колледжа и бережно относиться к имуществу учреждения." },
  { icon: "Users", num: "06", title: "Поведение в группе", text: "Отношения внутри группы строятся на взаимоуважении, взаимопомощи и коллективной ответственности." },
];

const dressRules = [
  "Деловой стиль одежды — обязателен на все учебные и официальные мероприятия",
  "Одежда должна быть чистой, аккуратной и опрятной",
  "Не допускается ношение спортивной одежды, шорт и пляжных вещей",
  "Обувь должна соответствовать деловому стилю",
  "Аксессуары и украшения — умеренные, не отвлекающие",
  "Волосы должны быть ухоженными и аккуратными",
];

const phoneRules = [
  { icon: "BellOff", title: "Беззвучный режим", desc: "На всех занятиях телефон переводится в беззвучный режим или отключается" },
  { icon: "PhoneOff", title: "Запрет звонков", desc: "Принимать и совершать звонки в аудитории строго запрещено" },
  { icon: "Wifi", title: "Использование интернета", desc: "Интернет на телефоне используется только в учебных целях и с разрешения преподавателя" },
  { icon: "Camera", title: "Фото и видео", desc: "Съёмка в колледже разрешена только с согласия преподавателя или администрации" },
];

const sanctions = [
  { level: 1, color: "from-yellow-400 to-amber-400", bg: "bg-yellow-50 border-yellow-200", title: "Замечание", text: "Устное предупреждение от преподавателя при первичном нарушении", icon: "AlertCircle" },
  { level: 2, color: "from-orange-400 to-red-400", bg: "bg-orange-50 border-orange-200", title: "Выговор", text: "Письменный выговор с занесением в личное дело студента", icon: "AlertTriangle" },
  { level: 3, color: "from-red-500 to-rose-600", bg: "bg-red-50 border-red-200", title: "Вызов родителей", text: "При систематических нарушениях на встречу приглашаются родители", icon: "Users" },
  { level: 4, color: "from-rose-700 to-red-800", bg: "bg-rose-50 border-rose-200", title: "Отчисление", text: "Грубые и неоднократные нарушения могут повлечь отчисление из колледжа", icon: "XCircle" },
];

const respectRules = [
  { icon: "Heart", title: "К преподавателям", items: ["Обращаться по имени и отчеству", "Не перебивать во время объяснения", "Поднимать руку перед ответом", "Выполнять законные требования"] },
  { icon: "Handshake", title: "К однокурсникам", items: ["Уважать личное пространство", "Не допускать оскорблений и насмешек", "Помогать в учёбе", "Решать конфликты мирно"] },
  { icon: "Building2", title: "К имуществу", items: ["Бережно обращаться с оборудованием", "Не портить мебель и стены", "Возмещать причинённый ущерб", "Соблюдать порядок на рабочем месте"] },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("about");
  const [openPhone, setOpenPhone] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-montserrat text-slate-800">

      {/* TOP BAR */}
      <div className="bg-[#1a3a6b] text-white text-xs py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="opacity-70">ГАПОУ ПО «Пензенский колледж архитектуры и строительства»</span>
          <span className="hidden sm:block opacity-70">Индивидуальный проект · 2024</span>
        </div>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#1a3a6b] shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 py-3">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-[#1a3a6b] rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-extrabold text-[#1a3a6b] text-sm leading-tight">ГАПОУ ПО ПКАС</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">Правила поведения</div>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 mx-2 hidden md:block" />
            <div className="flex gap-0.5 overflow-x-auto flex-1">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    activeNav === n.id
                      ? "bg-[#1a3a6b] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_BUILDING})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2447]/95 via-[#1a3a6b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2447]/60 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="BookMarked" size={14} className="text-amber-300" />
              <span className="text-white/90 text-xs font-medium uppercase tracking-widest">Индивидуальный проект</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Правила<br />
              <span className="text-amber-300">поведения</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-2">
              ГАПОУ ПО «Пензенский колледж<br />архитектуры и строительства»
            </p>
            <div className="w-16 h-1 bg-amber-400 rounded-full mb-6" />
            <p className="text-white/70 text-sm leading-relaxed max-w-lg">
              Настоящие правила устанавливают нормы поведения студентов, обязательные для исполнения на всей территории колледжа и во время учебного процесса.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {navItems.slice(1).map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm px-4 py-2 rounded-lg transition-all backdrop-blur-sm"
                >
                  {n.label}
                  <Icon name="ArrowRight" size={12} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
          <Icon name="Shield" size={28} className="text-amber-300" />
          <div className="text-xs text-center text-white/80 font-medium">Соблюдение<br />правил обязательно</div>
        </div>
      </section>

      {/* GENERAL RULES */}
      <section id="general" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1a3a6b] text-xs font-bold uppercase tracking-widest">Раздел I</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-1">Общие правила</h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={IMG_CLASS} alt="Студенты на занятии" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a6b]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-[#1a3a6b]/70 backdrop-blur-sm px-3 py-1 rounded-lg">
                Учебный процесс
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a3a6b] mb-3">Основа учебного процесса</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Соблюдение правил поведения является обязательным условием для всех студентов ГАПОУ ПО ПКАС. Эти нормы созданы для обеспечения комфортной и продуктивной образовательной среды.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Правила распространяются на всё время нахождения студента на территории колледжа — в аудиториях, коридорах, столовой и на прилегающей территории.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[["100%", "соблюдение"], ["0", "исключений"], ["365", "дней в году"]].map(([val, label]) => (
                  <div key={label} className="bg-[#1a3a6b]/5 rounded-xl p-3 text-center">
                    <div className="font-extrabold text-[#1a3a6b] text-xl">{val}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {generalRules.map((r) => (
              <div key={r.num} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#1a3a6b]/30 hover:shadow-lg transition-all group">
                <div className="absolute top-4 right-4 text-slate-200 font-black text-3xl group-hover:text-[#1a3a6b]/10 transition-colors">
                  {r.num}
                </div>
                <div className="w-11 h-11 bg-[#1a3a6b] rounded-xl flex items-center justify-center mb-4">
                  <Icon name={r.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRESS CODE */}
      <section id="dress" className="py-20 bg-gradient-to-br from-[#1a3a6b] to-[#0d2447]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">Раздел II</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Внешний вид</h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-white/80 leading-relaxed mb-6">
                Внешний вид студента — лицо колледжа. Деловой стиль формирует профессиональную культуру и уважение к учебному заведению.
              </p>
              <div className="space-y-3">
                {dressRules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/8 rounded-xl px-4 py-3 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-[#1a3a6b] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-white/90 text-sm leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img src={IMG_STUDENTS} alt="Студенты колледжа" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2447]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-400 text-[#1a3a6b] rounded-2xl p-4 font-bold text-sm shadow-xl">
                <Icon name="Star" size={18} className="mb-1" />
                Деловой стиль
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHONES */}
      <section id="phones" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1a3a6b] text-xs font-bold uppercase tracking-widest">Раздел III</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-1">Мобильные телефоны</h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
              Правила использования мобильных устройств направлены на создание сосредоточенной учебной атмосферы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {phoneRules.map((r, i) => (
              <div
                key={i}
                onClick={() => setOpenPhone(openPhone === i ? null : i)}
                className={`rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                  openPhone === i
                    ? "border-[#1a3a6b] bg-[#1a3a6b] text-white shadow-xl scale-105"
                    : "border-slate-200 bg-slate-50 hover:border-[#1a3a6b]/40 hover:shadow-md"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${openPhone === i ? "bg-white/20" : "bg-[#1a3a6b]/10"}`}>
                  <Icon name={r.icon} size={22} className={openPhone === i ? "text-amber-300" : "text-[#1a3a6b]"} />
                </div>
                <h3 className={`font-bold mb-2 ${openPhone === i ? "text-white" : "text-slate-800"}`}>{r.title}</h3>
                <p className={`text-sm leading-relaxed ${openPhone === i ? "text-white/80" : "text-slate-500"}`}>{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="AlertTriangle" size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-amber-800 mb-1">Важно</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Систематическое нарушение правил использования телефонов влечёт изъятие устройства до конца занятия с уведомлением родителей. При повторном нарушении — применяются дисциплинарные меры.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESPECT */}
      <section id="respect" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1a3a6b] text-xs font-bold uppercase tracking-widest">Раздел IV</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-1">Уважение и этика</h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {respectRules.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-[#1a3a6b] to-[#2a5298] p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name={r.icon} size={20} className="text-amber-300" />
                  </div>
                  <h3 className="font-bold text-white">{r.title}</h3>
                </div>
                <ul className="p-5 space-y-2.5">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <Icon name="Check" size={15} className="text-[#1a3a6b] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-[#1a3a6b] to-[#2a5298] rounded-2xl p-8 text-center text-white">
            <Icon name="Quote" size={32} className="text-amber-300 mx-auto mb-4" />
            <p className="text-xl font-semibold italic leading-relaxed max-w-2xl mx-auto">
              «Уважение к другим начинается с уважения к себе. Студент колледжа — это будущий профессионал, и его поведение сегодня формирует его репутацию завтра.»
            </p>
            <p className="text-white/60 text-sm mt-4">— Администрация ГАПОУ ПО ПКАС</p>
          </div>
        </div>
      </section>

      {/* SANCTIONS */}
      <section id="sanctions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1a3a6b] text-xs font-bold uppercase tracking-widest">Раздел V</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-1">Последствия нарушений</h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
              Меры применяются последовательно в зависимости от тяжести и систематичности нарушений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {sanctions.map((s) => (
              <div key={s.level} className={`rounded-2xl border-2 p-6 ${s.bg}`}>
                <div className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${s.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  <span>Ступень {s.level}</span>
                </div>
                <div className="mb-3">
                  <Icon name={s.icon} size={24} className="text-slate-700" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex gap-4 items-start">
            <div className="w-10 h-10 bg-[#1a3a6b] rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="Info" size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-1">Права студента</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Любое дисциплинарное взыскание может быть обжаловано студентом или его родителями (законными представителями) в установленном порядке. Все решения принимаются коллегиально и документируются.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d2447] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-[#0d2447]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm">ГАПОУ ПО ПКАС</div>
                  <div className="text-white/50 text-xs">Пензенский колледж АС</div>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Государственное автономное профессиональное образовательное учреждение Пензенской области «Пензенский колледж архитектуры и строительства»
              </p>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 text-amber-300">Разделы</p>
              <div className="space-y-1.5">
                {navItems.map((n) => (
                  <button key={n.id} onClick={() => scrollTo(n.id)} className="block text-white/60 hover:text-white text-xs transition-colors">
                    {n.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-sm mb-3 text-amber-300">Об проекте</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Данный сайт является индивидуальным проектом студента на тему «Правила поведения в ГАПОУ ПО ПКАС». Вся информация носит учебный характер.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Icon name="BookOpen" size={14} className="text-amber-300" />
                <span className="text-white/50 text-xs">Индивидуальный проект · 2024</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/30 text-xs">© 2024 ГАПОУ ПО ПКАС · Индивидуальный учебный проект</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
