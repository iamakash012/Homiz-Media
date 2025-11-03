"use client";

import Image from 'next/image';

const clients = [
  { name: "Viva Boutique", logo: "https://picsum.photos/seed/viva/200/200" },
  { name: "DesignMe Interiors", logo: "https://i.ibb.co/LX2b1hJd/INSTACARD.jpg" },
  { name: "IFly Aviation", logo: "https://picsum.photos/seed/ifly/200/200" },
  { name: "Bombay Chicken", logo: "https://picsum.photos/seed/bombay/200/200" },
  { name: "Attitudes and Wesome", logo: "https://picsum.photos/seed/dupio/200/200" },
  { name: "Merraki Events", logo: "https://picsum.photos/seed/picoloo/200/200" },
  { name: "Rythym Dance Studio", logo: "https://picsum.photos/seed/abby/200/200" },
  { name: "Dexter Trading", logo: "https://picsum.photos/seed/abby/200/200" },
];

const ClientItem = ({ client }: { client: { name: string, logo: string } }) => {
  return (
    <div className="relative group flex items-center justify-center flex-shrink-0 h-96 px-8">
      
      <span className="client-name relative z-10 whitespace-nowrap">
        {client.name}
      </span>
      
      {/* ↓↓↓ FIX #1: Use -translate-x-1/2 and -translate-y-1/2 for centering ↓↓↓ */}
      <div className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        h-96 w-96 
        z-20
        pointer-events-none
      ">
        <Image
          src={client.logo}
          alt={`${client.name} background logo`}
          fill
          className="
            object-cover
            rounded-xl
            opacity-0
            scale-125 
            
            group-hover:opacity-50
            group-hover:scale-[.50]
            group-hover:-rotate-6
            
            transition-all duration-1000 ease-in-out
          "
          sizes="(max-width: 768px)"
        />
      </div>
    </div>
  );
};

export function ClientMarquee() {
  const extendedClients = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden marquee-container">
      <div className="flex marquee-content">
        {extendedClients.map((client, index) => (
          <ClientItem key={index} client={client} />
        ))}
      </div>
    </div>
  );
}
