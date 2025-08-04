import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const LandingPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.39/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <spline-viewer
        loading-anim-type="spinner-small-light"
        url="https://prod.spline.design/eTeo6rfhLvn6n1dv/scene.splinecode"
        className="absolute inset-0 w-full h-full z-0"
        style={{ left: '15%' }}
        events-target="global"
      ></spline-viewer>

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
        <h1 className="text-6xl font-bold mb-8"></h1>
        <p className="text-xl mb-8"></p>

        <Link to="/api-key">
          <Button size="lg">Try Now</Button>
        </Link>
      </div>
    </div>
  );
};
