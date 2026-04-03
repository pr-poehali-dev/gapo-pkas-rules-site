import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "rules", label: "Правила", icon: "BookOpen" },
  { id: "discipline", label: "Дисциплина", icon: "Award" },
  { id: "safety", label: "Безопасность", icon: "Shield" },
  { id: "faq", label: "Вопросы и ответы", icon: "HelpCircle" },
];

const rules = [
  { icon: "Clock", color: "bg-blue-100 text-blue-600", title: "Соблюдение расписания", desc: "Все участники обязаны приходить вовремя. Опоздание более 15 минут считается нарушением." },
  { icon: "MessageSquare", color: "bg-green-100 text-green-600", title: "Уважительное общение", desc: "Общение должно быть вежливым и уважительным. Грубость и оскорбления недопустимы." },
  { icon: "Smartphone", color: "bg-orange-100 text-orange-600", title: "Использование телефонов", desc: "Мобильные устройства должны быть отключены во время занятий и официальных мероприятий." },
  { icon: "Trash2", color: "bg-purple-100 text-purple-600", title: "Чистота и порядок", desc: "Каждый отвечает за чистоту своего рабочего места и общих помещений." },
  { icon: "Users", color: "bg-pink-100 text-pink-600", title: "Командная работа", desc: "Взаимопомощь и поддержка коллег — основа здорового коллектива." },
  { icon: "FileText", color: "bg-teal-100 text-teal-600", title: "Документооборот", desc: "Все документы оформляются в соответствии с установленными стандартами." },
];

const disciplineSteps = [
  { step: "1", color: "bg-yellow-400", title: "Устное предупреждение", desc: "Первое нарушение правил влечёт устное предупреждение от руководителя." },
  { step: "2", color: "bg-orange-400", title: "Письменное замечание", desc: "Повторное нарушение фиксируется письменно и вносится в личное дело." },
  { step: "3", color: "bg-red-400", title: "Официальный выговор", desc: "Систематические нарушения влекут официальный выговор с последствиями." },
  { step: "4", color: "bg-red-700", title: "Серьёзные меры", desc: "Грубые или повторяющиеся нарушения рассматриваются комиссией." },
];

const safetyRules = [
  { icon: "Flame", color: "from-red-400 to-orange-400", title: "Пожарная безопасность", items: ["Не курить в помещении", "Знать расположение огнетушителей", "Не перегружать электросеть", "Эвакуационные выходы должны быть свободны"] },
  { icon: "Zap", color: "from-yellow-400 to-amber-400", title: "Электробезопасность", items: ["Не трогать повреждённые провода", "Отключать приборы по окончании работы", "Сообщать о неисправностях", "Не использовать самодельные удлинители"] },
  { icon: "Heart", color: "from-green-400 to-emerald-400", title: "Охрана здоровья", items: ["Регулярные перерывы при работе за ПК", "Соблюдать гигиену рабочего места", "Сообщать о недомогании", "Аптечка находится на посту охраны"] },
  { icon: "Lock", color: "from-blue-400 to-indigo-400", title: "Информационная безопасность", items: ["Не передавать пароли третьим лицам", "Блокировать ПК при уходе", "Не открывать подозрительные ссылки", "Хранить документы в безопасных местах"] },
];

const faqs = [
  { q: "Как оформить заявление на отгул?", a: "Заявление подаётся не позднее чем за 3 рабочих дня до предполагаемого отгула. Форму можно скачать в разделе Документы или получить у секретаря." },
  { q: "Что делать при возникновении конфликтной ситуации?", a: "Обратитесь к непосредственному руководителю или в отдел кадров. Все обращения рассматриваются конфиденциально в течение 5 рабочих дней." },
  { q: "Как получить пропуск на территорию?", a: "Для получения пропуска необходимо обратиться в службу охраны с документом, удостоверяющим личность, и направлением от принимающего сотрудника." },
  { q: "Кто отвечает за соблюдение правил?", a: "Ответственность за соблюдение правил несёт каждый сотрудник лично. Общий контроль возложен на руководителей подразделений." },
  { q: "Как сообщить о нарушении анонимно?", a: "Воспользуйтесь ящиком обратной связи у входа или отправьте письмо на специальный адрес электронной почты, указанный на доске объявлений." },
  { q: "Где можно ознакомиться с полными регламентами?", a: "Все регламенты доступны для скачивания в разделе Документы данного сайта, а также на информационных стендах в холле." },
];

const documents = [
  { icon: "FileText", title: "Правила внутреннего трудового распорядка", size: "PDF, 245 КБ", color: "bg-blue-50 border-blue-200" },
  { icon: "Shield", title: "Инструкция по охране труда", size: "PDF, 180 КБ", color: "bg-green-50 border-green-200" },
  { icon: "Flame", title: "Инструкция по пожарной безопасности", size: "PDF, 120 КБ", color: "bg-orange-50 border-orange-200" },
  { icon: "Lock", title: "Политика информационной безопасности", size: "PDF, 310 КБ", color: "bg-purple-50 border-purple-200" },
  { icon: "Users", title: "Кодекс корпоративной этики", size: "PDF, 95 КБ", color: "bg-pink-50 border-pink-200" },
  { icon: "Award", title: "Положение о дисциплинарных взысканиях", size: "PDF, 88 КБ", color: "bg-teal-50 border-teal-200" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] font-golos">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="BookMarked" size={16} className="text-white" />
            </div>
            <span className="font-bold text-gray-800 text-lg leading-tight">
              Правила <span className="text-indigo-600">организации</span>
            </span>
          </div>
          <div className="hidden md:flex gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === s.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon name={s.icon} size={14} />
                {s.label}
              </button>
            ))}
          </div>
          <div className="flex md:hidden gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`p-2 rounded-lg transition-all ${
                  activeSection === s.id ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Icon name={s.icon} size={18} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" size={16} />
              <span className="text-sm font-medium">Добро пожаловать</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Правила и нормы
              <br />
              <span className="text-cyan-200">нашей организации</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Единые стандарты поведения, дисциплины и безопасности для всех сотрудников и посетителей
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {sections.slice(1).map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl px-5 py-2.5 font-medium transition-all hover:scale-105"
                >
                  <Icon name={s.icon} size={16} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "FileCheck", val: "6", label: "Разделов правил" },
              { icon: "Users", val: "100+", label: "Сотрудников" },
              { icon: "File", val: "6", label: "Документов" },
              { icon: "Calendar", val: "2024", label: "Год обновления" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <Icon name={stat.icon} size={24} className="mx-auto mb-1 text-cyan-200" />
                <div className="text-2xl font-bold">{stat.val}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Icon name="BookOpen" size={20} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Правила поведения</h2>
        </div>
        <p className="text-gray-500 mb-8 ml-[52px]">Основные нормы, обязательные для соблюдения всеми</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${r.color}`}>
                <Icon name={r.icon} size={22} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINE */}
      <section id="discipline" className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <Icon name="Award" size={20} className="text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Дисциплина</h2>
          </div>
          <p className="text-gray-500 mb-10 ml-[52px]">Порядок применения мер при нарушении правил</p>
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-700" />
            <div className="space-y-5">
              {disciplineSteps.map((d, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${d.color} text-white font-black text-2xl shadow-md`}
                  >
                    {d.step}
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm border border-orange-100">
                    <h3 className="font-bold text-gray-800 mb-1">{d.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-amber-100 rounded-2xl p-5 flex gap-3 items-start">
            <Icon name="Info" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Важно:</strong> Все меры дисциплинарного воздействия применяются в соответствии с действующим
              трудовым законодательством. Сотрудник вправе обжаловать любое взыскание в установленном порядке.
            </p>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section id="safety" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <Icon name="Shield" size={20} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Безопасность</h2>
        </div>
        <p className="text-gray-500 mb-8 ml-[52px]">Правила, которые защищают каждого из нас</p>
        <div className="grid md:grid-cols-2 gap-5">
          {safetyRules.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${s.color} p-4 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center">
                  <Icon name={s.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg">{s.title}</h3>
              </div>
              <ul className="p-5 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Icon name="FolderOpen" size={20} className="text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Официальные документы</h2>
          </div>
          <p className="text-gray-500 mb-8 ml-[52px]">Скачайте актуальные регламенты и инструкции</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className={`rounded-2xl border-2 p-5 flex gap-4 items-start hover:shadow-md transition-all cursor-pointer group ${doc.color}`}
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon name={doc.icon} size={18} className="text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm leading-tight mb-1">{doc.title}</p>
                  <p className="text-xs text-gray-400">{doc.size}</p>
                </div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <Icon name="Download" size={14} className="text-indigo-600" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Для загрузки реальных файлов — напишите нам, и мы подключим хранилище документов
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Icon name="HelpCircle" size={20} className="text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Вопросы и ответы</h2>
        </div>
        <p className="text-gray-500 mb-8 ml-[52px]">Часто задаваемые вопросы от сотрудников</p>
        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                    openFaq === i ? "bg-purple-600 text-white rotate-180" : "bg-purple-50 text-purple-600"
                  }`}
                >
                  <Icon name="ChevronDown" size={18} />
                </div>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="BookMarked" size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg">Правила организации</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Официальный портал внутренних правил и регламентов</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-gray-400 hover:text-white text-sm transition-colors px-2 py-1"
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-6">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}
