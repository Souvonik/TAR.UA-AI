import DarkVeil from '@/components/DarkVeil';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <DarkVeil />

      <div className="absolute top-4 right-4 flex gap-4">
        <a
          href="https://github.com/Souvonik/TAR.UA-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
        >
          <img src="/icons8-github.svg" alt="GitHub" className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/souvonik-basu-0301911a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
        >
          <img src="/icons8-linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
        </a>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-8">TAR.UA</h1>
        <p className="text-xl mb-8">Light the spark of innovation</p>

        <Link to="/api-key">
          <Button size="lg">Try Now</Button>
        </Link>
      </div>
    </div>
  );
};
