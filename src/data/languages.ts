import { Language } from "../types";

export const FAMOUS_LANGUAGES: Language[] = [
  {
    id: "en",
    name: "English",
    localName: "Ingliz tili",
    flag: "🇬🇧",
    isFree: true,
    priceUZS: 0,
    description: "Global muloqot tili. Bepul va to'liq bosqichlar mavjud.",
    topics: [
      {
        id: "en-1",
        title: "Salomlashish va O'zini tanishtirish (Greetings & Self-introduction)",
        level: "0 (Boshlang'ich)",
        description: "Ingliz tilida ilk to'g'ri muloqot ostonasi. Shaxsiy ma'lumotlar almashish va muloqotni boshlash qoidalari.",
        rules: [
          "Salomlashganda rasmiy (formal) va norasmiy (informal) iboralarni to'g'ri tanlash muhim.",
          "'To be' fe'lining hozirgi zamon shakllari (am, is, are) uchrashganda shaxsni tanishtirishda eng asosiy tayanchdir.",
          "Ismni so'rash: 'What is your name?' – Javob berish: 'My name is...' yoki 'I am...'"
        ],
        examples: [
          { id: "ene1", original: "Hello, my name is John. Nice to meet you!", translation: "Salom, mening ismim Jon. Sizni uchratganimdan xursandman!", pronunciationText: "Hello, my name is John. Nice to meet you!" },
          { id: "ene2", original: "Where are you from? I am from Tashkent.", translation: "Siz qayerdansiz? Men Toshkentdanman.", pronunciationText: "Where are you from? I am from Tashkent." },
          { id: "ene3", original: "How old are you? I am 20 years old.", translation: "Yoshingiz nechida? Men 20 yoshdaman.", pronunciationText: "How old are you? I am 20 years old." }
        ]
      },
      {
        id: "en-2",
        title: "To Be fe'li (Verb 'To Be')",
        level: "A1",
        description: "Egalik va mavjudlikni ifodalovchi poydevor dars.",
        rules: [
          "'To be' o'zbek tilidagi 'man, san, dir...' qo'shimchalariga to'g'ri keladi va buyumni yoki holatni ko'rsatadi.",
          "Shaxslar bilan kelishi: I am / He, She, It is / We, You, They are.",
          "Inkor shakli uchun 'not' ishlatiladi: I am not, He is not (isn't), they are not (aren't)."
        ],
        examples: [
          { id: "en2e1", original: "She is a talented doctor.", translation: "U iqtidorli shifokor.", pronunciationText: "She is a talented doctor" },
          { id: "en2e2", original: "They are not at home right now.", translation: "Ular hozir uyda emaslar.", pronunciationText: "They are not at home right now" },
          { id: "en2e3", original: "Are you hungry? Yes, I am.", translation: "Qorningiz ochdimi? Ha.", pronunciationText: "Are you hungry? Yes, I am" }
        ]
      },
      {
        id: "en-3",
        title: "Hozirgi oddiy zamon (Present Simple)",
        level: "A1",
        description: "Muntazam ravishda bajariladigan ish-harakatlar va umumiy haqiqatlar uchun ishlatiladigan zamon strukturasi.",
        rules: [
          "Har kuni, har hafta sodir bo'ladigan takroriy xatti-harakatlar tasvirlanadi.",
          "Uchinchi shaxs birlikda (he, she, it) fe'llarga '-s' yoki '-es' qo'shimchasi qo'shiladi.",
          "Inkor va so'roq gaplarda 'do' va 'does' yordamchi fe'llari xizmat qiladi."
        ],
        examples: [
          { id: "en3e1", original: "I read books every single day.", translation: "Men har kuni kitob o'qiyman.", pronunciationText: "I read books every single day." },
          { id: "en3e2", original: "He works in a software development company.", translation: "U dasturiy ta'minot ishlab chiqaradigan kompaniyada ishlaydi.", pronunciationText: "He works in a software development company." },
          { id: "en3e3", original: "Does she speak Spanish? No, she doesn't.", translation: "U ispanchada gaplashadimi? Yo'q, gaplashmaydi.", pronunciationText: "Does she speak Spanish? No, she doesn't." }
        ]
      },
      {
        id: "en-4",
        title: "Artikllar: A, An va The (Articles)",
        level: "A2",
        description: "Ismlar va otlarning noaniqlik va aniqlik holatlarini ifodalash tizimi.",
        rules: [
          "'A' va 'An' noaniq artikllari faqat sanaladigan birlik otlar bilan ishlatiladi. 'An' unli tovushdan oldin keladi.",
          "'The' aniq artikli tinglovchiga ham, so'zlovchiga ham ma'lum bo'lgan aniq bir narsani ko'rsatish uchun xizmat qiladi.",
          "Sanalmaydigan va ko'plikdagi otlar noaniq artikllarni olmaydi."
        ],
        examples: [
          { id: "en4e1", original: "I bought an apple. The apple is very sweet.", translation: "Men olma sotib oldim. Olma juda shirin ekan.", pronunciationText: "I bought an apple. The apple is very sweet." },
          { id: "en4e2", original: "Paris is the capital of France.", translation: "Parij - Fransiyaning poytaxti.", pronunciationText: "Paris is the capital of France." }
        ]
      }
    ]
  },
  {
    id: "ru",
    name: "Russian",
    localName: "Rus tili",
    flag: "🇷🇺",
    isFree: false,
    priceUZS: 9000,
    description: "Ko'p tarqalgan amaliy muloqot va MDH davlatlarining muhim aloqa tili.",
    topics: [
      {
        id: "ru-1",
        title: "Salomlashish va Tanishuv (Приветствие и Знакомство)",
        level: "0 (Boshlang'ich)",
        description: "Rus tilida birinchi suhbat qurish mantiqi va oddiy savollar.",
        rules: [
          "Rasmiy salomlashish: 'Здравствуйте' (Zdrastvuyte) – do'stona: 'Привет' (Privet).",
          "Ism so'rash: 'Как вас зовут?' (Rasmiy) yoki 'Как тебя зовут?' (Norasmiy).",
          "Tanishganidan xursandlik: 'Очень приятно' (Ochen priyatno)."
        ],
        examples: [
          { id: "rue1", original: "Здравствуйте! Как вас зовут? Меня зовут Сардор.", translation: "Assalomu alaykum! Ismingiz nima? Mening ismim Sardor.", pronunciationText: "Здравствуйте! Как вас зовут? Меня зовут Сардор." },
          { id: "rue2", original: "Очень приятно познакомиться. Взаимно!", translation: "Tanishganimdan juda xursandman. O'zaro!", pronunciationText: "Очень приятно познакомится. Взаимно!" }
        ]
      }
    ]
  },
  {
    id: "de",
    name: "German",
    localName: "Nemis tili",
    flag: "🇩🇪",
    isFree: false,
    priceUZS: 15000,
    description: "Yevropadagi yetakchi muhandislik, fan va falsafa tili.",
    topics: [
      {
        id: "de-1",
        title: "Salomlashish va Oddiy Iboralar (Begrüßung)",
        level: "0 (Boshlang'ich)",
        description: "Nemis madaniyati va muomala odoblarining poydevori.",
        rules: [
          "Iboralar kungi vaqt bo'yicha farqlanadi: Guten Morgen (Ertalab), Guten Tag (Kunduzi), Guten Abend (Kechqurun).",
          "'Du' (sen, do'stona) va 'Sie' (Siz, rasmiy va katta harf bilan doim yoziladi) olmoshlarini ajratish o'ta muhim."
        ],
        examples: [
          { id: "dee1", original: "Guten Tag! Wie geht es Ihnen? Mir geht es gut, danke.", translation: "Kun xayr! Ahvollaringiz qanday? Yaxshi, rahmat.", pronunciationText: "Guten Tag! Wie geht es Ihnen? Mir geht es gut, danke" },
          { id: "dee2", original: "Ich heiße Sardor und ich lerne Deutsch.", translation: "Mening ismim Sardor va men nemis tilini o'rganyapman.", pronunciationText: "Ich heiße Sardor und ich lerne Deutsch" }
        ]
      }
    ]
  },
  {
    id: "fr",
    name: "French",
    localName: "Fransuz tili",
    flag: "🇫🇷",
    isFree: false,
    priceUZS: 18000,
    description: "Diplomatiya, moda va go'zal san'at tili.",
    topics: [
      {
        id: "fr-1",
        title: "Birinchi Muloqot (Salutations)",
        level: "0 (Boshlang'ich)",
        description: "Nafis talaffuz va o'zaro hurmat madaniyati.",
        rules: [
          "'Bonjour' har qanday kunduzgi uchrashuv uchun universal salom hisoblanadi.",
          "Fransuz tilida so'z oxiridagi undosh harflar ko'pincha o'qilmaydi (Silent letters)."
        ],
        examples: [
          { id: "fre1", original: "Bonjour! Comment ça va? Ça va bien, merci.", translation: "Salom! Ishlar qanday? Yaxshi, rahmat.", pronunciationText: "Bonjour! Comment ça va? Ça va bien, merci." },
          { id: "fre2", original: "Je m'appelle Laylo. Enchanté!", translation: "Mening ismim Laylo. Tanishganimdan xursandman!", pronunciationText: "Je m'appelle Laylo. Enchanté" }
        ]
      }
    ]
  },
  {
    id: "es",
    name: "Spanish",
    localName: "Ispan tili",
    flag: "🇪🇸",
    isFree: false,
    priceUZS: 12000,
    description: "Dunyoning 20 dan ortiq davlatidagi jo'shqin va oson muloqot tili.",
    topics: [
      {
        id: "es-1",
        title: "Tanishuv (Presentaciones y Saludos)",
        level: "0 (Boshlang'ich)",
        description: "Asosiy faol iboralar va oson so'zlashuv elementlari.",
        rules: [
          "'Hola' so'zida 'h' harfi doim talaffuz qilinmasdan tushirib qoldiriladi.",
          "Ispan tilida his-hayajon belgisi (¡) va so'roq belgisi (¿) gap boshida teskari holatda ham qo'yiladi."
        ],
        examples: [
          { id: "ese1", original: "¡Hola! ¿Cómo estás? Estoy muy bien.", translation: "Salom! Qalaysan? Men juda yaxshiman.", pronunciationText: "Hola Cómo estás Estoy muy bien" },
          { id: "ese2", original: "Me llamo Jasur. ¿Y tú?", translation: "Mening ismim Jasur. Seniki-chi?", pronunciationText: "Me llamo Jasur. Y tú" }
        ]
      }
    ]
  },
  {
    id: "kr",
    name: "Korean",
    localName: "Koreys tili",
    flag: "🇰🇷",
    isFree: false,
    priceUZS: 14000,
    description: "Hallyu (K-wave), texnologiya va Janubiy Koreyada ta'lim olish istagidagilar uchun.",
    topics: [
      {
        id: "kr-1",
        title: "Koreys Alifbosi (Hangeul - 한글)",
        level: "0 (Boshlang'ich)",
        description: "Eng mukammal va ilmiy yaratilgan alifboga kirish.",
        rules: [
          "Koreys tili harflari chapdan o'ngga va yuqoridan pastga qarab bo'g'inlarga birlashtirilib yoziladi.",
          "Unli va undoshlar o'zaro uyg'unlikda bo'g'in kvadratini hosil qiladi."
        ],
        examples: [
          { id: "kre1", original: "안녕하세요 (Annyeonghaseyo)", translation: "Assalomu alaykum (Hurmat ma'nosida)", pronunciationText: "Annyeonghaseyo" },
          { id: "kre2", original: "감사합니다 (Gamsahabnida)", translation: "Rahmat (Katta minnatdorchilik)", pronunciationText: "Gamsahabnida" }
        ]
      }
    ]
  },
  {
    id: "tr",
    name: "Turkish",
    localName: "Turk tili",
    flag: "🇹🇷",
    isFree: false,
    priceUZS: 8000,
    description: "Turkiy tillar oilasining eng yirik tili, O'zbek tili bilan juda o'xshash.",
    topics: [
      {
        id: "tr-1",
        title: "Turkcha muloqot boshlanishi (Tanışma)",
        level: "0 (Boshlang'ich)",
        description: "Qardosh til muloqoti asoslari.",
        rules: [
          "Turk tili urg'ulari aksariyat hollarda oxirgi bo'g'inga tushadi.",
          "O'zbek tili bilan so'zlar nihoyatda o'xshash, lekin talaffuz va egalik qo'shimchalari biroz yumshoqroq."
        ],
        examples: [
          { id: "tre1", original: "Merhaba! Benim adım Alisher. Senin adın ne?", translation: "Salom! Mening ismim Alisher. Sening isming nima?", pronunciationText: "Merhaba! Benim adım Alisher. Senin adın ne?" },
          { id: "tre2", original: "Tanıştığımıza memnun oldum. Ben de!", translation: "Tanishganimizdan juda mamnunman. Men ham!", pronunciationText: "Tanıştığımıza memnun oldum. Ben de" }
        ]
      }
    ]
  },
  {
    id: "cn",
    name: "Chinese",
    localName: "Xitoy tili",
    flag: "🇨🇳",
    isFree: false,
    priceUZS: 22000,
    description: "Xitoy iqtisodiyoti va xalqaro savdodagi eng qudratli tondagi iyerogliflar tili.",
    topics: [
      {
        id: "cn-1",
        title: "Pinyin va To'rt Ton asoslari",
        level: "0 (Boshlang'ich)",
        description: "Xitoy tilining eng muhim jihati: To'g'ri ton tanlash qoidalari.",
        rules: [
          "Xitoy tilida bitta bo'g'in to'rtta har xil ohang (ton) bilan butunlay boshqa ma'nolarni anglatadi.",
          "Pinyin - Xitoy iyerogliflarining lotin harflarida yozilishi."
        ],
        examples: [
          { id: "cne1", original: "你好 (Nǐ hǎo)!", translation: "Senga salom! (Sizga salom)", pronunciationText: "Ni hao" },
          { id: "cne2", original: "谢谢 (Xièxie)!", translation: "Rahmat!", pronunciationText: "Xiexie" }
        ]
      }
    ]
  },
  {
    id: "ar",
    name: "Arabic",
    localName: "Arab tili",
    flag: "🇦🇪",
    isFree: false,
    priceUZS: 15000,
    description: "Tarixiy manbalar va Yaqin Sharqdagi ulkan sivilizatsiyalar kaliti.",
    topics: [
      {
        id: "ar-1",
        title: "Harflar va Maxrajlar",
        level: "0 (Boshlang'ich)",
        description: "O'ngdan chapga arab yozuvi qonuniyatlari.",
        rules: [
          "Arab tili harflari bo'g'inlar shakliga qarab so'z boshida, o'rtasida va oxirida o'zgaradi.",
          "Harakatlar (fatha, kasra, damma) unlilar vazifasini bajaradi."
        ],
        examples: [
          { id: "are1", original: "مرحباً! كيف حالك؟ (Marhaban! Kayfa haluka?)", translation: "Salom! Ahvoling qanday?", pronunciationText: "Marhaban kayfa haluk" },
          { id: "are2", original: "أنا بخير، شكراً لك. (Ana bikhayr, shukran laka.)", translation: "Men yaxshiman, senga rahmat.", pronunciationText: "Ana bikhayr shukran lak" }
        ]
      }
    ]
  },
  {
    id: "jp",
    name: "Japanese",
    localName: "Yapon tili",
    flag: "🇯🇵",
    isFree: false,
    priceUZS: 20000,
    description: "Kunchiqar yurt madaniyati, texnologiya, anime va asrlar osha an'analar tili.",
    topics: [
      {
        id: "jp-1",
        title: "Hiragana va Katakana",
        level: "0 (Boshlang'ich)",
        description: "Yapon bo'g'inli alifbolari asoslari.",
        rules: [
          "Hiragana sof yapon so'zlarini, Katakana esa chetdan kirib kelgan so'zlarni yozish uchun qo'llaniladi.",
          "Yapon tili so'z tartibida fe'l gap oxirida keladi."
        ],
        examples: [
          { id: "jpe1", original: "こんにちは (Konnichiwa)", translation: "Kun xayr / Salom", pronunciationText: "Konnichiwa" },
          { id: "jpe2", original: "はじめまして (Hajimemashite)", translation: "Tanishganimizdan mamnunman", pronunciationText: "Hajimemashite" }
        ]
      }
    ]
  },
  {
    id: "it",
    name: "Italian",
    localName: "Italyan tili",
    flag: "🇮🇹",
    isFree: false,
    priceUZS: 11000,
    description: "Musiqa, opera va jahon oshxonasi uchun musiqiy til.",
    topics: [
      {
        id: "it-1",
        title: "Musiqiy Ohanglar (L'Italiano)",
        level: "0 (Boshlang'ich)",
        description: "Fonetik o'qilish qoidalari.",
        rules: [
          "'C' harfi 'i' yoki 'e' dan oldin garchi [ch] deb talaffuz qilinsa ham, 'a', 'o', 'u' dan oldin [k] tovushini beradi."
        ],
        examples: [
          { id: "ite1", original: "Ciao! Come stai? Tutto bene, grazie.", translation: "Salom! Qalaysan? Hamma narsa yaxshi, rahmat.", pronunciationText: "Ciao Come stai Tutto bene grazie" }
        ]
      }
    ]
  },
  // We'll fill up to 32 languages dynamically or statically, ensuring they have appropriate structured items.
  // To reach 32, we add simplified records that can scale beautifully in UI.
  { id: "hi", name: "Hindi", localName: "Hind tili", flag: "🇮🇳", isFree: false, priceUZS: 7000, description: "Kino va qadimiy falsafalar tili.", topics: [] },
  { id: "pt", name: "Portuguese", localName: "Portugal tili", flag: "🇵🇹", isFree: false, priceUZS: 10000, description: "Braziliya va Portugaliyaning yorqin tili.", topics: [] },
  { id: "fa", name: "Persian", localName: "Fors tili", flag: "🇮🇷", isFree: false, priceUZS: 9000, description: "Mashhur she'riyat va adabiyot tili.", topics: [] },
  { id: "ur", name: "Urdu", localName: "Urdu tili", flag: "🇵🇰", isFree: false, priceUZS: 8000, description: "Pokistonning nafis she'riy shevasi.", topics: [] },
  { id: "nl", name: "Dutch", localName: "Golland tili", flag: "🇳🇱", isFree: false, priceUZS: 13000, description: "Gollandiya va polderlar mamlakati tili.", topics: [] },
  { id: "pl", name: "Polish", localName: "Polyak tili", flag: "🇵🇱", isFree: false, priceUZS: 11000, description: "Polsha va slavyan aloqalari tili.", topics: [] },
  { id: "se", name: "Swedish", localName: "Shved tili", flag: "🇸🇪", isFree: false, priceUZS: 14000, description: "Skandinaviya iqtisodiyoti va innovatsiyalari tili.", topics: [] },
  { id: "no", name: "Norwegian", localName: "Norveg tili", flag: "🇳🇴", isFree: false, priceUZS: 16000, description: "Fyordlar va baxtli hayot tili.", topics: [] },
  { id: "dk", name: "Danish", localName: "Daniya tili", flag: "🇩🇰", isFree: false, priceUZS: 15000, description: "Hygge dunyosidagi nafis g'alati talaffuzli til.", topics: [] },
  { id: "fi", name: "Finnish", localName: "Fin tili", flag: "🇫🇮", isFree: false, priceUZS: 17000, description: "Tungi asoratlar va Finlandiyadagi mashhur ta'lim tili.", topics: [] },
  { id: "he", name: "Hebrew", localName: "Ibroniy tili", flag: "🇮🇱", isFree: false, priceUZS: 18000, description: "Samoviy va antik ibroniy madaniyati tili.", topics: [] },
  { id: "vi", name: "Vietnamese", localName: "Vyetnam tili", flag: "🇻🇳", isFree: false, priceUZS: 9000, description: "Tropik tabiati bor tez o'suvchi davlat tili.", topics: [] },
  { id: "th", name: "Thai", localName: "Tay tili", flag: "🇹🇭", isFree: false, priceUZS: 10000, description: "Oshxona va mehmondo'stlik mamlakatining nafis tili.", topics: [] },
  { id: "id", name: "Indonesian", localName: "Indonez tili", flag: "🇮🇩", isFree: false, priceUZS: 8000, description: "Nihoyatda oson va tonisiz janubiy osiyo tili.", topics: [] },
  { id: "ua", name: "Ukrainian", localName: "Ukrain tili", flag: "🇺🇦", isFree: false, priceUZS: 7000, description: "Ukrainaning jarangdor va nozik ohangdor tili.", topics: [] },
  { id: "gr", name: "Greek", localName: "Yunan tili", flag: "🇬🇷", isFree: false, priceUZS: 12000, description: "Ilmiy terminlarga asos bo'lgan qadimiy falsafaviy sivilizatsiya tili.", topics: [] },
  { id: "cz", name: "Czech", localName: "Chex tili", flag: "🇨🇿", isFree: false, priceUZS: 12000, description: "Markaziy Yevropadagi ko'hna va hayratlanarli til.", topics: [] },
  { id: "hu", name: "Hungarian", localName: "Vengr tili", flag: "🇭🇺", isFree: false, priceUZS: 13000, description: "Dunyoning eng murakkab bo'g'inlarga ega tillaridan biri.", topics: [] },
  { id: "ro", name: "Romanian", localName: "Rumin tili", flag: "🇷🇴", isFree: false, priceUZS: 10000, description: "Lotin elementlari boy bo'lgan Karpat tog'lari tili.", topics: [] },
  { id: "kz", name: "Kazakh", localName: "Qozoq tili", flag: "🇰🇿", isFree: false, priceUZS: 2500, description: "Birlashgan turkiy qardosh tili.", topics: [] },
  { id: "kg", name: "Kyrgyz", localName: "Qirg'iz tili", flag: "🇰🇬", isFree: false, priceUZS: 2500, description: "Qirg'iz tog' yaylovlarining boy qardosh tili.", topics: [] },
  { id: "uz-oz", name: "Uzbek (Cyrillic)", localName: "Ўзбек тили", flag: "🇺🇿", isFree: false, priceUZS: 1200, description: "O'zbek tilining kirill alifbosi grammatika va imlosi.", topics: [] }
];
