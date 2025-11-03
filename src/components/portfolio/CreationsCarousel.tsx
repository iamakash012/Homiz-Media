"use client";
import Image from 'next/image';

const Card = ({ className, image, children, dataAiHint }: { className?: string, image: string, children: React.ReactNode, dataAiHint: string }) => (
  <div className={`absolute w-[250px] h-[250px] rounded-3xl overflow-hidden shadow-2xl transform-gpu ${className}`}>
    <Image src={image} alt="Showcase" fill className="object-cover" data-ai-hint={dataAiHint}/>
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative h-full flex flex-col justify-between p-6 text-white">
        {children}
    </div>
  </div>
);

const MLogo = ({ className } : { className?: string}) => (
    <div className={`w-10 h-10 font-serif font-bold text-3xl border-2 border-white/80 flex items-center justify-center rounded-lg ${className}`}>M</div>
);

export function CreationsDisplay() {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
        <Card
            className="z-10 rotate-[-8deg] translate-x-[-40px] translate-y-[-20px]"
            image="https://picsum.photos/seed/creation1/500/500"
            dataAiHint="woman doing yoga pose"
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="w-8 h-px bg-white/80"></div>
                    <div className="w-4 h-px bg-white/80 mt-1.5"></div>
                </div>
                <MLogo />
            </div>
            <h3 className="text-3xl font-bold w-3/4">Unlock Your Potential</h3>
        </Card>
        <Card
            className="z-20 rotate-[4deg] translate-x-[50px] translate-y-[30px]"
            image="https://picsum.photos/seed/creation2/500/500"
            dataAiHint="woman meditating sunset"
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider">Glow From Within</p>
                    <p className="text-xs text-white/70">Mind & Body</p>
                </div>
                <div className="w-8 h-8 bg-white/90 rounded-full"></div>
            </div>
             <p className="text-xs self-end">Experience the calm</p>
        </Card>
         <Card
            className="z-0 rotate-[12deg] translate-x-[-20px] translate-y-[60px] opacity-70 scale-90"
            image="https://picsum.photos/seed/creation3/500/500"
            dataAiHint="woman stretching"
        >
           <div></div>
        </Card>
    </div>
  );
}
