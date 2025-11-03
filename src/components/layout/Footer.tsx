import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer 
      className="rounded-t-3xl overflow-hidden mt-24"
      style={{
        background: 'radial-gradient(ellipse at top, hsl(0, 0%, 12%), hsl(0, 0%, 5%))'
      }}
    >
      <div className="container mx-auto px-4 py-12 space-y-8">

        {/* Top CTA Section - NOW IN A BOX */}
        <div 
          className="bg-black/20 border border-neutral-800 rounded-2xl p-12 text-center"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 100px)'
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto">
            Your brand has a story—let’s make the world listen.
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-xl mx-auto">
            Got questions, project ideas, or just want to say hi? We're all ears!
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-base px-8 py-6 shadow-lg shadow-red-500/20 transition-transform duration-300 hover:scale-105">
            <Link href="#contact">Let's Collaborate</Link>
          </Button>
        </div>

        {/* Main Footer Content with a 2-column primary grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Address Details Box */}
          <div 
            className="bg-black/20 border border-neutral-800 rounded-2xl p-8 space-y-4"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 100px)'
            }}
          >
            <p><strong className="font-semibold text-white">Address:</strong> 101, Gorewada, nagpur</p>
            <p><strong className="font-semibold text-white">Email:</strong> admin@homizmedia.com</p>
            <p><strong className="font-semibold text-white">Phone:</strong> +91 9211420420</p>
            <p><strong className="font-semibold text-white">Business Hours:</strong> Monday - Friday - 9am to 5pm</p>
          </div>

          {/* Column 2: Contains the nested grid for links */}
          <div 
            className="bg-black/20 border border-neutral-800 rounded-2xl p-8"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 100px)'
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><Link href="#" className="hover:text-white text-red-500 font-semibold">HOME</Link></li>
                  <li><Link href="#" className="hover:text-white">PROJECTS</Link></li>
                  <li><Link href="#" className="hover:text-white">ABOUT</Link></li>
                  <li><Link href="#" className="hover:text-white">SERVICES</Link></li>
                  <li><Link href="#" className="hover:text-white">CONTACT</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                  <li><Link href="#" className="hover:text-white">PRIVACY POLICY</Link></li>
                </ul>
                <h4 className="font-bold text-white mb-4">Social Medias</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li><Link href="#" className="hover:text-white">INSTAGRAM</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center text-sm border-t border-neutral-800 pt-6">
          <p className="text-neutral-500">© {new Date().getFullYear()} Homiz Media. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-neutral-400 hover:text-white">INSTAGRAM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}