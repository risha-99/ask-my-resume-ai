import OpenAI from "openai";

const apiKey = process.env.API_KEY;
const openAI = new OpenAI({ apiKey });

export async function POST(request: Request, response: Response) {
    const { userAskedQuestion } = await request.json();
    try {
        const response = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userAskedQuestion }],
            max_tokens: 1000,
        });
        const reply = response.choices[0].message.content;
        return new Response(JSON.stringify(reply), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
    }

}