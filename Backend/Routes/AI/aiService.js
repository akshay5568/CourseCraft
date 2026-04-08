import axios from "axios";

export const genrateMCQ = async (transcript) => {
  try {
    const res = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a helpful teacher who creates MCQs.",
          },
          {
            role: "user",
            content: `
Generate 5 MCQs from the content below, I can be send hindi transcript but you only have to send questions in English.
Return ONLY JSON in this format:

[
 {
   "question": "",
   "options": ["", "", "", ""],
   "answer": ""
 }
]

Content:
${transcript}
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.data;
    return data.choices[0].message.content;
  } catch (error) {
    console.log("Erorr",error);
  }
};
