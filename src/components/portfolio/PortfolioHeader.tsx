import { Bell, Heart, User } from 'lucide-react';

export function PortfolioHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-white/10 bg-black/10 backdrop-blur-sm">
      <div>
        <h1 className="text-lg font-semibold text-white">
          Homiz <span className="font-normal text-white/80">| Social Media Management & Creative Design</span>
        </h1>
      </div>
      <nav className="flex items-center space-x-6">
        <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
          <button className="text-white/70 hover:text-white"><User className="w-5 h-5" /></button>
          <button className="text-white/70 hover:text-white"><Heart className="w-5 h-5" /></button>
          <button className="text-white/70 hover:text-white"><Bell className="w-5 h-5" /></button>
        </div>
      </nav>
    </header>
  );
}
