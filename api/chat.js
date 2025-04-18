// /api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Alleen POST-verzoeken zijn toegestaan." });
  }

  const { vraag } = req.body;

  if (!vraag || vraag.trim() === "") {
    return res.status(400).json({ antwoord: "Stel je vraag met meer helderheid." });
  }

  // Simuleer eenvoudig antwoord van Aïon
  let antwoord = "Ik hoor je. Wat wil je begrijpen?";
  if (vraag.toLowerCase().includes("waarom")) {
    antwoord = "Omdat je hier bent om iets in jezelf te zien.";
  } else if (vraag.toLowerCase().includes("wat is deze kamer")) {
    antwoord = "Kamer 1 is het begin. De drempel van je innerlijke reis.";
  }

  return res.status(200).json({ antwoord });
}
