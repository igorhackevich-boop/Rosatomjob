import { useState } from 'react';
import { 
  Sparkles, 
  Briefcase, 
  MapPin, 
  Clock,
  GraduationCap,
  Users,
  Lightbulb,
  Check,
  ArrowRight,
  Rocket,
  Palette,
  Zap,
  Code,
  Atom,
  Film,
  DollarSign,
  Link as LinkIcon
} from 'lucide-react';

interface JobData {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  gradient: string;
  icon: any;
  description: string;
  highlights: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: Array<{
    icon: any;
    title: string;
    description: string;
  }>;
}

const jobs: JobData[] = [
  {
    id: '3d-motion',
    title: '3D-моушен дизайнер',
    department: 'Образовательные технологии',
    type: 'Полная занятость',
    location: 'Офис / Гибрид',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    icon: Film,
    description: 'Создавай обучающий контент нового поколения для атомной отрасли. Твои 3D-анимации помогут тысячам специалистов освоить сложнейшее оборудование.',
    highlights: [
      'Работа с уникальным промышленным оборудованием',
      'Интерактивный 3D и видео-продакшн',
      'Реальное влияние на безопасность АЭС'
    ],
    responsibilities: [
      'Создавать 3D-модели промышленного оборудования (насосы, реакторы, турбины)',
      'Анимировать принципы работы и процессы сборки/разборки',
      'Показывать химические и физические свойства (уметь работать с частицами, водой, паром)',
      'Разрабатывать интерактивные 3D-сцены для обучающих модулей',
      'Производить motion-графику и анимационные ролики',
      'Интегрировать 3D-контент в SCORM-курсы через iSpring'
    ],
    requirements: [
      'Blender / Cinema 4D / 3ds Max на продвинутом уровне',
      'Опыт анимации технических объектов и механизмов',
      'After Effects и Premiere Pro для постобработки',
      'Понимание принципов визуального объяснения',
      'Готовность погружаться в техническую специфику'
    ],
    niceToHave: [
      'Опыт работы в создании презентаций',
      'Опыт с iSpring или аналогом',
      'Промышленная визуализация',
      'Техническое образование'
    ],
    benefits: [
      {
        icon: GraduationCap,
        title: 'Оплачиваемое обучение',
        description: 'Оплачиваем курсы, конференции и рабочие инструменты для развития навыков'
      },
      {
        icon: Lightbulb,
        title: 'Личный наставник',
        description: 'Опытный дизайнер поможет с адаптацией и развитием'
      },
      {
        icon: Users,
        title: 'Экспертная среда',
        description: 'Работаешь в связке с инженерами и технологами, которые знают тему изнутри'
      }
    ]
  },
  {
    id: 'course-designer',
    title: 'Дизайнер образовательных курсов',
    department: 'Образовательные технологии',
    type: 'Полная занятость',
    location: 'Офис / Гибрид',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    icon: Palette,
    description: 'Превращай сложные технические знания в понятные обучающие продукты. От концепции до финального SCORM-пакета.',
    highlights: [
      'Полный цикл создания курса - от идеи до релиза',
      'Методический дизайн + визуал',
      'Высокая степень автономии'
    ],
    responsibilities: [
      'Разрабатывать визуальную концепцию и учебный сценарий',
      'Структурировать сложную техническую информацию',
      'Создавать иллюстрации, иконки и инфографику',
      'Настраивать анимацию в PowerPoint',
      'Генерировать озвучку с помощью AI-инструментов',
      'Собирать финальный курс в iSpring (интерактив, тесты, SCORM)'
    ],
    requirements: [
      'PowerPoint на продвинутом уровне с анимацией',
      'Illustrator / Figma для иллюстраций и иконок',
      'Навыки инфографики и визуализации данных',
      'AI-инструменты для озвучки и контента',
      'Базовое владение Premiere Pro'
    ],
    niceToHave: [
      'Образование в сфере педагогического дизайна',
      'Интерес к инженерным темам',
      'Опыт работы в iSpring / Articulate',
      'Умеешь рисовать'
    ],
    benefits: [
      {
        icon: Rocket,
        title: 'Влияние на результат',
        description: 'Не просто исполняешь, а сам формируешь визуальное и методическое решение в рамках потребностей филиала'
      },
      {
        icon: Users,
        title: 'Экспертная среда',
        description: 'Работаешь в связке с инженерами и технологами, которые знают тему изнутри'
      },
      {
        icon: GraduationCap,
        title: 'Оплачиваемое обучение',
        description: 'Оплачиваем курсы, конференции и рабочие инструменты для развития навыков'
      }
    ]
  }
];

function App() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleJobClick = (jobId: string) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') || '').trim();
    const portfolio = String(formData.get('portfolio') || '').trim();

    if (!name) {
      alert('Пожалуйста, укажите имя');
      return;
    }

    if (!portfolio) {
      alert('Пожалуйста, добавьте ссылку на портфолио');
      return;
    }

    formData.set('name', name);
    formData.set('portfolio', portfolio);
    formData.append('_subject', 'Отклик на вакансию');

    try {
      const response = await fetch('https://formspree.io/f/mjgaajzz', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        alert('Отклик отправлен');
        form.reset();
      } else {
        alert('Не удалось отправить форму. Попробуйте позже.');
      }
    } catch (error) {
      alert('Ошибка отправки. Проверьте интернет и попробуйте снова.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center flex-shrink-0">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="font-bold text-[15px] text-slate-900 truncate">
                  Техническая академия
                </h1>
                <p className="text-[13px] text-slate-500">Филиал СПБ · Открытые вакансии</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-slate-600 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="hidden sm:inline">2 активные позиции</span>
              <span className="sm:hidden">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF2FF] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span className="text-[13px] font-medium text-[#4F46E5]">Присоединяйся к команде</span>
          </div>
          
          <h2 className="text-[36px] sm:text-[42px] font-black text-slate-900 mb-4 leading-tight">
            Создавай будущее{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              образования
            </span>
          </h2>
          
          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
            Разрабатываем уникальные обучающие курсы для специалистов атомной отрасли. 
            Совмещаем передовые технологии, дизайн и методику.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 items-start">
          {jobs.map((job) => {
            const Icon = job.icon;
            const isExpanded = selectedJob === job.id;
            
            return (
              <div
                key={job.id}
                className="group relative bg-white rounded-2xl shadow-[0_2px_12px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.1)] border border-slate-200 transition-all duration-300 flex flex-col"
                style={!isExpanded ? { minHeight: '520px' } : undefined}
              >
                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5 gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md text-[12px] font-medium flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span className="hidden sm:inline">{job.type}</span>
                        <span className="sm:hidden">Полная</span>
                      </span>
                      <span className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md text-[12px] font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="hidden sm:inline">{job.location}</span>
                        <span className="sm:hidden">Гибрид</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-bold text-slate-900 mb-1.5 leading-tight">
                    {job.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 mb-4">{job.department}</p>
                  
                  <p className="text-[14px] sm:text-[15px] text-slate-700 leading-relaxed mb-5">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6 flex-1">
                    {job.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA - always at bottom */}
                  <button
                    onClick={() => handleJobClick(job.id)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-[14px] ${
                      isExpanded
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isExpanded ? 'Свернуть детали' : 'Подробнее о вакансии'}
                    <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50 rounded-b-2xl p-6 sm:p-7 space-y-7">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-900 mb-3.5">
                        Чем предстоит заниматься
                      </h4>
                      <ul className="space-y-2.5">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                            <span className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                            <span className="text-[13px] sm:text-[14px] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-900 mb-3.5">
                        Что требуется
                      </h4>
                      <ul className="space-y-2.5">
                        {job.requirements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                            <Check className="w-4 h-4 flex-shrink-0 text-slate-400 mt-0.5" />
                            <span className="text-[13px] sm:text-[14px] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nice to have */}
                    <div>
                      <h4 className="text-[13px] font-semibold text-slate-500 mb-2.5 uppercase tracking-wide">
                        Будет плюсом
                      </h4>
                      <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed">
                        {job.niceToHave.slice(0, 2).join(' / ')}
                        {job.niceToHave.length > 2 && (
                          <>
                            <br />
                            {job.niceToHave.slice(2).join(' / ')}
                          </>
                        )}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-900 mb-3.5">
                        Что мы предлагаем
                      </h4>
                      <div className="space-y-3">
                        {job.benefits.map((benefit, idx) => {
                          const BenefitIcon = benefit.icon;
                          return (
                            <div key={idx} className="flex gap-3.5 p-4 bg-white rounded-xl border border-slate-200">
                              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0`}>
                                <BenefitIcon className="w-4.5 h-4.5 text-white" />
                              </div>
                              <div className="min-w-0">
                                <h5 className="font-semibold text-slate-900 mb-1 text-[14px]">{benefit.title}</h5>
                                <p className="text-[13px] text-slate-600 leading-relaxed">{benefit.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Salary Info */}
                    <div className="pt-2 pb-1">
                      <p className="text-[14px] text-slate-600 mb-1.5">
                        Доход и премии:
                      </p>
                      <p className={`text-[24px] sm:text-[28px] font-black bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent leading-tight`}>
                        до 110 000 ₽
                      </p>
                      <p className="text-[13px] text-slate-500 mt-1">
                        в месяц до вычета НДФЛ + премия по итогам года
                      </p>
                    </div>

                    {/* Apply CTA */}
                    <div className="pt-2">
                      <button
                        onClick={scrollToForm}
                        className={`w-full py-3.5 px-4 rounded-xl bg-gradient-to-r ${job.gradient} text-white font-semibold transition-all duration-200 text-[14px] hover:shadow-lg flex items-center justify-center gap-2`}
                      >
                        Отправить резюме и портфолио
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="application-form">
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(15,23,42,0.06)] border border-slate-200 p-6 sm:p-8 lg:p-10">
          <h3 className="text-[28px] sm:text-[32px] font-bold text-slate-900 mb-2">
            Отправить отклик
          </h3>
          <p className="text-[14px] sm:text-[15px] text-slate-500 mb-8">
            Заполните форму — мы свяжемся с вами в ближайшее время
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-slate-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Как вас зовут"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                />
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block text-[13px] font-medium text-slate-700 mb-2">
                  Почта или Telegram
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="email@example.com или @username"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Portfolio */}
              <div>
                <label htmlFor="portfolio" className="block text-[13px] font-medium text-slate-700 mb-2">
                  Ссылка на портфолио
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  required
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                />
              </div>

              {/* Resume */}
              <div>
                <label htmlFor="resume" className="block text-[13px] font-medium text-slate-700 mb-2">
                  Ссылка на резюме
                </label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  placeholder="hh.ru, LinkedIn или другой сервис"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* About */}
            <div>
              <label htmlFor="about" className="block text-[13px] font-medium text-slate-700 mb-2">
                Коротко о себе и релевантном опыте
              </label>
              <textarea
                id="about"
                name="about"
                rows={5}
                placeholder="Расскажите о себе, своём опыте и почему вам интересна эта вакансия"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-[15px] hover:shadow-lg transition-all duration-200"
            >
              Отправить отклик
            </button>

            {/* Alternative Contact */}
            <p className="text-[13px] text-slate-500 text-center">
              Или напишите напрямую:{' '}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=igor.hackevich@gmail.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#4F46E5] hover:underline"
              >
                igor.hackevich@gmail.com
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* Footer Info */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-[#1E293B] rounded-2xl p-6 sm:p-8 lg:p-10 text-white">
          <h3 className="text-[24px] sm:text-[28px] font-bold mb-6 sm:mb-8">
            О нашей работе
          </h3>
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Description */}
            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed text-[14px] sm:text-[15px]">
                Мы создаем образовательные курсы для специалистов атомной отрасли. Наша миссия — 
                передавать знания и опыт с помощью современных технологий.
              </p>
              <p className="leading-relaxed text-[14px] sm:text-[15px]">
                Совмещаем дизайн интерфейсов, 3D-анимацию и педагогический дизайн для создания 
                курсов, которые работают в офлайн-среде АЭС через SCORM.
              </p>
              
              {/* Mobile Divider */}
              <div className="lg:hidden border-t border-slate-600/50 pt-6 mt-6" />
            </div>

            {/* Right Column - Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white mb-1 text-[15px] sm:text-[16px]">
                    Официальное трудоустройство
                  </div>
                  <div className="text-[13px] sm:text-[14px] text-slate-400 leading-relaxed">
                    Белая зарплата, полный соцпакет
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white mb-1 text-[15px] sm:text-[16px]">
                    Гибкий формат
                  </div>
                  <div className="text-[13px] sm:text-[14px] text-slate-400 leading-relaxed">
                    Офис или гибридный график работы
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white mb-1 text-[15px] sm:text-[16px]">
                    Удобное расположение
                  </div>
                  <div className="text-[13px] sm:text-[14px] text-slate-400 leading-relaxed">
                    Аэродромная ул., 4, лит. А<br />
                    Метро: Пионерская, Чёрная речка, Старая Деревня
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <LinkIcon className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white mb-1 text-[15px] sm:text-[16px]">
                    Подробнее о проектах
                  </div>
                  <a 
                    href="https://yandex.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[13px] sm:text-[14px] text-slate-300 hover:text-white transition-colors underline decoration-slate-500 hover:decoration-slate-300"
                    style={{ textUnderlineOffset: '4px' }}
                  >
                    yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
