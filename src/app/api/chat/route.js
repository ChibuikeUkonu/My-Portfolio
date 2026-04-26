import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🔹 Intent matcher (smart keyword grouping)
function matchIntent(text, keywords) {
  return keywords.some((k) => text.includes(k));
}

export async function POST(req) {
  const { message } = await req.json();
  const lower = message.toLowerCase();

  // 🔥 1. NAME / IDENTITY
  if (
    matchIntent(lower, [
      "hi",
      "hello",
      "hey",
      "introduce yourself",
      "what are you called",
    ])
  ) {
    return Response.json({
      reply: "Hi, I'm Chibyke's portfolio assistant! Ask me anything about him and his work.",
    });
  }

  // 🔥 2. FULL NAME
  if (
    matchIntent(lower, [
      "full name",
      "real name",
      "what is your full name",
    ])
  ) {
    return Response.json({
      reply: "My name is Chibuike Ukonu Igbe.",
    });
  }

  // 🔥 3. SKILLS / TECH STACK
  if (
    matchIntent(lower, [
      "skill",
      "skills",
      "tech",
      "stack",
      "technologies",
      "what do you know",
      "what can you do",
      "tools you use",
    ])
  ) {
    return Response.json({
      reply:
        "I am a certified Full-stack developer and AWS Analyst. I work with HTML, CSS, Next.js, Node.js, MongoDB, and Tailwind CSS.",
    });
  }

  // 🔥 4. LOCATION
  if (
    matchIntent(lower, [
      "where are you",
      "based",
      "location",
      "country",
      "live",
      "from where",
    ])
  ) {
    return Response.json({
      reply:
        "I am based in Nigeria but open to remote work opportunities worldwide, and willing to relocate if necessary.",
    });
  }

  // 🔥 5. PROJECTS
  if (
    matchIntent(lower, [
      "project",
      "projects",
      "what have you built",
      "built",
      "portfolio",
      "work",
      "experience",
    ])
  ) {
    return Response.json({
      reply:
        "I've built an e-commerce platform with authentication and OTP verification, along with several backend API systems and full-stack applications.",
    });
  }

  // 🔥 6. FREELANCE / HIRING
  if (
    matchIntent(lower, [
      "freelance",
      "hire",
      "available",
      "job",
      "work with you",
      "can i hire you",
      "opportunity",
    ])
  ) {
    return Response.json({
      reply:
        "Yes, I am currently available for freelance and full-time positions. Feel free to reach out and let's build something amazing together!",
    });
  }

  // 🔹 2. GEMINI AI FALLBACK (IMPROVED)
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are a smart, friendly portfolio assistant for Chibyke.

About him:
- Full-stack developer and AWS Analyst
- Skilled in HTML, CSS, JavaScript, Next.js, Node.js, MongoDB, Tailwind CSS, AWS Console, and more.
- Built an e-commerce system with authentication and OTP verification, and various backend APIs and full-stack applications.
- Focused on backend systems, APIs, and scalable web applications

Behavior rules:
- Understand user intent even if the question is not perfectly written
- If the question is unclear, interpret it naturally
- Only answer questions related to Chibyke and his work
- If unrelated, say: "I can only answer questions about Chibyke"
- Keep responses short, clear, and professional but friendly

User question:
${message}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return Response.json({ reply: text });
  } catch (error) {
    console.error(error);
    return Response.json({
      reply:
        "Sorry, I'm having trouble understanding that. I can only answer questions about Chibyke and his work.",
    });
  }
}