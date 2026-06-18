// HayAi Premium Website — Telegram заявки
// 1) Создай бота через @BotFather, получи BOT_TOKEN
// 2) Напиши боту любое сообщение
// 3) Узнай CHAT_ID через: https://api.telegram.org/bot<TOKEN>/getUpdates
// 4) Вставь данные ниже
const TELEGRAM_BOT_TOKEN = "PASTE_BOT_TOKEN_HERE";
const TELEGRAM_CHAT_ID = "PASTE_CHAT_ID_HERE";

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }), {threshold:.14});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => { const r=btn.getBoundingClientRect(); btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)/10}px,${(e.clientY-r.top-r.height/2)/10}px)`; });
  btn.addEventListener('mouseleave', () => btn.style.transform='translate(0,0)');
});


const translations = {
  hy: {
    navCourses:'Դասընթացներ', navWhy:'Ինչու մենք', navProgram:'Ծրագիր', navRegister:'Գրանցվել', navCta:'Սկսել հիմա',
    eyebrow:'AI Academy Armenia • Premium Education', heroTitle:'Սովորիր արհեստական բանականություն ու կառուցիր քո ապագան',
    heroText:'HayAi-ն պրակտիկ AI ակադեմիա է՝ ուսանողների, մասնագետների, ֆրիլանսերների, ձեռներեցների և բիզնեսների համար։ Այստեղ սովորում ես ոչ թե տեսություն, այլ իրական գործիքներ, ավտոմատացումներ և եկամուտ ստեղծող հմտություններ։',
    heroPrimary:'Գրանցվել անվճար խորհրդատվության', heroGhost:'Տեսնել ուղղությունները', stat1:'AI ուղղություն', stat2:'հարմար սկսնակների համար', stat3:'Zoom դասեր և աջակցություն',
    sprintTitle:'AI Skills Sprint', sprintText:'Prompt Engineering • ChatGPT • Automation • Freelance • Business AI', mini1:'+ AI Portfolio', mini2:'+ Telegram Support', logosText:'Ոգեշնչված ժամանակակից tech ոճից',
    coursesTitle:'AI ուղղություններ, որոնք կարող են արագ տալ իրական արդյունք',
    course1:'Սովորիր օգտագործել AI գործիքներ կոդի, կայքերի, հավելվածների, debugging-ի և պրոդուկտ մտածողության համար։',
    course2:'Ստեղծիր վիդեոներ, ռիլսեր, գովազդային կոնտենտ, storyboard և visual concepts՝ AI workflow-ներով։',
    course3:'Ինչպես AI-ով ստեղծել ծառայություններ, փաթեթավորել առաջարկը, գտնել հաճախորդներ և վաճառել։',
    course4:'Ավտոմատացրու վաճառքը, CRM-ը, հաճախորդների պատասխանները, հաշվետվությունները և թիմի աշխատանքը։',
    course5:'AI-ն ուսման մեջ՝ արագ հետազոտություն, կոնսպեկտներ, պրեզենտացիաներ, քննության պատրաստություն։',
    course6:'Անհատական ուղղորդում, պրակտիկ առաջադրանքներ, պորտֆոլիո և արդյունքի վրա կենտրոնացած ծրագիր։',
    whyTitle:'Սա սովորական դասընթաց չէ։ Սա AI մտածելակերպի արագացում է։', whyText:'Մենք կառուցում ենք միջավայր, որտեղ մարդը սովորում է մտածել, ստեղծել և վաճառել AI-ի օգնությամբ։ Յուրաքանչյուր մոդուլ ունի գործնական արդյունք՝ պատրաստ prompt-եր, workflow-ներ, automation-ներ և իրական кейսեր։',
    feat1Title:'Պրակտիկ դասեր', feat1Text:'Ամեն դասից հետո ունես պատրաստ կիրառելի գործիք։', feat2Title:'Հայերեն բացատրություն', feat2Text:'Բարդ AI թեմաները պարզ, հասկանալի և կիրառելի ձևով։', feat3Title:'Վաճառքի մտածողություն', feat3Text:'Սովորում ես ոչ միայն ստեղծել, այլ նաև փաթեթավորել ու վաճառել։',
    programTitle:'Ինչ է սովորում ուսանողը', step1Title:'AI հիմքեր', step1Text:'Ինչպես ճիշտ աշխատել ChatGPT-ի, image/video AI-ի և automation գործիքների հետ։', step2Text:'Պրոֆեսիոնալ prompt-երի կառուցվածք, վաճառքի, ուսման և բիզնեսի համար։', step3Title:'Real Projects', step3Text:'Կայքի կոնտենտ, ռիլս, գովազդ, CRM սցենար, բոտի logic և mini-portfolio։', step4Title:'Monetization', step4Text:'Ինչ ծառայություն առաջարկել, ինչպես գին դնել, ինչպես գրել հաճախորդին և փակել վաճառքը։',
    regTitle:'Գրանցվիր անվճար խորհրդատվության', regText:'Լրացրու տվյալները, և հայտը կարող է ուղարկվել Telegram՝ HayAi թիմին։', submitBtn:'Ուղարկել հայտը', statusDefault:'Telegram միացնելու համար բացիր script.js և դիր BOT_TOKEN ու CHAT_ID։',

    detailsTitle:'Փոքր դետալներ, որոնք HayAi-ին դարձնում են ուժեղ կրթական փորձ', detail1Title:'Անձնական Roadmap', detail1Text:'Սկզբում հասկանում ենք քո նպատակը՝ ուսում, աշխատանք, freelance կամ բիզնես, հետո տալիս ենք հստակ քայլերի քարտեզ։', detail2Title:'Պատրաստ Template-ներ', detail2Text:'Ստանում ես prompt pack-եր, վաճառքի նամակներ, content framework-ներ և AI workflow-ներ, որոնք կարող ես միանգամից կիրառել։', detail3Title:'Portfolio արդյունք', detail3Text:'Դասընթացի ընթացքում հավաքում ես փոքր, բայց գեղեցիկ portfolio՝ կայքի տեքստ, գովազդ, ռիլս, bot logic և automation օրինակներ։', reviewsTitle:'Ինչ են ասում ուսանողները HayAi-ի մասին', review1Text:'«Առաջին անգամ AI-ն հասկացա պարզ լեզվով։ Ամենակարևորը՝ դասից հետո արդեն գիտեի ինչ անել և ինչպես կիրառել գործիքները իմ աշխատանքի մեջ»։', review1Name:'Անի Մ.', review1Role:'Ուսանող • AI for Study', review2Text:'«Շատ պրակտիկ էր։ Prompt-երը, վաճառքի գաղափարները և freelance փաթեթավորումը ինձ օգնեցին հասկանալ՝ ինչպես AI-ից իրական ծառայություն սարքել»։', review2Name:'Դավիթ Ս.', review2Role:'Ֆրիլանսեր • AI Freelance Income', review3Text:'«Բիզնես ավտոմատացման բաժինը շատ օգտակար էր։ Հասկացանք՝ ինչպես արագացնել հաճախորդների պատասխանները և թիմի աշխատանքը»։', review3Name:'Մարիամ Հ.', review3Role:'Փոքր բիզնես • Automation',
    phName:'Անուն Ազգանուն', phPhone:'Հեռախոսահամար', phMessage:'Գրիր՝ ինչ նպատակ ունես', selectCourse:'Ընտրիր ուղղությունը', ready:'Ֆорма աշխատում է։ Մնաց միայն script.js-ում դնել BOT_TOKEN և CHAT_ID։', success:'Շնորհակալություն։ Ձեր հայտը ուղարկված է։', error:'Չհաջողվեց ուղարկել։ Ստուգիր Telegram token/chat id։'
  },
  ru: {
    navCourses:'Курсы', navWhy:'Почему мы', navProgram:'Программа', navRegister:'Регистрация', navCta:'Начать сейчас',
    eyebrow:'AI Academy Armenia • Premium Education', heroTitle:'Освой искусственный интеллект и построй своё будущее',
    heroText:'HayAi — практическая AI-академия для студентов, специалистов, фрилансеров, предпринимателей и бизнеса. Здесь ты изучаешь не сухую теорию, а реальные инструменты, автоматизации и навыки, которые можно монетизировать.',
    heroPrimary:'Записаться на бесплатную консультацию', heroGhost:'Посмотреть направления', stat1:'AI-направлений', stat2:'подходит для новичков', stat3:'Zoom-уроки и поддержка',
    sprintTitle:'AI Skills Sprint', sprintText:'Prompt Engineering • ChatGPT • Automation • Freelance • Business AI', mini1:'+ AI-портфолио', mini2:'+ Telegram-поддержка', logosText:'Вдохновлено современным tech-стилем',
    coursesTitle:'AI-направления, которые быстро дают практический результат',
    course1:'Научись применять AI для кода, сайтов, приложений, debugging и продуктового мышления.',
    course2:'Создавай видео, reels, рекламный контент, storyboard и visual concepts через AI-workflow.',
    course3:'Как создавать AI-услуги, упаковывать предложение, находить клиентов и продавать.',
    course4:'Автоматизируй продажи, CRM, ответы клиентам, отчёты и работу команды.',
    course5:'AI для учёбы: быстрый research, конспекты, презентации и подготовка к экзаменам.',
    course6:'Индивидуальное направление, практические задания, портфолио и фокус на результат.',
    whyTitle:'Это не обычный курс. Это ускорение AI-мышления.', whyText:'Мы создаём среду, где человек учится думать, создавать и продавать с помощью AI. Каждый модуль даёт практический результат: готовые промпты, workflow, автоматизации и реальные кейсы.',
    feat1Title:'Практические уроки', feat1Text:'После каждого занятия у тебя есть готовый инструмент для применения.', feat2Title:'Понятное объяснение', feat2Text:'Сложные AI-темы простым, понятным и применимым языком.', feat3Title:'Мышление продаж', feat3Text:'Ты учишься не только создавать, но и упаковывать и продавать.',
    programTitle:'Что изучает студент', step1Title:'AI-основа', step1Text:'Как правильно работать с ChatGPT, image/video AI и инструментами автоматизации.', step2Text:'Структура профессиональных промптов для продаж, учёбы и бизнеса.', step3Title:'Реальные проекты', step3Text:'Контент для сайта, reels, реклама, CRM-сценарий, логика бота и mini-portfolio.', step4Title:'Монетизация', step4Text:'Какую услугу предлагать, как ставить цену, писать клиенту и закрывать продажу.',
    regTitle:'Запишись на бесплатную консультацию', regText:'Заполни данные, и заявка может приходить в Telegram команде HayAi.', submitBtn:'Отправить заявку', statusDefault:'Чтобы подключить Telegram, открой script.js и вставь BOT_TOKEN и CHAT_ID.',

    detailsTitle:'Премиальные детали, которые делают обучение в HayAi сильнее', detail1Title:'Личный Roadmap', detail1Text:'Сначала понимаем твою цель: учёба, работа, freelance или бизнес, затем даём понятную карту шагов.', detail2Title:'Готовые template-ы', detail2Text:'Ты получаешь prompt pack, письма для продаж, контент-фреймворки и AI-workflow, которые можно сразу применять.', detail3Title:'Portfolio-результат', detail3Text:'Во время обучения ты собираешь небольшое, но красивое portfolio: тексты сайта, реклама, reels, bot logic и примеры automation.', reviewsTitle:'Что говорят студенты о HayAi', review1Text:'«Я впервые понял AI простым языком. Главное — после урока я уже знал, что делать и как применять инструменты в работе».', review1Name:'Ани М.', review1Role:'Студентка • AI for Study', review2Text:'«Очень практично. Prompt-ы, идеи продаж и упаковка freelance помогли понять, как сделать из AI реальную услугу».', review2Name:'Давид С.', review2Role:'Фрилансер • AI Freelance Income', review3Text:'«Блок бизнес-автоматизации был очень полезным. Мы поняли, как ускорить ответы клиентам и работу команды».', review3Name:'Мариам А.', review3Role:'Малый бизнес • Automation',
    phName:'Имя Фамилия', phPhone:'Номер телефона', phMessage:'Напиши, какая у тебя цель', selectCourse:'Выбери направление', ready:'Форма работает. Осталось вставить BOT_TOKEN и CHAT_ID в script.js', success:'Спасибо. Ваша заявка отправлена.', error:'Не получилось отправить. Проверь Telegram token/chat id.'
  },
  en: {
    navCourses:'Courses', navWhy:'Why us', navProgram:'Program', navRegister:'Register', navCta:'Start now',
    eyebrow:'AI Academy Armenia • Premium Education', heroTitle:'Master Artificial Intelligence and build your future',
    heroText:'HayAi is a practical AI academy for students, professionals, freelancers, entrepreneurs, and businesses. You learn real tools, automations, and monetizable skills — not boring theory.',
    heroPrimary:'Book a free consultation', heroGhost:'Explore directions', stat1:'AI directions', stat2:'beginner friendly', stat3:'Zoom lessons & support',
    sprintTitle:'AI Skills Sprint', sprintText:'Prompt Engineering • ChatGPT • Automation • Freelance • Business AI', mini1:'+ AI Portfolio', mini2:'+ Telegram Support', logosText:'Inspired by modern tech design',
    coursesTitle:'AI directions built for fast practical results',
    course1:'Learn to use AI for code, websites, apps, debugging, and product thinking.',
    course2:'Create videos, reels, ad content, storyboards, and visual concepts with AI workflows.',
    course3:'Build AI-powered services, package offers, find clients, and sell your skills.',
    course4:'Automate sales, CRM, customer replies, reporting, and team workflows.',
    course5:'AI for studying: fast research, notes, presentations, and exam preparation.',
    course6:'Personal guidance, practical tasks, portfolio building, and a result-focused path.',
    whyTitle:'This is not a regular course. It is an AI mindset accelerator.', whyText:'We build an environment where people learn to think, create, and sell with AI. Every module creates a practical outcome: ready prompts, workflows, automations, and real cases.',
    feat1Title:'Practical lessons', feat1Text:'After every lesson, you get a ready-to-use tool.', feat2Title:'Clear explanation', feat2Text:'Complex AI topics explained in a simple and practical way.', feat3Title:'Sales thinking', feat3Text:'You learn not only to create, but also to package and sell.',
    programTitle:'What students learn', step1Title:'AI foundations', step1Text:'How to work properly with ChatGPT, image/video AI, and automation tools.', step2Text:'Professional prompt structures for sales, study, and business.', step3Title:'Real Projects', step3Text:'Website content, reels, ads, CRM scripts, bot logic, and a mini portfolio.', step4Title:'Monetization', step4Text:'What service to offer, how to price it, message clients, and close sales.',
    regTitle:'Book a free consultation', regText:'Fill in your details and the lead can be sent to the HayAi team in Telegram.', submitBtn:'Send request', statusDefault:'To connect Telegram, open script.js and add BOT_TOKEN and CHAT_ID.',

    detailsTitle:'Premium details that make the HayAi experience stronger', detail1Title:'Personal Roadmap', detail1Text:'First, we understand your goal: study, career, freelance, or business. Then we give you a clear step-by-step path.', detail2Title:'Ready Templates', detail2Text:'You get prompt packs, sales messages, content frameworks, and AI workflows that you can apply immediately.', detail3Title:'Portfolio Outcome', detail3Text:'During the course, you build a small but polished portfolio: website copy, ads, reels, bot logic, and automation examples.', reviewsTitle:'What students say about HayAi', review1Text:'“For the first time, I understood AI in simple language. After the lesson, I knew exactly what to do and how to use the tools.”', review1Name:'Ani M.', review1Role:'Student • AI for Study', review2Text:'“Very practical. The prompts, sales ideas, and freelance packaging helped me understand how to turn AI into a real service.”', review2Name:'David S.', review2Role:'Freelancer • AI Freelance Income', review3Text:'“The business automation module was very useful. We understood how to speed up client replies and team workflows.”', review3Name:'Mariam H.', review3Role:'Small business • Automation',
    phName:'Full name', phPhone:'Phone number', phMessage:'Write your goal', selectCourse:'Choose a direction', ready:'The form works. Add BOT_TOKEN and CHAT_ID in script.js to receive leads.', success:'Thank you. Your request has been sent.', error:'Could not send. Check Telegram token/chat id.'
  }
};

let currentLang = localStorage.getItem('hayaiLang') || 'hy';
function setLanguage(lang){
  currentLang = lang; localStorage.setItem('hayaiLang', lang); document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (translations[lang][k]) el.textContent = translations[lang][k]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const k = el.dataset.i18nPlaceholder; if (translations[lang][k]) el.placeholder = translations[lang][k]; });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}
document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(currentLang);

const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const text = `🚀 New HayAi Lead\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n🎯 Course: ${data.course}\n💬 Message: ${data.message || '-'}\n\nSource: Website`;

  if (TELEGRAM_BOT_TOKEN.includes('PASTE') || TELEGRAM_CHAT_ID.includes('PASTE')) {
    status.textContent = translations[currentLang].ready;
    alert(translations[currentLang].ready);
    return;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({chat_id: TELEGRAM_CHAT_ID, text})
    });
    if (!res.ok) throw new Error('Telegram error');
    status.textContent = translations[currentLang].success;
    form.reset();
  } catch (err) {
    status.textContent = translations[currentLang].error;
  }
});
const BOT_TOKEN = "8830869253:AAHbwuX0NhyniNHrULZp8UPwXrPpDQgc54A";
const CHAT_ID = "908208932";

document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const phone = form.phone.value;
  const course = form.course.value;
  const message = form.message.value;

  const text = `
🎓 Новая заявка HayAi

👤 Имя: ${name}
📞 Телефон: ${phone}
📚 Курс: ${course}

💬 Сообщение:
${message}
`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    alert("✅ Заявка отправлена!");
    form.reset();

  } catch (error) {
    alert("❌ Ошибка отправки");
    console.error(error);
  }
});