/* =====================================================================
   data.js — كل محتوى الموقع هنا. لإضافة درس: أضف سطرًا داخل LESSONS.
   الصيغة:  ["العنوان", "رابط الصوت", "رابط يوتيوب (اختياري)"]
   (اختياري) في أي قسم داخل CATS أضف  pl:"رابط قائمة التشغيل"  فيظهر زر «السلسلة كاملة على يوتيوب»
   العنوان إما نص واحد، أو {en:"English", ur:"اردو"}
   ===================================================================== */

const SITE = {
  name: { en: "Iman & Amal Academy", ur: "ایمان و عمل اکیڈمی" },
  tagline: {
    en: "Knowledge that builds faith and shapes action",
    ur: "ایسا علم جو ایمان کو مضبوط کرے اور عمل سنوارے"
  },
  // اتركها فارغة "" لإخفاء الزر
  contact: {
    email: "imanoamal212@gmail.com",      // مثال: "info@example.com"
    youtube: "https://www.youtube.com/@islamiclectures313",   // يمكن وضع أكثر من رابط: ["رابط1", "رابط2"]
    telegram: "https://t.me/seeratunnabipbuh",   // مثال: "https://t.me/اسم_القناة"
    whatsapp: ""
  }
};

const GROUPS = [
  { id: "tafseer", icon: "📖",
    t: { en: "Tafseer of the Quran", ur: "تفسیر القرآن" },
    d: { en: "Verse-by-verse lessons on the meanings, guidance and practical lessons of selected Surahs.",
         ur: "منتخب سورتوں کی تفسیر پر مبنی دروس: معانی، ہدایات اور عملی اسباق۔" } },
  { id: "seerah", icon: "🕌",
    t: { en: "Seerah & Islamic History", ur: "سیرت و تاریخِ اسلام" },
    d: { en: "The life of the Prophet ﷺ, the Prophets (peace be upon them), the Rightly Guided Caliphs and the Companions (may Allah be pleased with them).",
         ur: "سیرتِ نبوی ﷺ، انبیائے کرام علیہم السلام، خلفائے راشدین اور صحابۂ کرام رضی اللہ عنہم کی زندگی کے دروس۔" } },
  { id: "topics", icon: "📚",
    t: { en: "Different Topics", ur: "مختلف موضوعات" },
    d: { en: "The Hereafter, short clips and a variety of useful Islamic topics.",
         ur: "آخرت، مختصر کلپس اور مختلف دینی موضوعات پر مفید دروس۔" } }
];

const CATS = [
  // ---- Tafseer ----
  { id: "fatir",   g: "tafseer", icon: "📖", t: { en: "Surah Fatir", ur: "سورۃ فاطر" } },
  { id: "ahzab",   g: "tafseer", icon: "📖", t: { en: "Surah Al-Ahzab", ur: "سورۃ الاحزاب" } },
  { id: "anfal",   g: "tafseer", icon: "📖", t: { en: "Surah Al-Anfal (verses 1–60)", ur: "سورۃ الانفال (آیات ۱ تا ۶۰)" } },
  { id: "ankabut", g: "tafseer", icon: "📖", t: { en: "Surah Al-Ankabut (excluding verse 35)", ur: "سورۃ العنکبوت (آیت ۳۵ کے علاوہ)" } },
  { id: "rum",     g: "tafseer", icon: "📖", t: { en: "Surah Ar-Rum", ur: "سورۃ الروم" } },
  { id: "luqman",  g: "tafseer", icon: "📖", t: { en: "Surah Luqman (complete)", ur: "سورۃ لقمان (مکمل)" } },
  { id: "sajdah",  g: "tafseer", icon: "📖", t: { en: "Surah As-Sajdah (complete)", ur: "سورۃ السجدہ (مکمل)" } },
  // ---- Seerah ----
  { id: "nabi",    g: "seerah", icon: "🌙", t: { en: "Seerah of the Prophet Muhammad ﷺ", ur: "سیرت النبی ﷺ" },
    pl: "https://www.youtube.com/playlist?list=PLgdKc07H0qibI1pzsUNlQvMxLRvoOWqNC" },
  { id: "anbiya",  g: "seerah", icon: "✨", t: { en: "Stories of the Prophets (peace be upon them)", ur: "سیرتِ انبیاء علیہم السلام" } },
  { id: "abubakr", g: "seerah", icon: "🕌", t: { en: "Abu Bakr as-Siddiq (may Allah be pleased with him)", ur: "حضرت ابو بکر صدیق رضی اللہ عنہ" },
    pl: "https://www.youtube.com/playlist?list=PLgdKc07H0qiZqHg4_7Kez7pgRR86VKk3i" },
  { id: "umar",    g: "seerah", icon: "🕌", t: { en: "Umar ibn al-Khattab (may Allah be pleased with him)", ur: "حضرت عمر بن خطاب رضی اللہ عنہ" } },
  { id: "usman",   g: "seerah", icon: "🕌", t: { en: "Uthman ibn Affan (may Allah be pleased with him)", ur: "حضرت عثمان بن عفان رضی اللہ عنہ" } },
  { id: "ali",     g: "seerah", icon: "🕌", t: { en: "Ali ibn Abi Talib (may Allah be pleased with him)", ur: "حضرت علی بن ابی طالب رضی اللہ عنہ" } },
  { id: "futuhat", g: "seerah", icon: "🏳️", t: { en: "Conquests of the Companions (may Allah be pleased with them)", ur: "فتوحاتِ صحابہ رضی اللہ عنہم" } },
  { id: "umarabd", g: "seerah", icon: "📜", t: { en: "Umar ibn Abd al-Aziz (may Allah have mercy on him)", ur: "حضرت عمر بن عبد العزیز رحمہ اللہ" } },
  // ---- Topics ----
  { id: "akhirah", g: "topics", icon: "⏳", t: { en: "Al-Akhirah (The Hereafter) Lectures", ur: "آخرت کے دروس" } },
  { id: "clips",   g: "topics", icon: "🎬", t: { en: "Short Clips", ur: "مختصر کلپس" } },
  { id: "misc",    g: "topics", icon: "🗂️", t: { en: "Miscellaneous Topics", ur: "متفرقات" } }
];

const LESSONS = {
  nabi: [
    [{en: "Introduction", ur: "تعارف"}, "https://archive.org/download/62-the-delegations/01-%20Introduction.mp3", "https://youtu.be/qLFgr7Gke0M"],
    [{en: "Ancestors of the Prophet ﷺ", ur: "نبی کریم ﷺ کے آباء و اجداد"}, "https://archive.org/download/62-the-delegations/02-%20Ancestors%20of%20the%20Prophet%20SAW.mp3", "https://youtu.be/liMPiWhHOH0"],
    [{en: "Adyaan-e-Arab", ur: "ادیانِ عرب"}, "https://archive.org/download/62-the-delegations/03-%20Adyaan-e-Arab.mp3", "https://youtu.be/ENru5b0XzYE"],
    [{en: "Childhood Adolescence", ur: "بچپن اور لڑکپن"}, "https://archive.org/download/62-the-delegations/04-%20Childhood%20Adolescence.mp3", "https://youtu.be/kaBwtaOIOrc"],
    [{en: "Marriage and Rebuilding Kaabah", ur: "نکاح اور تعمیرِ کعبہ"}, "https://archive.org/download/62-the-delegations/05-%20Marriage%20and%20Rebuliding%20Kaabah.mp3", "https://youtu.be/TGU4HVmknrc"],
    [{en: "Muwahhiddeen", ur: "موحدین"}, "https://archive.org/download/62-the-delegations/06-%20Muwahhiddeen.mp3", "https://youtu.be/AqmP6Bqj_VI"],
    [{en: "Muhammad ﷺ in the Old Texts", ur: "قدیم کتب میں محمد ﷺ کا ذکر"}, "https://archive.org/download/62-the-delegations/07-%20Muhammad%20PBUH%20in%20the%20Old%20Texts.mp3", "https://youtu.be/oF-iShwAAVQ"],
    [{en: "First Wahi & Dawah", ur: "پہلی وحی اور دعوت"}, "https://archive.org/download/62-the-delegations/08-%20First%20Wahi%20%26%20Dawah.mp3", "https://youtu.be/ibiLCNSZREQ"],
    [{en: "Dawah & Reactions of Kuffar (1)", ur: "دعوت اور کفار کا ردِعمل (۱)"}, "https://archive.org/download/62-the-delegations/09-%20Dawah%20%26%20Reactions%20of%20Kuffar_2.mp3", "https://youtu.be/pOeYubamzIs"],
    [{en: "Dawah & Reactions of Kuffar (2)", ur: "دعوت اور کفار کا ردِعمل (۲)"}, "https://archive.org/download/62-the-delegations/10-%20Dawah%20%26%20Reactions%20of%20Kuffar-2.mp3", "https://youtu.be/ErH8TyxAHJQ"],
    [{en: "Abu Dhar al-Ghifari (may Allah be pleased with him) & Hijrat-e-Habshah", ur: "ابو ذر غفاری رضی اللہ عنہ اور ہجرتِ حبشہ"}, "https://archive.org/download/62-the-delegations/11-%20Abu%20Dhar%20Ghaffari%20-%20Hijrat-e-Habshah.mp3", "https://youtu.be/0AMNEh_O1_s"],
    [{en: "Lessons from Hijrat-e-Habshah", ur: "ہجرتِ حبشہ سے حاصل ہونے والے اسباق"}, "https://archive.org/download/62-the-delegations/12-%20Lessons%20from%20Hijrat-e-Habshah.mp3", "https://youtu.be/hZhLlAHP41Y"],
    [{en: "Important Events 1", ur: "اہم واقعات (۱)"}, "https://archive.org/download/62-the-delegations/13%20-%20Important%20Events%201.mp3", "https://youtu.be/CXkYIrHtJIY"],
    [{en: "Some Miracles Makkah Period 1", ur: "مکی دور کے چند معجزات (۱)"}, "https://archive.org/download/62-the-delegations/14%20-%20Some%20Miracles%20Makkah%20Period%201.mp3", "https://youtu.be/fIMyx6bYzMg"],
    [{en: "Aam ul Huzn (Year of Sorrow)", ur: "عام الحزن (غم کا سال)"}, "https://archive.org/download/62-the-delegations/15%20Aam%20ul%20Huzn%20(Year%20of%20Sorrow).mp3", "https://youtu.be/MLyqnzNFJqM"],
    [{en: "Mairaj (The Ascent)", ur: "معراج"}, "https://archive.org/download/62-the-delegations/16%20-%20Mairaj%20(The%20Ascent).mp3", "https://youtu.be/PXreC7NM9G4"],
    [{en: "Search for A New Base", ur: "نئے مرکز کی تلاش"}, "https://archive.org/download/62-the-delegations/17%20Search%20for%20A%20New%20Base.mp3", "https://youtu.be/bLkrM4fr4-I"],
    [{en: "Al Aqabah 2 & Start of Hijrah", ur: "بیعتِ عقبہ ثانیہ اور ہجرت کا آغاز"}, "https://archive.org/download/62-the-delegations/18%20Al%20Aqabah%202%20%26%20Start%20of%20Hijrah.mp3", "https://youtu.be/EEGk9xtRuEI"],
    [{en: "Hijrah", ur: "ہجرت"}, "https://archive.org/download/62-the-delegations/19%20Hijrah.mp3", "https://youtu.be/Tgt9I48x3LM"],
    [{en: "Some Important Lessons -Makkah", ur: "مکی دور کے چند اہم اسباق"}, "https://archive.org/download/62-the-delegations/20%20Some%20Important%20Lessions%20-Makkah.mp3", "https://youtu.be/5eqUZbGew7c"],
    [{en: "Madinah - Importance", ur: "مدینہ منورہ کی اہمیت"}, "https://archive.org/download/62-the-delegations/21%20Madinah%20-%20Importance.mp3", "https://youtu.be/tjdlFa6RD2c"],
    [{en: "Construction of Masjid-e-Nabwi and Mawakhat", ur: "مسجدِ نبوی کی تعمیر اور مؤاخات"}, "https://archive.org/download/62-the-delegations/22%20Construction%20of%20Masjid-e-Nabwi%20and%20Mawakhat.mp3", "https://youtu.be/Vv9G__0AvuY"],
    [{en: "Misaq e Madinah", ur: "میثاقِ مدینہ"}, "https://archive.org/download/62-the-delegations/23%20%20Misaq%20e%20Madinah.mp3", "https://youtu.be/ubZyE7AsaVU"],
    [{en: "Some Important Events & Start of War", ur: "چند اہم واقعات اور جنگوں کا آغاز"}, "https://archive.org/download/62-the-delegations/24%20Some%20Important%20Events%20%26%20Start%20of%20War.mp3", "https://youtu.be/06Bie1Le5-E"],
    [{en: "The Prelude to Badr", ur: "غزوۂ بدر سے پہلے کے حالات"}, "https://archive.org/download/62-the-delegations/25%20The%20Prelude%20to%20Badr.mp3", "https://youtu.be/4KJVI5kEU7s"],
    [{en: "Battle of Badr Part 1", ur: "غزوۂ بدر (حصہ ۱)"}, "https://archive.org/download/62-the-delegations/26%20Battle%20of%20BADR%20Part%201.mp3", "https://youtu.be/vvqhou0atjY"],
    [{en: "Battle of Badr (Part 2)", ur: "غزوۂ بدر (حصہ ۲)"}, "https://archive.org/download/62-the-delegations/27%20Battle%20of%20Al%20Badr-2.mp3", "https://youtu.be/pBT-qwgGURE"],
    [{en: "Badr -Spoils of war & Prisoners", ur: "بدر: مالِ غنیمت اور قیدی"}, "https://archive.org/download/62-the-delegations/28%20Badr%20-Spoils%20of%20war%20%26%20Prisoners.mp3", "https://youtu.be/4V2yJgCNY1M"],
    [{en: "Some Events after Badr 1", ur: "غزوۂ بدر کے بعد کے چند واقعات (۱)"}, "https://archive.org/download/62-the-delegations/29%20Some%20Events%20after%20Badr%201.mp3", "https://youtu.be/i4GZy2EymtQ"],
    [{en: "Some Events around 2Hijri", ur: "۲ ہجری کے چند واقعات"}, "https://archive.org/download/62-the-delegations/30%20Some%20Events%20around%202Hijri.mp3", "https://youtu.be/PgQIidSKwNI"],
    [{en: "Events between Badr & Uhud 2", ur: "بدر اور احد کے درمیان کے واقعات (۲)"}, "https://archive.org/download/62-the-delegations/31%20Events%20bw%20Badr%20%26%20Uhod%202.mp3", "https://youtu.be/6ml1VprwwDk"],
    [{en: "The Path To Uhud", ur: "احد کی طرف"}, "https://archive.org/download/62-the-delegations/32%20The%20Path%20To%20Uhod.mp3", "https://youtu.be/RpoSDh7enyk"],
    [{en: "Ghazwa Uhud 1", ur: "غزوۂ احد (۱)"}, "https://archive.org/download/62-the-delegations/33%20Ghazwa%20Uhad%201.mp3", "https://youtu.be/Fr1PqSQUUUY"],
    [{en: "Ghazwa Uhud 2", ur: "غزوۂ احد (۲)"}, "https://archive.org/download/62-the-delegations/34%20Ghazwa%20Uhad%202.mp3", "https://youtu.be/pJB5zq6ucBk"],
    [{en: "Ghazwa Uhud 3", ur: "غزوۂ احد (۳)"}, "https://archive.org/download/62-the-delegations/35-GhazwahUhad3.mp3", "https://youtu.be/Fcu3fg69kLs"],
    [{en: "Ghazwa Uhud 4 Lessons", ur: "غزوۂ احد (۴): اسباق"}, "https://archive.org/download/62-the-delegations/36%20Ghazwa%20Uhad%204%20Lessons.mp3", "https://youtu.be/H8jA3q1NMs0"],
    [{en: "Some Events after Uhud -1", ur: "غزوۂ احد کے بعد کے چند واقعات (۱)"}, "https://archive.org/download/62-the-delegations/37%20Some%20Events%20after%20Uhad%20-1.mp3", "https://youtu.be/rirahv-WsRA"],
    [{en: "Some Events after Uhud - 2", ur: "غزوۂ احد کے بعد کے چند واقعات (۲)"}, "https://archive.org/download/62-the-delegations/38%20Some%20Events%20after%20Uhad%20-%202.mp3", "https://youtu.be/3g02ghWodOQ"],
    [{en: "Events before Ghazwa e Khandaq", ur: "غزوۂ خندق سے پہلے کے واقعات"}, "https://archive.org/download/62-the-delegations/39%20Events%20before%20Ghazwa%20e%20Khandaq.mp3", "https://youtu.be/ZY-uy19L-6w"],
    [{en: "Ghazwa-e-Ahzab", ur: "غزوۂ احزاب"}, "https://archive.org/download/62-the-delegations/40-GhazwaEAhzab.mp3", "https://youtu.be/YdKKECQUeWU"],
    [{en: "Qurayzah And After Ahzab", ur: "بنو قریظہ اور غزوۂ احزاب کے بعد"}, "https://archive.org/download/62-the-delegations/41-Qurayzah%20And%20After%20Ahzab.mp3", "https://youtu.be/Qpc5YHmXZJU"],
    [{en: "Some Important Events After Ahzaab", ur: "غزوۂ احزاب کے بعد کے چند اہم واقعات"}, "https://archive.org/download/62-the-delegations/42-Some%20Important%20Events%20AfterAhzaab.mp3", "https://youtu.be/Besfc5BQW60"],
    [{en: "Ghazwa Bani Mustaliq And Waqaia Ifk", ur: "غزوۂ بنو مصطلق اور واقعۂ افک"}, "https://archive.org/download/62-the-delegations/43-Ghazwa%20Bani%20Mustaliq%20And%20Waqaia%20Ifk.mp3", "https://youtu.be/gvQtMowfUl8"],
    [{en: "Events Till Bait E Ridwan", ur: "بیعتِ رضوان تک کے واقعات"}, "https://archive.org/download/62-the-delegations/44-Events%20Till%20Bait%20E%20Ridwan.mp3", "https://youtu.be/5bfGJLALjFI"],
    [{en: "Hudaybiah Pact", ur: "صلحِ حدیبیہ"}, "https://archive.org/download/62-the-delegations/45-Hudaybiah%20Pact.mp3", "https://youtu.be/Dq-6v0AokWM"],
    [{en: "Letters To Kings", ur: "بادشاہوں کے نام خطوط"}, "https://archive.org/download/62-the-delegations/46-Letters%20To%20Kings.mp3", "https://youtu.be/4fL3QMm6rek"],
    [{en: "Important Concepts And Khaybar", ur: "اہم تصورات اور غزوۂ خیبر"}, "https://archive.org/download/62-the-delegations/47-Important%20Concepts%20And%20Khaybar.mp3", "https://youtu.be/gDxGTWdQFNo"],
    [{en: "Khaybar Part 2", ur: "غزوۂ خیبر (حصہ ۲)"}, "https://archive.org/download/62-the-delegations/48-Khaybar%20Part%202.mp3", "https://youtu.be/fJanJ-C11A0"],
    [{en: "Important Events After Khaybar", ur: "خیبر کے بعد کے اہم واقعات"}, "https://archive.org/download/62-the-delegations/49-Important%20Events%20After%20Khaybar.mp3", "https://youtu.be/kIVRRf7sdq8"],
    [{en: "Some Familial Matters", ur: "چند خانگی معاملات"}, "https://archive.org/download/62-the-delegations/50-Some%20Familial%20Matters.mp3", "https://youtu.be/dYA55OGKOVU"],
    [{en: "eight Hijri Some Events", ur: "۸ ہجری کے چند واقعات"}, "https://archive.org/download/62-the-delegations/51-eight%20Hijri%20Some%20Events.mp3", "https://youtu.be/Wps_F6xoQhA"],
    [{en: "Fatah E Makkah Part 1", ur: "فتحِ مکہ (حصہ ۱)"}, "https://archive.org/download/62-the-delegations/52-Fatah%20E%20Makkah%20Part%201.mp3", "https://youtu.be/YR3CUFqNze4"],
    [{en: "Fatah E Makkah Part 2", ur: "فتحِ مکہ (حصہ ۲)"}, "https://archive.org/download/62-the-delegations/53-Fatah%20E%20Makkah%20Part%202.mp3", "https://youtu.be/dbIrLJOHnUE"],
    [{en: "After Fatah e Makkah", ur: "فتحِ مکہ کے بعد"}, "https://archive.org/download/62-the-delegations/54-After%20Fatah%20e%20Makkah.mp3", "https://youtu.be/bO--gtgfKG4"],
    [{en: "Ghazwa Hunain Part 1", ur: "غزوۂ حنین (حصہ ۱)"}, "https://archive.org/download/62-the-delegations/55-Ghazwa%20Hunain%20Part%201.mp3", "https://youtu.be/GLDqXofiBJY"],
    [{en: "Ghazwa Hunain Part 2", ur: "غزوۂ حنین (حصہ ۲)"}, "https://archive.org/download/62-the-delegations/56-Ghazwa%20Hunain%20Part%202.mp3", "https://youtu.be/OiKuh0ap-ag"],
    [{en: "Hunain And Aftermath", ur: "غزوۂ حنین اور اس کے نتائج"}, "https://archive.org/download/62-the-delegations/57-Hunain%20And%20After%20math.mp3", "https://youtu.be/nMAQomrwy18"],
    [{en: "Ghazwa Tabuk Part 1", ur: "غزوۂ تبوک (حصہ ۱)"}, "https://archive.org/download/62-the-delegations/58-Ghazwa%20Tabook%20Part%201.mp3", "https://youtu.be/SAFdbf0jwUI"],
    [{en: "Ghazwa Tabuk Part 2", ur: "غزوۂ تبوک (حصہ ۲)"}, "https://archive.org/download/62-the-delegations/59-Ghazwa%20Tabouk%20Part%202.mp3", "https://youtu.be/HJ0G7tSFros"],
    [{en: "Ghazwa Tabuk Part 3", ur: "غزوۂ تبوک (حصہ ۳)"}, "https://archive.org/download/62-the-delegations/60-Ghazwa%20Tabouk%20Part%203.mp3", "https://youtu.be/Kw8T0n7ptW8"],
    [{en: "The Story of Kaab ibn Malik (may Allah be pleased with him)", ur: "قصۂ کعب بن مالک رضی اللہ عنہ"}, "https://archive.org/download/62-the-delegations/61-Qissa%20Kaab%20Bin%20Malik.mp3", "https://youtu.be/bTWhE2yARAU"],
    [{en: "The Delegations", ur: "وفود کی آمد"}, "https://archive.org/download/62-the-delegations/62-The%20Delegations.mp3", "https://youtu.be/MwVy8iOBfwA"],
    [{en: "Hajjat Ul Widaa", ur: "حجۃ الوداع"}, "https://archive.org/download/62-the-delegations/63-Hajjat%20Ul%20Widaa.mp3", "https://youtu.be/quCTnh0DzjM"],
    [{en: "The Final Journey", ur: "آخری سفر"}, "https://archive.org/download/62-the-delegations/64-The%20Final%20Journey.mp3", "https://youtu.be/-3WdoJVRRTo"],
    [{en: "Some Learning Points From Seerat Un Nabi ﷺ", ur: "سیرت النبی ﷺ سے چند سبق آموز نکات"}, "https://archive.org/download/62-the-delegations/65-Some%20Learning%20Points%20From%20Seerat%20Un%20Nabi%20Pbuh.mp3", "https://youtu.be/NWugiN3JHJk"],
    [{en: "Seerat Un Nabi-Some Learning Points part 2", ur: "سیرت النبی ﷺ سے چند سبق آموز نکات (حصہ ۲)"}, "https://archive.org/download/62-the-delegations/66-Seerat%20Un%20Nabi-Some%20Learning%20Points%20part%202.mp3", "https://youtu.be/KmU0xQlzRmQ"],
  ],
  abubakr: [
    [{en: "Introduction", ur: "تعارف"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2001%20Introduction.mp3", "https://youtu.be/cDBVG9yrcaA"],
    [{en: "Personal Life & Early Islam", ur: "ذاتی حالات اور ابتدائی اسلام"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2002%20Personal%20%26%20Early%20Islam.mp3", "https://youtu.be/b4qJjD2EuwE"],
    [{en: "Some Events of the Makkan Period", ur: "مکی دور کے چند واقعات"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2003%20Some%20Makki%20Events.mp3", "https://youtu.be/a81GlxTdlOg"],
    [{en: "The Hijrah", ur: "ہجرت"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2004%20The%20Hijrah.mp3", "https://youtu.be/pzk2t_hgrOU"],
    [{en: "Jihad Alongside the Prophet ﷺ (1)", ur: "نبی کریم ﷺ کے ساتھ جہاد (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2005%20-%20Jihad%20alongwith%20The%20Prophet.mp3", "https://youtu.be/S4-OkkLiijE"],
    [{en: "Jihad Alongside the Prophet ﷺ (2)", ur: "نبی کریم ﷺ کے ساتھ جہاد (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2006%20Jehad%20along%20the%20Prophet%20PBUH.mp3", "https://youtu.be/AEXfHzYB_7M"],
    [{en: "Some Important Events in Madinah (1)", ur: "مدینہ کے چند اہم واقعات (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2007A%20Some%20Important%20Events%20in%20Madinah%201.mp3", "https://youtu.be/Q9exSoU3d5k"],
    [{en: "Some Events in Madinah (2)", ur: "مدینہ کے چند واقعات (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2007B%20Some%20Events%20in%20Madinah%202.mp3", "https://youtu.be/tQuEvajq5bg"],
    [{en: "The Death of the Prophet ﷺ", ur: "نبی کریم ﷺ کی وفات"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2008%20-%20Death%20of%20Prophet%20PBUH.mp3", "https://youtu.be/9QiNtTBjf5E"],
    [{en: "The Start of the Caliphate", ur: "خلافت کا آغاز"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2009%20Start%20of%20Khilafat.mp3", "https://youtu.be/ePZrXjocciY"],
    [{en: "The Army of Usama ibn Zayd (may Allah be pleased with him)", ur: "جیشِ اسامہ بن زید رضی اللہ عنہ"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2010%20The%20Army%20of%20Usama%20bin%20Zayd%20RA.mp3", "https://youtu.be/zA-SaVGQjNE"],
    [{en: "Lessons from the Expedition of Usama ibn Zayd (may Allah be pleased with him)", ur: "سریۂ اسامہ بن زید رضی اللہ عنہ سے حاصل ہونے والے اسباق"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2011%20Lessons%20from%20Expedition%20of%20Usama%20bin%20Zayd%20RA.mp3", "https://youtu.be/3EvTlw3FCf0"],
    [{en: "Some Social Aspects", ur: "چند معاشرتی پہلو"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2012%20-%20Some%20Social%20Aspects.mp3", "https://youtu.be/A5GJYgT-6bs"],
    [{en: "The Caliphate: Some Aspects", ur: "خلافت کے چند پہلو"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2013%20-%20Caliphate%20Some%20Aspects%20__.mp3", "https://youtu.be/mNM66qeb7Yw"],
    [{en: "The Apostasy Wars (1)", ur: "مرتدین کے خلاف جنگیں (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2014%20Apostacy%20Wars%201.mp3", "https://youtu.be/XAQz8YWmW9Q"],
    [{en: "The Apostasy Wars (2)", ur: "مرتدین کے خلاف جنگیں (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2015%20Apostacy%20Wars%202.mp3", "https://youtu.be/DWWLYg-ZLYo"],
    [{en: "The Apostasy Wars (3)", ur: "مرتدین کے خلاف جنگیں (۳)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2016%20Apostacy%20Wars%203.mp3", "https://youtu.be/a5AOFDsNmg0"],
    [{en: "The Battle of Yamamah (1)", ur: "معرکۂ یمامہ (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2017%20Yamamah%201.mp3", "https://youtu.be/U_cFoPl1Cdk"],
    [{en: "The Battle of Yamamah (2)", ur: "معرکۂ یمامہ (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2018%20Yamamah%202.mp3", "https://youtu.be/bXtXXMJlTFs"],
    [{en: "Lessons from the Apostasy Wars", ur: "مرتدین کے خلاف جنگوں سے حاصل ہونے والے اسباق"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2019%20Lessons%20from%20Apostacy%20wars.mp3", "https://youtu.be/f83DTDATGpg"],
    [{en: "The Iraq Campaign (1)", ur: "عراق کی مہم (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2020%20-%20Iraq%201.mp3", "https://youtu.be/e-Q0mMtEFKU"],
    [{en: "The Iraq Campaign (2)", ur: "عراق کی مہم (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2021%20Iraq%202.mp3", "https://youtu.be/pVGFvG6Gom4"],
    [{en: "The Iraq Campaign (3)", ur: "عراق کی مہم (۳)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2022%20Iraq%203.mp3", "https://youtu.be/Y1lcaY9m2Do"],
    [{en: "The Hell of Walaja", ur: "معرکۂ ولجہ"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2023%20The%20Hell%20of%20Walaja.mp3", "https://youtu.be/_Ws_6FHG8Ss"],
    [{en: "Towards Syria", ur: "شام کی طرف"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2024%20Towards%20Syria%201.mp3", "https://youtu.be/E2S5V6AgTO0"],
    [{en: "The Perilous March", ur: "پُرخطر سفر"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2025%20%20The%20Perilous%20March.mp3", "https://youtu.be/cTxQJ5PoXQM"],
    [{en: "Bostra", ur: "بُصریٰ"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2026%20-%20Bostra.mp3", "https://youtu.be/88byHAmdr3o"],
    [{en: "The Battle of Ajnadin (1)", ur: "معرکۂ اجنادین (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2027%20Ajnadin%201.mp3", "https://youtu.be/i6YuAPtjyNY"],
    [{en: "The Battle of Ajnadin (2)", ur: "معرکۂ اجنادین (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2028%20Ajnadin%202.mp3", "https://youtu.be/Qy8NXHu-Nus"],
    [{en: "Damascus (1)", ur: "دمشق (۱)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2029%20Damascus%201.mp3", "https://youtu.be/iSTF3ezgmnU"],
    [{en: "Damascus (2)", ur: "دمشق (۲)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2030%20Damascus%202.mp3", "https://youtu.be/iihZOcYoEZg"],
    [{en: "Damascus (3)", ur: "دمشق (۳)"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2031%20Damascus%203.mp3", "https://youtu.be/gYmT6A3xZpE"],
    [{en: "The Death of Abu Bakr (may Allah be pleased with him)", ur: "حضرت ابو بکر رضی اللہ عنہ کی وفات"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2032%20Death.mp3", "https://youtu.be/1kzCNR6R72E"],
    [{en: "Some Lessons", ur: "چند اسباق"}, "https://archive.org/download/life-of-hazrat-abu-bakr-ra/Abu%20Bakr%20RA%2033%20Some%20Lessons.mp3", "https://youtu.be/Ztj28dfdQ-E"],
  ],
  fatir: [
    [{ en: "Surah Fatir – Lesson 1", ur: "سورۃ فاطر – پہلا درس" },
     "audio/fatir/01.mp3", "https://youtu.be/GU_yzjAZ1JQ"]
  ],
  akhirah: [
    [{ en: "Al-Akhirah Series – Introduction", ur: "آخرت سیریز – تعارف" },
     "audio/akhirah/01.mp3", "https://www.youtube.com/watch?v=MoyfcTQMmU0"]
  ],
  // أضف بقية الأقسام بنفس الطريقة، مثال:
  // nabi: [
  //   [{en:"Lesson 2", ur:"دوسرا درس"}, "audio/nabi/02.mp3", ""],
  // ],
};
