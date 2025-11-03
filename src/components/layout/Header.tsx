
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/use-active-section';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/#portfolio' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/social-portfolio' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const headerContainerClass = hasMounted ? "w-3/4 mx-auto" : "container mx-auto px-4";

  return (
    <header className="fixed top-4 inset-x-0 z-50 pd-5">
      <div className={headerContainerClass}>
        <div className="glass-nav flex items-center justify-between h-14 rounded-full px-4">
          
          <Link href="/about" className="flex-shrink-0 ml-2">
              <Image 
                src="https://i.ibb.co/WW89WN2N/Homiz-Website-Design.png"
                alt="HOMIZ Media Logo"
                width={40}
                height={40}
                className="object-contain"
              />
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              // This new logic only checks the page URL, not the scroll position.
              const isActive = hasMounted && (pathname === link.href || pathname == "#"+link.href ) ;
              return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-foreground px-3 py-2 rounded-md",
                  "hover:bg-white/10 hover:backdrop-blur-sm",
                  { 'text-primary': isActive }
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
                )}
              </Link>
            )})}
          </nav>
          
          <div className="hidden md:flex items-center">
             <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="/#contact">Let's Talk</Link>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-8">
                     <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image 
                        src="https://i.ibb.co/WW89WN2N/Homiz-Website-Design.png"
                        alt="HOMIZ Media Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {[...navLinks, { name: 'Contact', href: '/#contact' }].map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} className="text-lg hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name === 'Contact' ? "Let's Talk" : link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
