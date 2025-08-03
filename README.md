# TAR.UA - Your Pocket AI

TAR.UA is an innovative chat application that brings the power of AI to your fingertips. With its sleek dark-themed interface and advanced features, TAR.UA allows you to have meaningful conversations with an AI assistant, upload files for context-aware responses, and manage multiple conversations seamlessly.

<table>
  <tr>
    <td><img src="/public/Screenshot%202025-08-03%20122916.png" alt="TAR.UA Preview 1" width="400"/></td>
    <td><img src="/public/Screenshot%202025-08-03%20130751.png" alt="TAR.UA Preview 2" width="400"/></td>
  </tr>
</table>

## Features

- **AI-Powered Conversations**: Engage with an intelligent AI assistant powered by OpenRouter API
- **File Upload Support**: Upload text files to provide context for your questions
- **Multiple Conversations**: Manage multiple chat sessions with easy navigation
- **Dark/Light Theme**: Switch between dark and light modes based on your preference
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Real-time Typing Indicators**: See when the AI is processing your request

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router
- **UI Components**: Radix UI, Lucide React Icons
- **Form Handling**: React Hook Form, Zod validation
- **AI Integration**: OpenRouter API
- **Deployment**: Vercel (assumed based on modern React app practices)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or bun package manager
- An OpenRouter API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tar-ua.git
   cd tar-ua
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Create a `.env` file in the root directory and add your OpenRouter API key:
   ```env
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
bun build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
# or
bun preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── App.tsx         # Main application component
```

Key components include:
- `ChatArea`: Displays the conversation messages
- `ChatInput`: Handles user input and file uploads
- `ChatSidebar`: Manages conversation history
- `LightRays`: Visual effect component for the background

## Contributing

We welcome contributions to TAR.UA! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing the AI API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Lucide Icons](https://lucide.dev/) for the icon set

## Contact

For support or inquiries, please reach out to us on Twitter: [@TAR_UA.dev](https://twitter.com/TAR_UA.dev)
