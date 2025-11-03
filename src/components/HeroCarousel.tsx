"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "https://picsum.photos/seed/hero1/1920/1080",
    dataAiHint: 'fashion runway',
    headline: "Timeless Elegance Redefined",
    subheadline: "Discover our new collection of bespoke bridal wear",
    buttonText: "Shop Bridal",
    href: "/shop"
  },
  {
    image: "https://picsum.photos/seed/hero2/1920/1080",
    dataAiHint: 'luxury fabric',
    headline: "The Art of Formal Wear",
    subheadline: "Exquisite craftsmanship for your most memorable occasions",
    buttonText: "Explore Formals",
    href: "/shop"
  },
  {
    image: "https://picsum.photos/seed/hero3/1920/1080",
    dataAiHint: 'haute couture',
    headline: "Luxury Pret-à-Porter",
    subheadline: "Effortless style meets sophisticated design",
    buttonText: "View Pret",
    href: "/shop"
  }
]

export function HeroCarousel() {
  return (
    <div className="relative">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  priority={index === 0}
                  data-ai-hint={slide.dataAiHint}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl drop-shadow-md mb-4">{slide.headline}</h1>
                  <p className="text-lg md:text-xl max-w-2xl mb-8">{slide.subheadline}</p>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                    <Link href={slide.href}>{slide.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <CarouselPrevious className="static translate-y-0 text-white bg-transparent border-white hover:bg-white hover:text-primary" />
            <CarouselNext className="static translate-y-0 text-white bg-transparent border-white hover:bg-white hover:text-primary" />
        </div>
      </Carousel>
    </div>
  )
}
