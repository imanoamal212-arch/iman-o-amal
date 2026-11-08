/* =====================================================================
   data.js — كل محتوى الموقع هنا. لإضافة درس: أضف سطرًا داخل LESSONS.
   الصيغة:  ["العنوان", "رابط الصوت", "رابط يوتيوب (اختياري)"]
   (اختياري) في أي قسم داخل CATS أضف  pl:"رابط قائمة التشغيل"  فيظهر زر «السلسلة كاملة على يوتيوب»
   العنوان إما نص واحد، أو {en:"English", ur:"اردو"}
   ===================================================================== */

const SITE = {
  name: { en: "Iman & Amal Academy", ur: "ایمان و عمل اکیڈمی" },
  tagline: {
    en: "Knowledge that builds Iman and Improve The Amal",
    ur: "ایسا علم جو ایمان کو مضبوط کرے اور عمل سنوارے"
  },
  // اتركها فارغة "" لإخفاء الزر
  contact: { youtube: "", whatsapp: "", email: "" }
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
  { id: "nabi",    g: "seerah", icon: "🌙", t: { en: "Seerah of the Prophet Muhammad ﷺ", ur: "سیرت النبی ﷺ" } },
  { id: "anbiya",  g: "seerah", icon: "✨", t: { en: "Stories of the Prophets (peace be upon them)", ur: "سیرتِ انبیاء علیہم السلام" } },
  { id: "abubakr", g: "seerah", icon: "🕌", t: { en: "Abu Bakr as-Siddiq (may Allah be pleased with him)", ur: "حضرت ابو بکر صدیق رضی اللہ عنہ" } },
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
