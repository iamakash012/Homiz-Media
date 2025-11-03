"use client";

import React, { useRef } from 'react';
import { Instagram, Linkedin, Twitter, Briefcase, BarChart2, Megaphone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Reusable Service Card Component (from VideoServicesGrid) ---
const ServiceCard = ({ title, description, imageUrl, className, children }) => {
  return (
    <div
      className={`
        relative group rounded-3xl p-8 overflow-hidden
        border border-neutral-800 bg-neutral-900/50
        transition-all duration-500 ease-in-out
        hover:border-neutral-700
        ${className}
      `}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} background`}
          className="
            absolute inset-0 w-full h-full
            object-cover z-0
            opacity-10
            group-hover:opacity-20
            transition-opacity duration-500 ease-in-out
          "
        />
      )}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
        {description && <p className="text-neutral-400 max-w-sm text-sm md:text-base">{description}</p>}
        {children && <div className="mt-auto">{children}</div>}
      </div>
    </div>
  );
};

// --- Video Services Grid Component ---
const VideoServicesGrid = () => {
  return (
    <section className="bg-[#111111] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experienced in Various Video Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            className="md:col-span-2 min-h-[300px]"
            title="YouTube Videos"
            description="Elevate your online presence with our YouTube video expertise. We craft compelling long-form content designed to inform, entertain, and engage your audience effectively."
          />
          <ServiceCard
            className="min-h-[300px]"
            title="Documentaries"
            imageUrl="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop"
          />
          <ServiceCard
            className="md:row-span-2 min-h-[400px] md:min-h-[612px]"
            title="Shorts & Reels"
            imageUrl="https://images.unsplash.com/photo-1550155845-394549a81878?q=80&w=1974&auto=format&fit=crop"
          />
          <ServiceCard
            className="min-h-[300px]"
            title="Google & Meta Ads"
            imageUrl="https://images.unsplash.com/photo-1524121160089-9e422e1858a9?q=80&w=2070&auto=format&fit=crop"
          />
          <ServiceCard
            className="min-h-[300px]"
            title="Commercials and Advertisements"
            imageUrl="https://images.unsplash.com/photo-1582882195754-3c5e887a0f3d?q=80&w=1969&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

// --- Basic UI Component Placeholders ---
const Button = ({ children, variant, size, className }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeStyle = size === 'lg' ? "h-11 px-8" : "h-10 px-4 py-2";
  const variantStyle = variant === 'outline' 
    ? "border border-input hover:bg-accent hover:text-accent-foreground" 
    : "bg-primary text-primary-foreground hover:bg-primary/90";
  return <button className={`${baseStyle} ${sizeStyle} ${variantStyle} ${className}`}>{children}</button>;
};

const Input = (props) => <input {...props} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50" />;
const Textarea = (props) => <textarea {...props} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50" />;

// --- Main Page Component ---
export default function Home() {
  const portfolioItems = [
    { title: "Project Alpha", category: "Social Media Strategy", image: "https://picsum.photos/seed/proj1/600/800", width: 600, height: 800 },
    { title: "Project Beta", category: "Portfolio Management", image: "https://picsum.photos/seed/proj2/800/600", width: 800, height: 600 },
    { title: "Project Gamma", category: "Social Media Campaign", image: "https://picsum.photos/seed/proj3/600/600", width: 600, height: 600 },
    { title: "Project Delta", category: "Investment Strategy", image: "https://picsum.photos/seed/proj4/800/600", width: 800, height: 600 },
    { title: "Project Epsilon", category: "Brand Identity", image: "https://picsum.photos/seed/proj5/600/800", width: 600, height: 800 },
    { title: "Project Zeta", category: "Web Development", image: "https://picsum.photos/seed/proj6/800/600", width: 800, height: 600 },
  ];

  const services = [
    { icon: <Briefcase className="h-10 w-10 text-primary" />, title: "Portfolio Management", description: "Strategic asset allocation and risk management." },
    { icon: <BarChart2 className="h-10 w-10 text-primary" />, title: "Social Media Strategy", description: "Comprehensive social media planning and content creation." },
    { icon: <Megaphone className="h-10 w-10 text-primary" />, title: "Digital Campaigns", description: "End-to-end execution of viral marketing campaigns." },
  ];
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex flex-col bg-black text-white">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[100vh] flex flex-col justify-center">
        {/* Placeholder for ParticleBackground */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 relative z-10 flex flex-col items-center">
           {/* Placeholder for GlowingCube */}
           <div className="w-24 h-24 bg-primary/20 rounded-lg mb-4"></div>
           <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight flex justify-center flex-wrap mt-8">
            {'HOMIZ Media'.split('').map((char, index) => (
              <span key={index} className="transition-all duration-300 ease-in-out hover:text-primary hover:scale-125 cursor-pointer">{char === ' ' ? ' ' : char}</span>
            ))}
          </h1>
          <div className="mt-2 text-lg md:text-2xl text-primary font-medium h-8">
            {/* Placeholder for TypingEffect */}
            <span>Creative Digital Agency</span>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground font-poppins text-center">
            Crafting innovative investment strategies and viral social media campaigns that drive growth and engagement.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#portfolio"><Button size="lg" className="shine-effect">View My Work</Button></a>
            <a href="#contact"><Button size="lg" variant="outline" className="shine-effect">Hire Me Now</Button></a>
          </div>
        </motion.div>
      </section>

      {/* Kinetic Text Section */}
      <section className="w-full py-20 md:py-24">
         {/* Placeholder for KineticText */}
         <div className="text-center text-2xl font-bold">Kinetic Text Placeholder</div>
      </section>

      {/* Clients Worked With */}
      <section className="w-full pt-20 pb-20 md:pb-24">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Clients I've Worked With</h2>
           {/* Placeholder for ClientMarquee */}
           <div className="text-center text-lg">Client Marquee Placeholder</div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <div className="w-full">
        <section id="services" className="w-full py-20 md:py-24 relative overflow-hidden">
          <video src="https://pouch.jumpshare.com/preview/Nzis74wWkukqq7uGX1QTPJc_weAR0prNVpAYui1bNmgAD7w9oqBb-zPYcqGIsdeoi_8lvwuMjEpMlkOX_JmCvlehr8Gf2CF79-jHJ079OmLG4ss5AtfANut7SUxW5FlQv_VnXGB3dXU9gbw_OhEWKm6yjbN-I2pg_cnoHs_AmgI.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80" />
          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
            {/* Placeholder for ServicesCarousel */}
            <div className="text-center text-lg">Services Carousel Placeholder</div>
          </div>
        </section>
      </div>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio Showcase</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 break-inside-avoid">
                 <img src={item.image} alt={item.title} width={item.width} height={item.height} className="w-full h-auto object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-primary font-semibold">{item.category}</p>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Services Grid Section */}
      <VideoServicesGrid />

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
          {/* Basic HTML Contact Form */}
          <form className="space-y-4">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="flex justify-center items-center gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={32} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={32} /></a>
            <a href="https://www.instagram.com/homiz.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={32} /></a>
            <a href="https://api.whatsapp.com/send?phone=9156260436" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.31 20.55C8.75 21.33 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 20.15C10.51 20.15 9.01 19.68 7.76 18.8L7.31 18.53L4.92 19.22L5.64 16.91L5.35 16.44C4.5 15.08 4.02 13.53 4.02 11.91C4.02 7.55 7.63 3.94 12.04 3.94C14.2 3.94 16.21 4.79 17.76 6.34C19.31 7.89 20.16 9.9 20.16 11.91C20.16 16.27 16.45 20.15 12.04 20.15M17.43 14.41C17.16 14.28 15.96 13.69 15.71 13.59C15.47 13.5 15.28 13.5 15.09 13.77C14.91 14.04 14.31 14.73 14.12 14.92C13.93 15.11 13.74 15.15 13.47 15.02C13.2 14.88 12.04 14.49 10.73 13.25C9.71 12.29 9.02 11.12 8.87 10.85C8.73 10.58 8.86 10.45 9 10.31C9.13 10.18 9.29 9.99 9.46 9.82C9.63 9.65 9.71 9.53 9.85 9.26C9.99 8.99 9.9 8.76 9.81 8.57C9.72 8.38 9.17 7.08 8.92 6.51C8.68 5.94 8.43 6.01 8.24 6.01C8.04 6.01 7.85 5.99 7.66 5.99C7.47 5.99 7.18 6.07 6.94 6.34C6.7 6.61 6.13 7.15 6.13 8.3C6.13 9.45 6.98 10.54 7.12 10.73C7.26 10.92 9.12 13.75 11.92 14.97C12.68 15.31 13.28 15.49 13.78 15.63C14.44 15.81 14.99 15.77 15.42 15.72C15.91 15.66 17.11 15.03 17.35 14.46C17.59 13.89 17.59 13.41 17.5 13.28C17.41 13.14 17.27 13.04 17.43 14.41Z" /></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

