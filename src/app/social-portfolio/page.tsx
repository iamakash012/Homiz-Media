
"use client";

import { CreationsDisplay } from "@/components/portfolio/CreationsDisplay";
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { ProjectsGallery } from "@/components/portfolio/ProjectsGallery";
import { StoriesDisplay } from "@/components/portfolio/StoriesDisplay";
import { ParticleBackground } from "@/components/ParticleBackground";

const DeskAccessory = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`absolute ${className}`}>
    {children}
  </div>
);

export default function SocialPortfolioPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black p-4 overflow-hidden">
      <ParticleBackground />
      {/* Desk Accessories */}
      <DeskAccessory className="bottom-1/4 left-20 hidden lg:block">
        <div className="relative">
          <div className="w-24 h-32 bg-white/5 rounded-lg shadow-lg transform -rotate-6 border border-white/10">
             <div className="p-2">
                <p className="text-xs font-bold text-gray-400">Q4 GOALS</p>
                <ul className="text-xxs text-gray-500 list-disc list-inside mt-1 space-y-0.5">
                  <li>Launch campaign</li>
                  <li>Finalize designs</li>
                  <li>Onboard new client</li>
                </ul>
             </div>
          </div>
           <div className="absolute -top-4 -right-4 w-8 h-12 bg-gray-700/50 rounded-sm transform rotate-12 shadow-inner border border-white/10"></div>
        </div>
      </DeskAccessory>

      <DeskAccessory className="top-1/4 left-1/4 hidden xl:block">
        <div className="relative coffee-cup w-16 h-16 rounded-full flex items-center justify-center border border-white/10 bg-white/5">
            <div className="w-12 h-12 rounded-full bg-yellow-900/30"></div>
            <div className="absolute right-[-10px] top-3 w-4 h-8 border-2 border-gray-500 rounded-full border-l-transparent"></div>
            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 h-10 w-10 coffee-steam">
                <span className="text-white text-3xl" style={{'--ml': '10px', '--delay': '0s'} as React.CSSProperties}>·</span>
                <span className="text-white text-3xl" style={{'--ml': '-10px', '--delay': '1s'} as React.CSSProperties}>·</span>
                <span className="text-white text-3xl" style={{'--ml': '20px', '--delay': '2s'} as React.CSSProperties}>·</span>
            </div>
        </div>
      </DeskAccessory>
      
      <DeskAccessory className="bottom-1/4 right-32 hidden xl:block">
        <div className="relative">
            <div className="w-56 h-8 bg-gray-800/50 rounded-full shadow-inner border border-white/10"></div>
            <div className="w-56 h-8 bg-gray-700/50 rounded-full mt-2 border border-white/10"></div>
        </div>
      </DeskAccessory>

      <DeskAccessory className="top-1/3 right-48 hidden lg:block">
         <div className="relative plant-pot w-20 h-20 rounded-t-full rounded-b-md transform -rotate-3 shadow-lg bg-gray-700/60 border border-white/10">
            <div className="absolute -top-12 left-0 w-12 h-16 plant-leaf rounded-full transform rotate-45 origin-bottom-left bg-green-500/30"></div>
            <div className="absolute -top-16 left-1/2 w-16 h-20 plant-leaf rounded-full transform -rotate-35 origin-bottom-center bg-green-500/40"></div>
         </div>
      </DeskAccessory>


      {/* iMac */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative w-full aspect-[16/10] imac-screen z-10">
          <div className="w-full h-full bg-black/10 rounded-3xl overflow-y-auto flex flex-col backdrop-blur-xl border border-white/10">
            <PortfolioHeader />
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white">
              <section className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Carousels</h2>
                <CreationsDisplay />
              </section>
              <section className="flex flex-col">
                 <h2 className="text-2xl font-bold mb-4 text-center">Instagram Stories</h2>
                <div className="flex-1">
                  <StoriesDisplay />
                </div>
              </section>
            </main>
            <footer className="p-8">
              <ProjectsGallery />
            </footer>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="imac-stand"></div>
          <div className="imac-base"></div>
        </div>
      </div>
    </div>
  );
}

    