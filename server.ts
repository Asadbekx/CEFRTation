import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy-initialized GoogleGenAI to safeguard against builds failing when API keys are absent
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please add your key to Secrets in the AI Studio Settings.");
    }
    aiInstance = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiInstance;
}

// AI Help / Chat Route
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history, languageContext, topicContext } = req.body;
    
    let ai;
    try {
      ai = getGeminiClient();
    } catch (apiErr: any) {
      // If the API key is not ready yet, return a helpful user message rather than crashing
      return res.status(200).json({ 
        text: "Kechirasiz, hozirda AI yordamchisi sozlanmagan (GEMINI_API_KEY topilmadi). Iltimos, AI Studio sozlamalarida sirlar (Secrets) paneliga GEMINI_API_KEY ni kiriting.",
        isConfigError: true
      });
    }

    const systemInstruction = `Siz "CEFRTation" deb nomlanuvchi zamonaviy til o'rganish ilovasining mehribon, tajribali va juda bilimdon AI til ustozi va maslahatshisiz.
Siz foydalanuvchiga barcha 30+ xorijiy tillarni (ayniqsa Ingliz tili) o'rganishda grammatika, so'z yodlash, misollar va qoidalar yuzasidan o'zbek tilida tushuntirish berasiz.

Sizga taqdim etilgan kontekst:
- Tanlangan chet tili: ${languageContext || "Umumiy til o'rganish"}
- Hozirgi dars/mavzu: ${topicContext || "Umumiy savol-javob"}

Qoidalar:
1. Har doim samimiy va dalda beruvchi ohangda bevosita o'zbek tilida muloqot qiling.
2. Grammatika darslarini tushuntirganda doim aniq o'zbekcha tarjimasi bor misollar keltiring.
3. Agar foydalanuvchi taqdim etgan so'rov mavzuga tegishli bo'lmasa, uni muloyimlik bilan til o'rganish va dars bo'yicha savollar berishga yo'naltiring.
4. Markdown formatidan chiroyli foydalangan holda javobingizni tarkiblang (masalan, muhim terminlarni **bold** qilish, misollarni alohida bloklarga bo'lish).`;

    const contents: any[] = [];
    
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      }
    }
    
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini integration error on server.ts:", error);
    res.status(500).json({ error: error?.message || "Serverda AI so'rovini qayta ishlashda xatolik yuz berdi." });
  }
});

async function startServer() {
  // Vite middleware in non-production mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
