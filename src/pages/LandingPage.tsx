import DarkVeil from '@/components/DarkVeil';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <DarkVeil />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-8">TAR.UA</h1>
        <p className="text-xl mb-8">Light the spark of innnovation</p>
        
        <Link to="/api-key">
          <Button size="lg">Try Now</Button>
        </Link>
      </div>
    </div>
  );
};