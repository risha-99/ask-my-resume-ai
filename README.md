# [Chat-Bot](https://ask-my-resume-ai.vercel.app/) 

![Demo of Ask My Resume](./src/app/assest/resume-ask.gif)

This project is an interactive chatbot web application that allows users to ask questions about your resume and receive intelligent, AI-generated answers. The chatbot leverages OpenAI's GPT-3.5-turbo model to provide relevant and contextual responses.

## Features

- **Ask Anything:** Users can type questions related to your resume and get instant answers.
- **AI-Powered:** Uses OpenAI's GPT-3.5-turbo for natural language understanding and response generation.
- **Modern UI:** Built with React and styled using Tailwind CSS for a responsive and clean interface.

## Technologies Used

- **Next.js (v15.4.1):** React framework for server-side rendering and API routes.
- **React (v19.1.0):** For building the user interface.
- **OpenAI API (v5.10.1):** For generating chatbot responses.
- **Tailwind CSS (v4):** Utility-first CSS framework for styling.
- **TypeScript (v5):** Type-safe JavaScript for robust development.
- **ESLint:** For code linting and quality.
- **PostCSS:** For CSS processing.

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```

2. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```
     API_KEY=your_openai_api_key_here
     ```

3. **Run the development server:**
   ```sh
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `src/app/components/Chat.tsx` – Chat UI component.
- `src/app/api/chat/route.ts` – API route for handling chat requests.
- `public/` – Static assets.

## License

This project is private and for personal use.
