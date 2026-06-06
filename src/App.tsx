/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  User, 
  Wallet, 
  RotateCw, 
  Volume2, 
  Plus, 
  Search, 
  Lock, 
  Unlock, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sun, 
  Moon, 
  Globe, 
  MessageSquare, 
  Send, 
  Trash2, 
  BookOpenCheck,
  Award,
  BookMarked
} from 'lucide-react';
import { FAMOUS_LANGUAGES } from './data/languages';
import { DEFAULT_FLASHCARDS } from './data/flashcards';
import { Language, Topic, Flashcard, ChatMessage, UserProfile } from './types';

// Multi-language UI dictionaries
const TRANSLATIONS = {
  uz: {
    app_subtitle: "Zamonaviy Til O'rganish Platformasi",
    nav_courses: "Kurslar",
    nav_flashcards: "Flesh Kartalar",
    nav_ai: "AI Yordamchi",
    nav_profile: "Profil",
    search_placeholder: "Kerakli tilni qidiring...",
    all_levels: "Barcha darajalar",
    level: "Daraja",
    free: "Bepul",
    price: "Narxi",
    buy_now: "Sotib olish",
    unlocked: "Ochiq",
    balance: "Balansingiz",
    top_up: "To'ldirish",
    topics: "Mavzular",
    no_topics: "Ushbu tilda hozircha darsliklar tayyorlanmoqda. Tez kunda qo'shiladi!",
    rules: "Qoidalar va Ko'rsatmalar",
    examples: "Misollar va Talaffuz",
    listen: "Eshitish",
    discuss_ai: "AI bilan muhokama",
    fc_intro_title: "Kartalar yordamida so'zlarni oson va tez yod oling",
    fc_intro_btn: "Davom etish",
    fc_tab_random: "Tasodifiy So'zlar",
    fc_tab_my: "Mening So'zlarim",
    fc_add_title: "Yangi So'z Qo'shish",
    fc_word_en: "Inglizcha so'z",
    fc_word_uz: "O'zbekcha tarjimasi",
    fc_example: "Misol (Inglizcha gap)",
    fc_example_tr: "Misol tarjimasi",
    fc_emoji: "Muloqot Belgisi (Emoji)",
    fc_add_btn: "Kartani Qo'shish",
    fc_flip_hint: "Karta orqasini ko'rish uchun ustiga bosing",
    ai_status_default: "AI sizga tushunarsiz mavzularni tushuntiradi. Savolingizni yozing.",
    ai_context_active: "Context faol",
    ai_placeholder: "Matnni yoki mavzu bo'yicha savolingizni shu yerga kiritishingiz mumkin...",
    ai_send: "Yuborish",
    ai_suggest_title: "Mashhur mavzular bo'yicha takliflar:",
    profile_title: "Shaxsiy Profil va Sozlamalar",
    theme: "Dastur ko'rinishi (Mavzu)",
    theme_light: "Kunduzgi rejim (Yorug')",
    theme_dark: "Tungi rejim (Qorong'u)",
    app_lang: "Dastur tili",
    first_name: "Ismingiz",
    last_name: "Familyangiz",
    email: "Elektron pochta",
    sub_title: "Faol Obuna va Pullik Kurslar",
    locked_langs: "Sotib olingan tillar",
    status_premium: "To'liq Premium Ruxsat",
    unlimited_desc: "Barcha 30+ tillarni bitta tugma bilan oching!",
    unlock_all_btn: "Barchasini ochish (Premium)",
    topup_modal_title: "Hisobni Fiktiv To'ldirish",
    enter_amount: "Miqdorni kiriting (UZS):",
    pay_simulation: "Simulyatsiya to'lovi",
    pay_success: "Hisobingiz muvaffaqiyatli to'ldirildi!",
    pay_error: "Minimal miqdor 1,000 UZS bo'lishi lozim.",
    buy_confirm_title: "Kursni sotib olishni tasdiqlaysizmi?",
    insufficient_balance: "Mablag' yetarli emas! Iltimos, profilingizda balansingizni to'ldiring.",
    purchase_success: "Siz ushbu tilni muvaffaqiyatli xarid qildingiz!",
    cancel: "Bekor qilish",
    confirm: "Tasdiqlash",
    pronounce_error: "Tizimda talaffuz xizmati ishlamadi.",
    user_word_success: "Yangi so'z muvaffaqiyatli qo'shildi!"
  },
  en: {
    app_subtitle: "Modern Language Learning Platform",
    nav_courses: "Courses",
    nav_flashcards: "Flashcards",
    nav_ai: "AI Assistant",
    nav_profile: "Profile",
    search_placeholder: "Search for a language...",
    all_levels: "All Levels",
    level: "Level",
    free: "Free",
    price: "Price",
    buy_now: "Buy Course",
    unlocked: "Unlocked",
    balance: "Balance",
    top_up: "Top Up",
    topics: "Topics",
    no_topics: "Lessons for this language are currently in active preparation!",
    rules: "Grammar Rules & Guidance",
    examples: "Examples & Pronunciation",
    listen: "Listen",
    discuss_ai: "Discuss with AI",
    fc_intro_title: "Learn and memorize words easily and quickly using cards",
    fc_intro_btn: "Continue",
    fc_tab_random: "Random Words",
    fc_tab_my: "My Vocabulary",
    fc_add_title: "Add New Custom Card",
    fc_word_en: "English word",
    fc_word_uz: "Uzbek translation",
    fc_example: "Example sentence (English)",
    fc_example_tr: "Example translation (Uzbek)",
    fc_emoji: "Icon / Representing emoji",
    fc_add_btn: "Add Custom Memory Card",
    fc_flip_hint: "Click on the card to flip and view the translation",
    ai_status_default: "The AI helper explains topics you don't understand closely. Ask any question.",
    ai_context_active: "Context active",
    ai_placeholder: "Write your message or question about the language here...",
    ai_send: "Send",
    ai_suggest_title: "Recommended topic suggestions:",
    profile_title: "Personal Profile & System Settings",
    theme: "Application Theme",
    theme_light: "Light Mode",
    theme_dark: "Dark Mode",
    app_lang: "App Language",
    first_name: "First Name",
    last_name: "Last Name",
    email: "E-mail Address",
    sub_title: "Active Subscriptions & Courses",
    locked_langs: "Unlocked Languages",
    status_premium: "Full Premium Unlimited Access",
    unlimited_desc: "Unlock all 30+ global languages with a single click!",
    unlock_all_btn: "Unlock All Languages (Premium)",
    topup_modal_title: "Simulate Secure Deposit",
    enter_amount: "Enter amount to top-up (UZS):",
    pay_simulation: "Pay Fictitious Soums",
    pay_success: "Your balance was filled up successfully!",
    pay_error: "Minimum amount allowed is 1,000 UZS.",
    buy_confirm_title: "Confirm acquiring this course?",
    insufficient_balance: "Insufficient funds! Please deposit in the Profile section.",
    purchase_success: "You have successfully unlocked this language course!",
    cancel: "Cancel",
    confirm: "Confirm",
    pronounce_error: "Cannot play pronunciation speech Synthesis.",
    user_word_success: "Custom card successfully added!"
  },
  ru: {
    app_subtitle: "Современная платформа изучения языков",
    nav_courses: "Курсы",
    nav_flashcards: "Флэшкарты",
    nav_ai: "AI Помощник",
    nav_profile: "Профиль",
    search_placeholder: "Поиск языков курса...",
    all_levels: "Все уровни",
    level: "Уровень",
    free: "Бесплатно",
    price: "Цена",
    buy_now: "Купить курс",
    unlocked: "Доступно",
    balance: "Ваш Баланс",
    top_up: "Пополнить",
    topics: "Разделы уроков",
    no_topics: "Уроки для этого языка сейчас активно разрабатываются автором!",
    rules: "Правила грамматики и руководства",
    examples: "Примеры с озвучкой",
    listen: "Слушать",
    discuss_ai: "Обсудить с AI",
    fc_intro_title: "Легко и быстро запоминайте новые слова с помощью карточек",
    fc_intro_btn: "Продолжить",
    fc_tab_random: "Случайные слова",
    fc_tab_my: "Мой словарь",
    fc_add_title: "Добавить новое слово",
    fc_word_en: "Слово на английском",
    fc_word_uz: "Перевод на узбекский",
    fc_example: "Пример предложения",
    fc_example_tr: "Перевод примера предложения",
    fc_emoji: "Иконка (Эмодзи)",
    fc_add_btn: "Добавить карточку",
    fc_flip_hint: "Нажмите на карту, чтобы перевернуть её",
    ai_status_default: "Интеллектуальный помощник ответит на любые непонятные вопросы по темам.",
    ai_context_active: "Контекст активен",
    ai_placeholder: "Введите ваше сообщение или вопрос учителю...",
    ai_send: "Отправить",
    ai_suggest_title: "Рекомендуемые темы для беседы:",
    profile_title: "Персональный профиль и настройки системы",
    theme: "Оформление приложения",
    theme_light: "Светлая тема",
    theme_dark: "Темная тема",
    app_lang: "Язык интерфейса",
    first_name: "Имя",
    last_name: "Фамилия",
    email: "Электронная почта",
    sub_title: "Активные подписки и допуски",
    locked_langs: "Приобретенные языки",
    status_premium: "Полный премиум-доступ",
    unlimited_desc: "Разблокируйте все 30+ языков мира одним действием!",
    unlock_all_btn: "Открыть всё (Премиум)",
    topup_modal_title: "Симуляция пополнения баланса",
    enter_amount: "Введите сумму (UZS):",
    pay_simulation: "Имитировать оплату",
    pay_success: "Баланс успешно пополнен виртуальными сумами!",
    pay_error: "Минимальная сумма пополнения — 1 000 UZS.",
    buy_confirm_title: "Подтвердить покупку курса?",
    insufficient_balance: "Недостаточно средств. Пополните ваш баланс в разделе Профиль.",
    purchase_success: "Вы успешно разблокировали курс изучения этого языка!",
    cancel: "Отмена",
    confirm: "Подтвердить",
    pronounce_error: "Не удалось воспроизвести произношение речи.",
    user_word_success: "Карточка слова успешно добавлена!"
  }
};

export default function App() {
  // Navigation: "courses" | "flashcards" | "ai" | "profile"
  const [activeTab, setActiveTab] = useState<"courses" | "flashcards" | "ai" | "profile">("courses");
  
  // Theme state based on LocalStorage or dark mode preference
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("cefr_theme");
    return (saved === "light" || saved === "dark") ? saved : "dark";
  });

  // App Language
  const [appLang, setAppLang] = useState<"uz" | "en" | "ru">(() => {
    const saved = localStorage.getItem("cefr_lang");
    return (saved === "uz" || saved === "en" || saved === "ru") ? saved : "uz";
  });

  // User profile structure cached locally
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem("cefr_profile");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore parse errors
      }
    }
    return {
      firstName: "Meyasar",
      lastName: "Razzakov",
      email: "razzakovme0@gmail.com",
      appLanguage: "uz",
      theme: "dark",
      unlockedLanguages: ["en"], // English is free by default
      premiumAllUnlocked: false
    };
  });

  // Balance
  const [userBalance, setUserBalance] = useState<number>(() => {
    const saved = localStorage.getItem("cefr_balance");
    return saved ? parseInt(saved, 10) : 25000; // Starter virtual balance 25k UZS
  });

  // User Custom Flashcards
  const [customFlashcards, setCustomFlashcards] = useState<Flashcard[]>(() => {
    const saved = localStorage.getItem("cefr_custom_fcs");
    return saved ? JSON.parse(saved) : [];
  });

  // Course view state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  // Flashcards state
  const [showFCDashboard, setShowFCDashboard] = useState(() => {
    return localStorage.getItem("cefr_fc_dismiss_intro") === "true";
  });
  const [fcTab, setFcTab] = useState<"random" | "my">("random");
  const [randomFcIndex, setRandomFcIndex] = useState(0);
  const [myFcIndex, setMyFcIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Custom Word Form state
  const [newEnWord, setNewEnWord] = useState("");
  const [newUzWord, setNewUzWord] = useState("");
  const [newExample, setNewExample] = useState("");
  const [newExampleTr, setNewExampleTr] = useState("");
  const [newEmoji, setNewEmoji] = useState("🏷️");

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");

  // Virtual Payment dialog
  const [depositAmount, setDepositAmount] = useState<number>(50000);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [langToBuy, setLangToBuy] = useState<Language | null>(null);

  // AI Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem("cefr_chat_history");
    return saved ? JSON.parse(saved) : [
      {
        id: "welcome-ai",
        role: "model",
        text: "Salom! Men sizning shaxsiy AI til ustozingizman. Bugun qaysi tilni o'rganamiz yoki qanday grammatik mavzuni tahlil qilamiz?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });
  const [chatInput, setChatInput] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiTopicContext, setAiTopicContext] = useState<Topic | null>(null);

  const t = TRANSLATIONS[appLang];

  // Sync states to local storage
  useEffect(() => {
    localStorage.setItem("cefr_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("cefr_lang", appLang);
  }, [appLang]);

  useEffect(() => {
    localStorage.setItem("cefr_profile", JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem("cefr_balance", userBalance.toString());
  }, [userBalance]);

  useEffect(() => {
    localStorage.setItem("cefr_custom_fcs", JSON.stringify(customFlashcards));
  }, [customFlashcards]);

  useEffect(() => {
    localStorage.setItem("cefr_chat_history", JSON.stringify(chatMessages));
  }, [chatMessages]);

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Speaks out English text cleanly
  const playWordAudio = (text: string) => {
    if (!('speechSynthesis' in window)) {
      showToast(t.pronounce_error, "error");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85; // slightly slower for educational focus
    window.speechSynthesis.speak(utterance);
  };

  // Unlocks / Purchases a specific premium language
  const handlePurchaseLanguage = (lang: Language) => {
    if (userProfile.unlockedLanguages.includes(lang.id) || userProfile.premiumAllUnlocked) {
      // already unlocked
      setSelectedLanguage(lang);
      return;
    }

    setLangToBuy(lang);
  };

  const confirmPurchase = () => {
    if (!langToBuy) return;

    if (userBalance < langToBuy.priceUZS) {
      showToast(t.insufficient_balance, "error");
      setActiveTab("profile");
      setLangToBuy(null);
      return;
    }

    // Deduct Soums and unlock
    setUserBalance(prev => prev - langToBuy.priceUZS);
    setUserProfile(prev => {
      const updated = {
        ...prev,
        unlockedLanguages: [...prev.unlockedLanguages, langToBuy.id]
      };
      return updated;
    });

    showToast(`${langToBuy.localName} ${t.purchase_success}`, "success");
    setSelectedLanguage(langToBuy);
    setLangToBuy(null);
  };

  const unlockAllLanguagesSpecial = () => {
    const cost = 80000;
    if (userBalance < cost) {
      showToast(t.insufficient_balance, "error");
      return;
    }

    setUserBalance(prev => prev - cost);
    setUserProfile(prev => ({
      ...prev,
      premiumAllUnlocked: true,
      unlockedLanguages: FAMOUS_LANGUAGES.map(l => l.id)
    }));
    showToast("Premium tabriklaymiz! Barcha 30+ xalqaro tillar muvaffaqiyatli ochildi!", "success");
  };

  // Add customized flashcard helper
  const handleAddCustomCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEnWord.trim() || !newUzWord.trim()) {
      showToast("Iltimos, so'z va tarjimani kiriting!", "error");
      return;
    }

    const newCard: Flashcard = {
      id: "user-fc-" + Date.now(),
      english: newEnWord.trim(),
      uzbek: newUzWord.trim(),
      contextIcon: newEmoji || "🏷️",
      example: newExample.trim(),
      exampleTr: newExampleTr.trim(),
      isUserAdded: true
    };

    setCustomFlashcards(prev => [newCard, ...prev]);
    setNewEnWord("");
    setNewUzWord("");
    setNewExample("");
    setNewExampleTr("");
    setNewEmoji("🏷️");
    showToast(t.user_word_success, "success");
    setMyFcIndex(0);
  };

  // Custom balance top up simulation
  const handleTopUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (depositAmount < 1000) {
      showToast(t.pay_error, "error");
      return;
    }
    setUserBalance(prev => prev + Number(depositAmount));
    showToast(`${depositAmount.toLocaleString()} UZS ${t.pay_success}`, "success");
    setIsDepositOpen(false);
  };

  // Discuss topic directly on AI help section with preset guidance
  const handleDiscussWithAi = (topic: Topic) => {
    setAiTopicContext(topic);
    setActiveTab("ai");
    
    // Add prompt preview suggestion as default query
    const helperPrompt = `${selectedLanguage?.name || ""} tili bo'yicha "${topic.title}" mavzusini batafsilroq tushuntiring va qo'shimcha misollar bering.`;
    setChatInput(helperPrompt);
  };

  // AI chat transmission mechanism referencing server client
  const handleSendChatMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || isAiLoading) return;

    const userText = chatInput;
    setChatInput("");
    setIsAiLoading(true);

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      role: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const currentHistory = [...chatMessages, userMsg];
    setChatMessages(currentHistory);

    try {
      const resp = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: currentHistory.map(m => ({ role: m.role, text: m.text })),
          languageContext: selectedLanguage?.name || undefined,
          topicContext: aiTopicContext ? `${aiTopicContext.level}: ${aiTopicContext.title}` : undefined
        })
      });

      if (!resp.ok) {
        throw new Error("Tizimda javob olishda server xatosi mavjud.");
      }

      const data = await resp.json();
      
      const responseMsg: ChatMessage = {
        id: "ai-" + Date.now(),
        role: "model",
        text: data.text || "Kechirasiz, javob olishda xatolik yuz berdi.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, responseMsg]);
    } catch (err: any) {
      console.error(err);
      showToast("Ulanish xatosi, AI xizmatidan javob olinmadi.", "error");
      
      const errorMsg: ChatMessage = {
        id: "ai-err-" + Date.now(),
        role: "model",
        text: "Kechirasiz, tarmoqda xatolik yuz berdi. Iltimos, server ishga tushganini va ulanish borligini tekshiring.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsAiLoading(false);
    }
  };

  // Filter languages with simple search support
  const filteredLanguages = FAMOUS_LANGUAGES.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.localName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="cefr-container" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans flex flex-col pb-20 md:pb-0">
      
      {/* Dynamic Toast Element */}
      {toastMessage && (
        <div id="cefr-toast" className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-all transform duration-300 animate-bounce max-w-sm ${
          toastType === 'success' ? 'bg-emerald-500 text-white' : 
          toastType === 'error' ? 'bg-rose-500 text-white' : 'bg-blue-500 text-white'
        }`}>
          <span>{toastType === 'success' ? '✨' : toastType === 'error' ? '⚠️' : 'ℹ️'}</span>
          <p className="text-sm font-semibold">{toastMessage}</p>
        </div>
      )}

      {/* Modern High-End Top Header */}
      <header id="cefr-header" className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Logo Brand with elegant visual representation */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setSelectedLanguage(null); setSelectedTopic(null); }}>
            <div id="cefr-logo" className="h-10 w-10 flex items-center justify-center bg-gradient-to-tr from-emerald-500 to-indigo-600 rounded-xl text-white font-extrabold text-xl shadow-md cursor-pointer tracking-wider">
              CF
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center space-x-1.5">
                <span>CEFRTation</span>
                <span className="text-[9px] bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-widest border border-emerald-500/20">
                  v1.2
                </span>
              </h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-normal hidden sm:block">
                {t.app_subtitle}
              </p>
            </div>
          </div>

          {/* Quick Virtual Wallet Display */}
          <div className="flex items-center space-x-6">
            <div id="wallet-balance-indicator" className="bg-slate-100 dark:bg-slate-800/80 rounded-full px-3 py-1.5 flex items-center space-x-2 border border-slate-200 dark:border-slate-700/60 transition-colors">
              <span className="p-1 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                <Wallet className="h-3.5 w-3.5" />
              </span>
              <div className="text-right">
                <span className="text-[9px] text-slate-500 block leading-3 uppercase tracking-wider">{t.balance}</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{userBalance.toLocaleString()} UZS</span>
              </div>
              <button 
                id="btn-top-up-quick"
                onClick={() => setIsDepositOpen(true)} 
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full transition-all ml-1"
                title={t.top_up}
              >
                +
              </button>
            </div>

            {/* Desktop Navigation Row */}
            <nav className="hidden md:flex space-x-1 bg-slate-100/80 dark:bg-slate-800/50 p-1 rounded-xl">
              <button 
                id="tab-courses-desktop"
                onClick={() => { setActiveTab("courses"); setSelectedTopic(null); }}
                className={`flex items-center space-x-2 px-4-py-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                  activeTab === "courses" 
                  ? "bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-800/40"
                }`}
              >
                <BookOpen className="h-4 w-4 text-emerald-500" />
                <span>{t.nav_courses}</span>
              </button>

              <button 
                id="tab-flashcards-desktop"
                onClick={() => { setActiveTab("flashcards"); }}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "flashcards"
                  ? "bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-800/40"
                }`}
              >
                <BookMarked className="h-4 w-4 text-purple-500" />
                <span>{t.nav_flashcards}</span>
              </button>

              <button 
                id="tab-ai-desktop"
                onClick={() => { setActiveTab("ai"); }}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "ai"
                  ? "bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-800/40"
                }`}
              >
                <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
                <span>{t.nav_ai}</span>
              </button>

              <button 
                id="tab-profile-desktop"
                onClick={() => { setActiveTab("profile"); }}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "profile"
                  ? "bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-800/40"
                }`}
              >
                <User className="h-4 w-4 text-sky-500" />
                <span>{t.nav_profile}</span>
              </button>
            </nav>

            {/* Quick Dark Mode Icon */}
            <button
              id="quick-theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all border border-slate-200 dark:border-slate-700"
              title={theme === "dark" ? t.theme_light : t.theme_dark}
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-indigo-600" />}
            </button>
          </div>

        </div>
      </header>

      {/* Primary Application Content Stage */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        
        {/* SECTION 1: COURSES SECTION */}
        {activeTab === "courses" && (
          <div id="section-courses" className="space-y-6">
            
            {!selectedLanguage ? (
              // Language List Grid view
              <div className="space-y-6">
                
                {/* Intro Hero Badge */}
                <div className="bg-gradient-to-r from-emerald-500/10 via-indigo-500/5 to-transparent p-6 rounded-2xl border border-emerald-500/15">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <span>📚 Dunyo Tillari Akedemiyasi</span>
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Dunyoning eng mashhur 30 dan ortiq davlat tillari endi yangicha va qulay shaklda birlashtirildi. Ingliz tili asosi mutlaqo bepul!
                      </p>
                    </div>

                    {!userProfile.premiumAllUnlocked && (
                      <button
                        id="btn-buy-all-premium"
                        onClick={unlockAllLanguagesSpecial}
                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold px-5 py-3 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all text-xs"
                      >
                        💎 {t.unlock_all_btn} (80,000 UZS)
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter and Search Bar Row */}
                <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 h-4.5 w-4.5" />
                    <input 
                      id="input-language-search"
                      type="text"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all text-slate-900 dark:text-white"
                      placeholder={t.search_placeholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Jami topildi: <span className="font-bold text-emerald-500">{filteredLanguages.length} ta til</span>
                  </div>
                </div>

                {/* Grid Container for 30+ Languages */}
                <div id="languages-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredLanguages.map((lang) => {
                    const isUnlocked = userProfile.unlockedLanguages.includes(lang.id) || lang.isFree || userProfile.premiumAllUnlocked;
                    
                    return (
                      <div 
                        key={lang.id}
                        id={`lang-card-${lang.id}`}
                        onClick={() => handlePurchaseLanguage(lang)}
                        className={`group cursor-pointer rounded-2xl border bg-white dark:bg-slate-900 p-4 transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 flex flex-col justify-between min-h-[160px] ${
                          isUnlocked 
                          ? "border-emerald-500/30 dark:border-emerald-500/20 shadow-sm" 
                          : "border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50"
                        }`}
                      >
                        <div>
                          {/* Flag emoji and Name details */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-4xl filter drop-shadow animate-pulse">{lang.flag}</span>
                            {isUnlocked ? (
                              <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center space-x-1">
                                <Check className="h-3 w-3" />
                                <span>{t.unlocked}</span>
                              </span>
                            ) : (
                              <span className="bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 flex items-center space-x-1">
                                <Lock className="h-2.5 w-2.5" />
                                <span>{lang.priceUZS.toLocaleString()} UZS</span>
                              </span>
                            )}
                          </div>

                          <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-500 transition-colors">
                            {lang.localName}
                          </h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            {lang.name}
                          </p>
                        </div>

                        <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                          <span className="truncate max-w-[110px]">{lang.description || "Dunyo tili"}</span>
                          {/* Chevron icon display */}
                          <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ) : (
              // Selected Single Language detailed topics screen
              <div className="space-y-6">
                
                {/* Back button and Context head */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center space-x-3">
                    <button 
                      id="btn-back-to-languages"
                      onClick={() => { setSelectedLanguage(null); setSelectedTopic(null); }}
                      className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl">{selectedLanguage.flag}</span>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{selectedLanguage.localName}</h2>
                        <span className="text-xs text-slate-500 font-mono">({selectedLanguage.name})</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{selectedLanguage.description}</p>
                    </div>
                  </div>

                  {/* Ask custom prompt to AI with language reference */}
                  <button
                    id="btn-discuss-lang-ai"
                    onClick={() => {
                      setAiTopicContext(null);
                      setActiveTab("ai");
                      setChatInput(`Men ${selectedLanguage.localName}ni noldan o'rganishni boshlamoqchiman. Menga dars rejasini maxsus tuzib bering va til sirlarini ayting.`);
                    }}
                    className="flex items-center space-x-2 text-xs font-bold bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Ushbu til bo'yicha AI Ustozdan so'rash</span>
                  </button>
                </div>

                {/* Topic list and rules details Split Screen layout on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Topic list - left column */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-3">
                      <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest flex items-center space-x-2">
                        <BookOpenCheck className="h-4.5 w-4.5 text-emerald-500" />
                        <span>{t.topics}</span>
                      </h3>

                      {selectedLanguage.topics && selectedLanguage.topics.length > 0 ? (
                        <div id="topics-list-container" className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                          {selectedLanguage.topics.map((topic) => {
                            const isCurrent = selectedTopic?.id === topic.id;
                            return (
                              <div
                                key={topic.id}
                                id={`topic-item-${topic.id}`}
                                onClick={() => setSelectedTopic(topic)}
                                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all active:scale-98 ${
                                  isCurrent 
                                  ? "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500 text-slate-900 dark:text-white" 
                                  : "bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] uppercase font-extrabold tracking-wider bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md border border-indigo-500/15">
                                    {topic.level} Daraja
                                  </span>
                                  <span className="text-[11px] text-slate-400">0 dan boshlash</span>
                                </div>
                                <h4 className="font-bold text-xs sm:text-sm line-clamp-2">
                                  {topic.title}
                                </h4>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/30 rounded-xl space-y-2">
                          <p className="text-2xl">🚧</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{t.no_topics}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rules and Examples Viewboard - right column */}
                  <div className="lg:col-span-7 space-y-4">
                    {selectedTopic ? (
                      <div id="topic-detail-card" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-5 space-y-6">
                        
                        {/* Title and stats heading */}
                        <div className="border-b border-slate-100 dark:border-slate-800/60 pb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                              Level {selectedTopic.level}
                            </span>
                            <span className="text-xs text-slate-400">CEFR Standarti</span>
                          </div>
                          <h3 className="text-xl font-black text-slate-900 dark:text-white leading-snug">
                            {selectedTopic.title}
                          </h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 italic">
                            {selectedTopic.description}
                          </p>
                        </div>

                        {/* Rules specifications block */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-slate-500">
                            <h4 className="font-bold text-xs uppercase tracking-widest">{t.rules}</h4>
                          </div>
                          <ul className="space-y-2">
                            {selectedTopic.rules.map((rule, idx) => (
                              <li key={idx} className="bg-slate-50 dark:bg-slate-800/45 p-3.5 rounded-xl text-xs flex items-start space-x-2.5 border border-slate-100 dark:border-slate-800">
                                <span className="h-5 w-5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center rounded-full text-[10px] font-bold shrink-0 mt-0.5">
                                  {idx + 1}
                                </span>
                                <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans">{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Examples block */}
                        <div className="space-y-3">
                          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500">{t.examples}</h4>
                          <div className="space-y-3">
                            {selectedTopic.examples && selectedTopic.examples.map((ex) => (
                              <div 
                                key={ex.id}
                                className="group/ex p-3.5 bg-slate-50 dark:bg-slate-800/25 dark:hover:bg-slate-800/50 hover:bg-slate-100 rounded-xl border border-slate-100 dark:border-slate-800/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
                              >
                                <div className="space-y-1">
                                  <p className="font-semibold text-[13px] sm:text-sm text-slate-900 dark:text-white select-all">
                                    {ex.original}
                                  </p>
                                  <p className="text-[12px] text-slate-500 dark:text-emerald-400/80 font-medium">
                                    {ex.translation}
                                  </p>
                                </div>

                                <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
                                  {/* Speech synthesizer option */}
                                  <button
                                    onClick={() => playWordAudio(ex.original)}
                                    className="p-2 bg-white dark:bg-slate-700 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white rounded-lg transition-all border border-slate-200 dark:border-slate-600 flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-300"
                                    title="Tinglash (TTS Speak)"
                                  >
                                    <Volume2 className="h-3.5 w-3.5" />
                                    <span className="text-[10px] px-0.5">{t.listen}</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Discuss Topic on AI Assistant link */}
                        <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <h5 className="font-bold text-xs text-indigo-600 dark:text-indigo-400">Tushuna olmadgizmi? AI xizmati tayyor!</h5>
                            <p className="text-[11px] text-slate-500 mt-1">Ushbu dars yoki misollar bo'yicha sun'iy intellektdan qo'shimcha tushuntirish so'rang.</p>
                          </div>
                          
                          <button
                            id="btn-discuss-active-topic"
                            onClick={() => handleDiscussWithAi(selectedTopic)}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shrink-0 active:scale-95 flex items-center space-x-1.5"
                          >
                            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                            <span>{t.discuss_ai}</span>
                          </button>
                        </div>

                      </div>
                    ) : (
                      <div className="bg-slate-100/60 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800/80 p-12 text-center h-full flex flex-col justify-center items-center space-y-3">
                        <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                          <Award className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-slate-700 dark:text-slate-300">{t.topics}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                          Til o'rganishni boshlash darajalari mutlaqo 0 dan taqdim etiladi. Chap tarafdagi ro'yxatdan o'zingizga qiziq mavzuni tanlang.
                        </p>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            )}

          </div>
        )}

        {/* SECTION 2: FLASHCARDS SECTION */}
        {activeTab === "flashcards" && (
          <div id="section-flashcards" className="max-w-4xl mx-auto space-y-6">
            
            {!showFCDashboard ? (
              // Onboarding card presentation view
              <div id="fc-onboarding-screen" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl max-w-xl mx-auto space-y-8 my-6">
                <div className="relative mx-auto w-24 h-24 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white text-5xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  🎴
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    {t.fc_intro_title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Xorijiy so'zlarni xotirada uzoq saqlab qolish uchun vizual, audio va interaktiv assotsiatsiyalar yordam beradi. Tajriba qiling!
                  </p>
                </div>

                <button
                  id="btn-fc-continue"
                  onClick={() => {
                    setShowFCDashboard(true);
                    localStorage.setItem("cefr_fc_dismiss_intro", "true");
                  }}
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-extrabold rounded-2xl shadow-xl transition-all"
                >
                  {t.fc_intro_btn}
                </button>
              </div>
            ) : (
              // Active Flashcards dashboard with Random vs Custom Word tab lists
              <div className="space-y-6">
                
                {/* Visual Section Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎴</span>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">Flesh Kartalar yordamida tezkor xotira</h2>
                      <p className="text-[11px] text-slate-500">So'z yodlashning faza tahlili orqali samarasini oshiring</p>
                    </div>
                  </div>

                  {/* Navigation Switch inside block */}
                  <div className="flex space-x-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-full sm:w-auto">
                    <button
                      id="btn-fc-tab-random"
                      onClick={() => { setFcTab("random"); setIsFlipped(false); }}
                      className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        fcTab === "random" 
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-500"
                      }`}
                    >
                      🎲 {t.fc_tab_random}
                    </button>
                    <button
                      id="btn-fc-tab-my"
                      onClick={() => { setFcTab("my"); setIsFlipped(false); }}
                      className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        fcTab === "my"
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-500"
                      }`}
                    >
                      🧑‍💻 {t.fc_tab_my} ({customFlashcards.length})
                    </button>
                  </div>
                </div>

                {/* Sub-view: Random pre-populated word deck */}
                {fcTab === "random" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Interactive Flashcard 3D perspective Container */}
                    <div className="md:col-span-8 flex flex-col items-center justify-center space-y-4">
                      
                      {/* Interactive Card container */}
                      <div 
                        id="interactive-fc-card"
                        onClick={() => setIsFlipped(!isFlipped)}
                        className="relative w-full h-[300px] sm:h-[330px] max-w-lg cursor-pointer group [perspective:1000px] rounded-3xl mx-auto"
                      >
                        <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                          
                          {/* CARD FRONT SIDE (English Word + Emoji + Context info) */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white to-slate-50 dark:from-slate-900 dark:to-slate-850 border-2 border-purple-500/20 dark:border-purple-500/10 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl [backface-visibility:hidden]">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-extrabold bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/10">{t.fc_tab_random}</span>
                              <span className="text-3xl filter drop-shadow">{DEFAULT_FLASHCARDS[randomFcIndex]?.contextIcon}</span>
                            </div>

                            <div className="text-center space-y-1 py-3 flex-1 flex flex-col justify-center">
                              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-wide">
                                {DEFAULT_FLASHCARDS[randomFcIndex]?.english}
                              </h3>
                              <p className="text-slate-400 text-[10px] sm:text-xs italic tracking-wide">{t.fc_flip_hint}</p>
                            </div>

                            <div className="p-2.5 sm:p-3 bg-purple-50 dark:bg-purple-950/20 rounded-2xl border border-purple-500/10 text-left space-y-0.5 overflow-hidden">
                              <span className="text-[10px] uppercase tracking-wider text-purple-600 font-extrabold block">Misol (Context):</span>
                              <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-medium select-all line-clamp-3 overflow-y-auto pr-1">
                                {DEFAULT_FLASHCARDS[randomFcIndex]?.example}
                              </p>
                            </div>
                          </div>

                          {/* CARD BACK SIDE (Uzbek Translation info) */}
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-indigo-900 to-indigo-950 text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <div className="flex items-center justify-between">
                              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-300 bg-white/10 px-2.5 py-1 rounded-full">Tarjima</span>
                              <span className="text-3xl">🎯</span>
                            </div>

                            <div className="text-center py-3 flex-1 flex flex-col justify-center space-y-0.5">
                              <span className="text-xs text-indigo-200 block">Tarjimasi / Meaning:</span>
                              <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-300 tracking-wide">
                                {DEFAULT_FLASHCARDS[randomFcIndex]?.uzbek}
                              </h3>
                            </div>

                            <div className="p-2.5 sm:p-3 bg-white/5 rounded-2xl border border-white/10 text-left space-y-0.5 overflow-hidden">
                              <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-extrabold block">Gap Tarjimasi (Context Translation):</span>
                              <p className="text-[11px] sm:text-xs text-slate-200 font-medium font-sans line-clamp-3 overflow-y-auto pr-1">
                                {DEFAULT_FLASHCARDS[randomFcIndex]?.exampleTr}
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Card Control and Audio Players */}
                      <div className="flex items-center justify-between w-full max-w-lg px-2 mt-2">
                        <button
                          id="btn-fc-sound"
                          onClick={() => playWordAudio(DEFAULT_FLASHCARDS[randomFcIndex]?.english)}
                          className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white rounded-2xl transition-all border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300"
                        >
                          <Volume2 className="h-4 w-4" />
                          <span>Talaffuz (Audio)</span>
                        </button>

                        <div className="flex items-center space-x-2">
                          <button
                            id="btn-fc-prev"
                            onClick={() => {
                              setIsFlipped(false);
                              setRandomFcIndex(prev => prev > 0 ? prev - 1 : DEFAULT_FLASHCARDS.length - 1);
                            }}
                            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-250 dark:hover:bg-slate-700 rounded-2xl transition-all border border-slate-200 dark:border-slate-700"
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </button>

                          <span className="text-[13px] font-mono px-3">
                            <span className="font-extrabold text-purple-600">{randomFcIndex + 1}</span> / {DEFAULT_FLASHCARDS.length}
                          </span>

                          <button
                            id="btn-fc-next"
                            onClick={() => {
                              setIsFlipped(false);
                              setRandomFcIndex(prev => prev < DEFAULT_FLASHCARDS.length - 1 ? prev + 1 : 0);
                            }}
                            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-250 dark:hover:bg-slate-700 rounded-2xl transition-all border border-slate-200 dark:border-slate-700"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Leftside list review grid of words */}
                    <div className="md:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-3">
                      <h4 className="font-bold text-xs uppercase text-slate-400 tracking-widest flex items-center gap-1.5">
                        <span>📖 Karta To'plamlari</span>
                      </h4>
                      <div className="space-y-1.5 max-h-[290px] overflow-y-auto pr-1">
                        {DEFAULT_FLASHCARDS.map((fc, i) => (
                          <div
                            key={fc.id}
                            onClick={() => {
                              setSelectedLanguage(null);
                              setRandomFcIndex(i);
                              setIsFlipped(false);
                            }}
                            className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                              randomFcIndex === i
                              ? "bg-purple-500/10 dark:bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400"
                              : "bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-850 hover:bg-slate-100"
                            }`}
                          >
                            <div className="flex items-center space-x-2.5">
                              <span className="text-xl">{fc.contextIcon}</span>
                              <div>
                                <h5 className="font-bold text-xs">{fc.english}</h5>
                                <p className="text-[10px] text-slate-400 font-medium">{fc.uzbek}</p>
                              </div>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono">#{i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* Sub-view: My Custom vocabulary word deck with form builder */}
                {fcTab === "my" && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Add Custom Vocabulary Form Card */}
                    <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
                      
                      <div className="flex items-center space-x-2">
                        <Plus className="h-4.5 w-4.5 text-emerald-500" />
                        <h3 className="font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider">{t.fc_add_title}</h3>
                      </div>

                      <form onSubmit={handleAddCustomCard} className="space-y-3 text-left">
                        
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase">{t.fc_word_en}</label>
                          <input 
                            id="input-fc-word-en"
                            type="text" 
                            required
                            className="w-full text-xs text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="e.g. Gorgeous"
                            value={newEnWord}
                            onChange={(e) => setNewEnWord(e.target.value)}
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase">{t.fc_word_uz}</label>
                          <input 
                            id="input-fc-word-uz"
                            type="text" 
                            required
                            className="w-full text-xs text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="masalan: Judayam chiroyli, nafis"
                            value={newUzWord}
                            onChange={(e) => setNewUzWord(e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="col-span-1 space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase">{t.fc_emoji}</label>
                            <select 
                              id="select-fc-emoji"
                              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-2 text-slate-900 dark:text-white"
                              value={newEmoji}
                              onChange={(e) => setNewEmoji(e.target.value)}
                            >
                              <option value="🏷️">🏷️ Tag</option>
                              <option value="💡">💡 Idea</option>
                              <option value="⭐">⭐ Star</option>
                              <option value="🔥">🔥 Fire</option>
                              <option value="🎓">🎓 Education</option>
                              <option value="💼">💼 Work</option>
                              <option value="✈️">✈️ Travel</option>
                              <option value="🍕">🍕 Food</option>
                              <option value="🦁">🦁 Animals</option>
                            </select>
                          </div>

                          <div className="col-span-2 space-y-1">
                            <label className="text-[11px] font-bold text-slate-500 uppercase">{t.fc_example}</label>
                            <input 
                              id="input-fc-example"
                              type="text" 
                              className="w-full text-xs text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                              placeholder="e.g. You look gorgeous!"
                              value={newExample}
                              onChange={(e) => setNewExample(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase">{t.fc_example_tr}</label>
                          <input 
                            id="input-fc-example-tr"
                            type="text" 
                            className="w-full text-xs text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="masalan: Siz juda chiroyli ko'rinasiz!"
                            value={newExampleTr}
                            onChange={(e) => setNewExampleTr(e.target.value)}
                          />
                        </div>

                        <button
                          id="submit-fc-add"
                          type="submit"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center space-x-2"
                        >
                          <Plus className="h-4 w-4" />
                          <span>{t.fc_add_btn}</span>
                        </button>

                      </form>

                    </div>

                    {/* My Word Cards Presentation & List */}
                    <div className="md:col-span-7 space-y-4 text-center">
                      
                      {customFlashcards.length > 0 ? (
                        <div className="space-y-4">
                          
                          {/* Present Active Custom Word Card with flip animation */}
                          <div 
                            id="custom-fc-card-interactive"
                            onClick={() => setIsFlipped(!isFlipped)}
                            className="relative w-full h-[300px] sm:h-[330px] max-w-lg cursor-pointer group [perspective:1000px] rounded-3xl mx-auto"
                          >
                            <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                              
                              {/* USER CARD FRONT (English) */}
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-purple-50 to-white dark:from-slate-900 dark:to-slate-850 border-2 border-emerald-500/20 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl [backface-visibility:hidden]">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg">{t.fc_tab_my}</span>
                                  <span className="text-3xl">{customFlashcards[myFcIndex]?.contextIcon}</span>
                                </div>

                                <div className="text-center py-2 flex-1 flex flex-col justify-center space-y-0.5">
                                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                                    {customFlashcards[myFcIndex]?.english}
                                  </h3>
                                  <p className="text-slate-400 text-[10px]">{t.fc_flip_hint}</p>
                                </div>

                                {customFlashcards[myFcIndex]?.example ? (
                                  <div className="p-2 sm:p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-0.5 text-left overflow-hidden">
                                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-purple-600 font-bold block">Misol:</span>
                                    <p className="text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 font-medium line-clamp-3 overflow-y-auto pr-1">{customFlashcards[myFcIndex]?.example}</p>
                                  </div>
                                ) : (
                                  <div className="h-4"></div>
                                )}
                              </div>

                              {/* USER CARD BACK (Uzbek translation) */}
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-emerald-900 to-emerald-950 text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-emerald-300 bg-white/10 px-2 py-0.5 rounded-lg">Mening Tarjimam</span>
                                  <span className="text-3xl">🧩</span>
                                </div>

                                <div className="text-center py-2 flex-1 flex flex-col justify-center space-y-0.5">
                                  <span className="text-[11px] text-emerald-200">Tarjimasi:</span>
                                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                                    {customFlashcards[myFcIndex]?.uzbek}
                                  </h3>
                                </div>

                                {customFlashcards[myFcIndex]?.exampleTr ? (
                                  <div className="p-2 sm:p-2.5 bg-white/5 rounded-xl text-left space-y-0.5 overflow-hidden">
                                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-emerald-300 font-bold block">Tarjimasi:</span>
                                    <p className="text-[10px] sm:text-[11px] text-slate-200 leading-normal line-clamp-3 overflow-y-auto pr-1">{customFlashcards[myFcIndex]?.exampleTr}</p>
                                  </div>
                                ) : (
                                  <div className="h-4"></div>
                                )}
                              </div>

                            </div>
                          </div>

                          {/* Controls row */}
                          <div className="flex items-center justify-between w-full max-w-lg mx-auto">
                            
                            <button
                              id="btn-fc-sound-user"
                              onClick={() => playWordAudio(customFlashcards[myFcIndex]?.english)}
                              className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center space-x-1.5"
                            >
                              <Volume2 className="h-4 w-4" />
                              <span>Sound</span>
                            </button>

                            <div className="flex items-center space-x-1">
                              <button
                                id="btn-fc-user-prev"
                                onClick={() => {
                                  setIsFlipped(false);
                                  setMyFcIndex(prev => prev > 0 ? prev - 1 : customFlashcards.length - 1);
                                }}
                                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300"
                              >
                                ◀
                              </button>
                              <span className="mx-2 text-xs font-mono">{myFcIndex + 1} / {customFlashcards.length}</span>
                              <button
                                id="btn-fc-user-next"
                                onClick={() => {
                                  setIsFlipped(false);
                                  setMyFcIndex(prev => prev < customFlashcards.length - 1 ? prev + 1 : 0);
                                }}
                                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300"
                              >
                                ▶
                              </button>
                            </div>

                            <button
                              id="btn-fc-delete-user"
                              onClick={() => {
                                showToast("Karta ro'yxatdan muvaffaqiyatli o'chirildi.", "info");
                                setCustomFlashcards(prev => prev.filter((_, idx) => idx !== myFcIndex));
                                setMyFcIndex(0);
                                setIsFlipped(false);
                              }}
                              className="p-2.5 bg-rose-50 dark:bg-rose-950/20 text-rose-600 hover:bg-rose-500 hover:text-white rounded-xl text-xs transition-all flex items-center space-x-1"
                              title="O'chirish"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              <span>O'chirish</span>
                            </button>

                          </div>

                          {/* Full custom lists for quick review select */}
                          <div className="bg-slate-100/50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-left">
                            <span className="text-[10px] block text-slate-400 uppercase tracking-widest mb-1.5 font-bold">Barcha Kiritgan kartalarim:</span>
                            <div className="flex flex-wrap gap-2">
                              {customFlashcards.map((fc, i) => (
                                <button
                                  key={fc.id}
                                  id={`user-fc-badge-${fc.id}`}
                                  onClick={() => { setMyFcIndex(i); setIsFlipped(false); }}
                                  className={`px-3 py-1.5 text-xs rounded-xl flex items-center space-x-1.5 border transition-all ${
                                    myFcIndex === i
                                    ? "bg-purple-600 text-white border-purple-600 shadow-md"
                                    : "bg-white dark:bg-slate-800 border-slate-250 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                                  }`}
                                >
                                  <span>{fc.contextIcon}</span>
                                  <span className="font-semibold">{fc.english}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                        </div>
                      ) : (
                        <div className="bg-slate-100/60 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center h-full flex flex-col justify-center items-center space-y-3 min-h-[300px]">
                          <span className="text-4xl">🗂️</span>
                          <h4 className="font-bold text-slate-700 dark:text-slate-300">Shaxsiy luyg'atingiz bo'sh</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                            Hozircha o'zingiz kiritgan yangi so'zlar mavjud emas. Chap tarafdagi formani to'ldirib, birinchi maxsus so'z kartangizni yarating!
                          </p>
                        </div>
                      )}

                    </div>

                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* SECTION 3: AI ASSISTANT SECTION */}
        {activeTab === "ai" && (
          <div id="section-ai" className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Context and status settings - Sidebar column on desktop */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4">
                
                <h3 className="font-bold text-sm text-slate-500 uppercase tracking-wider flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-emerald-500 animate-spin" />
                  <span>AI Ustoz Sozlamalari</span>
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.ai_status_default}
                </p>

                {/* Active Context Indicators */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Metadarslar konteksti:</span>
                  
                  {selectedLanguage ? (
                    <div className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold p-3 rounded-xl border border-emerald-500/20 flex items-center space-x-2.5">
                      <span className="text-2xl">{selectedLanguage.flag}</span>
                      <div>
                        <span className="block text-[10px] text-slate-400 leading-none">{t.ai_context_active} (Til):</span>
                        <span className="font-bold">{selectedLanguage.localName}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-400 italic">Til tanlanmagan (Umumiy sozlama faol)</p>
                  )}

                  {aiTopicContext ? (
                    <div className="bg-indigo-505/10 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-semibold p-3 rounded-xl border border-indigo-500/20 justify-between items-center flex">
                      <div className="space-y-0.5">
                        <span className="block text-[9px] text-indigo-400 leading-none">Dars Mavzusi:</span>
                        <span className="font-bold line-clamp-1 text-[11.5px]">{aiTopicContext.title}</span>
                      </div>
                      <button 
                        onClick={() => setAiTopicContext(null)}
                        className="text-xs px-2 py-0.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 rounded-lg ml-2 shrink-0"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <p className="text-[11px] text-slate-400 italic">Darslik konteksti bog'lanmagan</p>
                  )}
                </div>

                {/* Suggestions triggers section */}
                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{t.ai_suggest_title}</span>
                  <div className="space-y-2 text-left">
                    <button
                      onClick={() => setChatInput("Ingliz tilida artikllar (a, an, the) qaysi holatlarda ishlatilmaydi?")}
                      className="w-full p-2.5 text-[11px] bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-850 rounded-xl text-slate-700 dark:text-slate-300 text-left border border-slate-100 dark:border-slate-800 truncate"
                    >
                      💡 Artikllar qoidasi haqida so'rash
                    </button>
                    <button
                      onClick={() => setChatInput("Menga xorijiy so'zlarni eslab qolish uchun 3 ta ilmiy tavsiya bering.")}
                      className="w-full p-2.5 text-[11px] bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-850 rounded-xl text-slate-700 dark:text-slate-300 text-left border border-slate-100 dark:border-slate-800 truncate"
                    >
                      💡 So'z eslab qolish metodlari
                    </button>
                    <button
                      onClick={() => setChatInput("Chet tilida erkin gapirish uchun har kuni qancha shug'ullanish lozim?")}
                      className="w-full p-2.5 text-[11px] bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-850 rounded-xl text-slate-700 dark:text-slate-300 text-left border border-slate-100 dark:border-slate-800 truncate"
                    >
                      💡 Erkin so'zlashuv sirlari
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Chat Room Area Column - right side */}
            <div className="lg:col-span-8 flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 min-h-[500px] shadow-sm">
              
              {/* Messages viewport */}
              <div 
                id="ai-messages-wall" 
                className="flex-grow p-5 space-y-4 overflow-y-auto max-h-[400px] min-h-[350px]"
              >
                {chatMessages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <div 
                      key={msg.id}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                    >
                      <div className={`max-w-[85%] rounded-2xl p-4 space-y-1 ${
                        isUser 
                        ? 'bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white rounded-br-none shadow-md' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-850 dark:text-slate-100 rounded-bl-none border border-slate-200/50 dark:border-slate-750'
                      }`}>
                        
                        {/* Speaker Indicator */}
                        <div className="flex items-center justify-between space-x-4 mb-1">
                          <span className="text-[9px] uppercase font-bold tracking-widest opacity-75">
                            {isUser ? 'Foydalanuvchi' : 'AI CEFR Ustoz'}
                          </span>
                          <span className="text-[8px] opacity-60 font-mono">{msg.timestamp}</span>
                        </div>

                        {/* Text message parsed lines */}
                        <p className="text-xs sm:text-sm font-normal leading-relaxed whitespace-pre-wrap select-all">
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Loading indicator representation */}
                {isAiLoading && (
                  <div className="flex justify-start items-center space-x-2 animate-pulse py-2">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                    <div className="h-2 w-2 bg-indigo-500 rounded-full delay-150"></div>
                    <div className="h-2 w-2 bg-indigo-500 rounded-full delay-300"></div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider italic">AI fikrlamoqda...</span>
                  </div>
                )}
              </div>

              {/* Text Input Row block form */}
              <form 
                onSubmit={handleSendChatMessage}
                className="p-4 border-t border-slate-150 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 rounded-b-3xl"
              >
                <div className="flex space-x-2">
                  <input 
                    id="input-ai-chat"
                    type="text"
                    required
                    disabled={isAiLoading}
                    className="flex-grow bg-white dark:bg-white border border-slate-200 dark:border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500/70 transition-all placeholder-slate-400 font-medium"
                    placeholder={t.ai_placeholder}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <button
                    id="btn-ai-send"
                    type="submit"
                    disabled={isAiLoading || !chatInput.trim()}
                    className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0"
                  >
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-2 px-1">
                  <span className="text-[10px] text-slate-400">
                    Qurilmangizda Gemini 3.5 modeli faol ishlamoqda.
                  </span>
                  
                  <button
                    id="btn-clear-chat-history"
                    type="button"
                    onClick={() => {
                      if(confirm("Suhbat tarixini butunlay tozilashga rozimisiz?")) {
                        setChatMessages([
                          {
                            id: "welcome-ai",
                            role: "model",
                            text: "Suhbat tarixi muvaffaqiyatli tozalandi. Menga istalgan savolingizni bering!",
                            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          }
                        ]);
                        showToast("Chat muvaffaqiyatli tozalandi.", "info");
                      }
                    }}
                    className="text-[9px] font-bold text-rose-500 hover:text-rose-600 uppercase tracking-wider flex items-center space-x-1"
                  >
                    <span>🗑️ Tozalash</span>
                  </button>
                </div>
              </form>

            </div>

          </div>
        )}

        {/* SECTION 4: PROFILE SECTION */}
        {activeTab === "profile" && (
          <div id="section-profile" className="max-w-4xl mx-auto space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Account settings forms info */}
              <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
                
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                  <span>⚙️ {t.profile_title}</span>
                </h3>

                <div className="space-y-4">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">{t.first_name}</label>
                      <input 
                        id="input-user-firstname"
                        type="text"
                        className="w-full text-xs sm:text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 focus:outline-none"
                        value={userProfile.firstName}
                        onChange={(e) => {
                          const updated = { ...userProfile, firstName: e.target.value };
                          setUserProfile(updated);
                        }}
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-[11px] font-bold text-slate-400 uppercase">{t.last_name}</label>
                      <input 
                        id="input-user-lastname"
                        type="text"
                        className="w-full text-xs sm:text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 focus:outline-none"
                        value={userProfile.lastName}
                        onChange={(e) => {
                          const updated = { ...userProfile, lastName: e.target.value };
                          setUserProfile(updated);
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-bold text-slate-400 uppercase">{t.email}</label>
                    <input 
                      id="input-user-email"
                      type="email"
                      className="w-full text-xs sm:text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 focus:outline-none"
                      value={userProfile.email}
                      onChange={(e) => {
                        const updated = { ...userProfile, email: e.target.value };
                        setUserProfile(updated);
                      }}
                    />
                  </div>

                  {/* App Language Toggle Block */}
                  <div className="space-y-2 text-left pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.app_lang}:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        id="btn-lang-uz"
                        onClick={() => setAppLang("uz")}
                        className={`py-2 text-xs font-bold rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                          appLang === "uz" 
                          ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500 shadow-sm" 
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-755 text-slate-650"
                        }`}
                      >
                        🇺🇿 <span>O'zbekcha</span>
                      </button>
                      <button
                        id="btn-lang-en"
                        onClick={() => setAppLang("en")}
                        className={`py-2 text-xs font-bold rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                          appLang === "en"
                          ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-755 text-slate-650"
                        }`}
                      >
                        🇬🇧 <span>English</span>
                      </button>
                      <button
                        id="btn-lang-ru"
                        onClick={() => setAppLang("ru")}
                        className={`py-2 text-xs font-bold rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                          appLang === "ru"
                          ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-755 text-slate-650"
                        }`}
                      >
                        🇷🇺 <span>Русский</span>
                      </button>
                    </div>
                  </div>

                  {/* Theme Selector UI */}
                  <div className="space-y-2 text-left pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.theme}:</span>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        id="btn-theme-light"
                        onClick={() => setTheme("light")}
                        className={`py-2.5 text-xs font-semibold rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                          theme === "light" 
                          ? "bg-indigo-500/15 border-indigo-500 text-indigo-600 font-bold" 
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Sun className="h-4 w-4" />
                        <span>{t.theme_light}</span>
                      </button>
                      <button
                        id="btn-theme-dark"
                        onClick={() => setTheme("dark")}
                        className={`py-2.5 text-xs font-semibold rounded-xl border flex items-center justify-center space-x-2 transition-all ${
                          theme === "dark"
                          ? "bg-indigo-500/15 border-indigo-500 text-slate-100 font-bold"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Moon className="h-4 w-4 text-indigo-400" />
                        <span>{t.theme_dark}</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Subscriptions, Virtual balance & Deposit trigger - Right Column */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-gradient-to-tr from-indigo-900 to-slate-900 text-white rounded-3xl p-6 space-y-5 shadow-xl border border-indigo-500/20">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-300">CEFRTation Wallet</span>
                    <span className="text-2xl">💳</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-indigo-200 font-sans block">{t.balance}:</span>
                    <h4 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                      {userBalance.toLocaleString()} UZS
                    </h4>
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-profile-top-up"
                      onClick={() => setIsDepositOpen(true)}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-xs py-3 rounded-2xl transition-all shadow-md"
                    >
                      💰 {t.top_up} (Simulyatsiya to'lovi)
                    </button>
                  </div>

                  {/* Simulated discount voucher */}
                  <div className="text-[10px] text-indigo-300 italic pt-1 text-center bg-white/5 p-2 rounded-xl">
                    Sizda 25,000 UZS starter balansi taqdim qilingan! Istalgan tillarni sotib oling va o'rganing.
                  </div>

                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
                  <h4 className="font-bold text-sm text-slate-850 dark:text-white uppercase tracking-wider">{t.sub_title}</h4>
                  
                  <div className="space-y-3">
                    {/* Unlocked Languages list */}
                    <div className="space-y-1.5 text-left">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">{t.locked_langs}:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {userProfile.premiumAllUnlocked ? (
                          <span className="text-xs font-bold bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full border border-amber-500/20">
                            🌎 Barcha tillar ochiq!
                          </span>
                        ) : (
                          FAMOUS_LANGUAGES.filter(lang => userProfile.unlockedLanguages.includes(lang.id) || lang.isFree).map(lang => (
                            <span 
                              key={lang.id}
                              className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-xl flex items-center space-x-1"
                            >
                              <span>{lang.flag}</span>
                              <span>{lang.localName}</span>
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                    {!userProfile.premiumAllUnlocked && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-850 space-y-2">
                        <div className="text-left">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{t.status_premium}</span>
                          <p className="text-[10px] text-slate-400 block mt-0.5">{t.unlimited_desc}</p>
                        </div>
                        <button
                          id="btn-unlock-all"
                          onClick={unlockAllLanguagesSpecial}
                          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all"
                        >
                          💎 Active Premium Pack (80K UZS)
                        </button>
                      </div>
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* Fictitious Balance Deposit Modal representation */}
      {isDepositOpen && (
        <div id="modal-deposit" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-sm w-full p-6 space-y-5 shadow-2xl">
            
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">💳 {t.topup_modal_title}</h3>
              <button 
                onClick={() => setIsDepositOpen(false)}
                className="text-slate-400 hover:text-slate-200 text-lg p-1.5"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleTopUpSubmit} className="space-y-4 text-left">
              
              <div className="space-y-1.5">
                <label className="text-xs text-slate-500">{t.enter_amount}</label>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    type="button"
                    onClick={() => setDepositAmount(10000)}
                    className="py-2 bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 hover:dark:bg-slate-800 text-xs font-bold rounded-xl text-slate-950 dark:text-white border border-slate-200 dark:border-slate-755"
                  >
                    10k UZS
                  </button>
                  <button 
                    type="button"
                    onClick={() => setDepositAmount(50000)}
                    className="py-2 bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 hover:dark:bg-slate-800 text-xs font-bold rounded-xl text-slate-950 dark:text-white border border-slate-200 dark:border-slate-755"
                  >
                    50k UZS
                  </button>
                  <button 
                    type="button"
                    onClick={() => setDepositAmount(100000)}
                    className="py-2 bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 hover:dark:bg-slate-800 text-xs font-bold rounded-xl text-slate-950 dark:text-white border border-slate-200 dark:border-slate-755"
                  >
                    100k UZS
                  </button>
                </div>
                
                <input 
                  id="input-deposit-custom"
                  type="number"
                  required
                  min="1000"
                  className="w-full text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 mt-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  id="btn-deposit-close"
                  type="button"
                  onClick={() => setIsDepositOpen(false)}
                  className="flex-1 bg-slate-100 dark:bg-slate-805 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs py-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  {t.cancel}
                </button>
                
                <button
                  id="btn-deposit-submit"
                  type="submit"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-2.5 rounded-xl shadow-lg"
                >
                  {t.pay_simulation}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* Language Purchase confirmation dialog */}
      {langToBuy && (
        <div id="modal-purchase-lang" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-sm w-full p-6 text-center space-y-4">
            
            <span className="text-5xl block filter drop-shadow animate-bounce">{langToBuy.flag}</span>
            
            <div className="space-y-1">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                {langToBuy.localName} {t.buy_confirm_title}
              </h3>
              <p className="text-xs text-slate-500 font-mono">({langToBuy.name} premium kurslari)</p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-850 rounded-2xl p-4 flex justify-between items-center max-w-xs mx-auto border border-slate-200 dark:border-slate-750">
              <div className="text-left space-y-0.5">
                <span className="text-[10px] text-slate-500 tracking-wider block uppercase">Kurs Narxi:</span>
                <span className="text-sm font-black text-rose-500">{langToBuy.priceUZS.toLocaleString()} UZS</span>
              </div>
              <div className="text-right space-y-0.5">
                <span className="text-[10px] text-slate-500 tracking-wider block uppercase">Balansingiz:</span>
                <span className="text-sm font-black text-slate-700 dark:text-slate-300">{userBalance.toLocaleString()} UZS</span>
              </div>
            </div>

            {userBalance < langToBuy.priceUZS && (
              <div className="text-[10px] text-rose-500 bg-rose-500/10 border border-rose-500/20 p-2 rounded-xl">
                ⚠️ Hisobingizda mablag' yetarli emas! To'ldirishni amalga oshiring.
              </div>
            )}

            <div className="flex space-x-2 pt-2">
              <button
                id="btn-purchase-cancel"
                onClick={() => setLangToBuy(null)}
                className="flex-1 bg-slate-150 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs py-2.5 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                {t.cancel}
              </button>
              
              <button
                id="btn-purchase-confirm"
                onClick={confirmPurchase}
                className="flex-1 bg-gradient-to-tr from-emerald-500 to-indigo-600 hover:brightness-110 text-white font-extrabold text-xs py-2.5 rounded-xl shadow-lg"
              >
                {t.confirm}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Adaptive Mobile Bottom Navbar (floating bar) */}
      <footer id="cefr-mobile-nav" className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800/80 z-40 transition-colors">
        <div className="grid grid-cols-4 h-16 py-1">
          
          <button
            id="tab-courses-mobile"
            onClick={() => { setActiveTab("courses"); setSelectedTopic(null); }}
            className={`flex flex-col items-center justify-center space-y-1 ${
              activeTab === "courses" ? "text-emerald-500" : "text-slate-500"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-[10px] font-bold">{t.nav_courses}</span>
          </button>

          <button
            id="tab-flashcards-mobile"
            onClick={() => { setActiveTab("flashcards"); }}
            className={`flex flex-col items-center justify-center space-y-1 ${
              activeTab === "flashcards" ? "text-purple-500" : "text-slate-500"
            }`}
          >
            <BookMarked className="h-5 w-5" />
            <span className="text-[10px] font-bold">{t.nav_flashcards}</span>
          </button>

          <button
            id="tab-ai-mobile"
            onClick={() => { setActiveTab("ai"); }}
            className={`flex flex-col items-center justify-center space-y-1 ${
              activeTab === "ai" ? "text-indigo-500" : "text-slate-500"
            }`}
          >
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="text-[10px] font-bold">{t.nav_ai}</span>
          </button>

          <button
            id="tab-profile-mobile"
            onClick={() => { setActiveTab("profile"); }}
            className={`flex flex-col items-center justify-center space-y-1 ${
              activeTab === "profile" ? "text-sky-500" : "text-slate-500"
            }`}
          >
            <User className="h-5 w-5" />
            <span className="text-[10px] font-bold">{t.nav_profile}</span>
          </button>

        </div>
      </footer>

    </div>
  );
}
