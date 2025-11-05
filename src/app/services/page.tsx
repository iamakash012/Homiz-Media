import { ServicesSection } from "@/components/ServicesCarousel";

export default function Services(){
    return (
        <>
            <div className="w-full">
              {/* This section creates the black background and positioning context */}
              <section id="services" className="w-full py-20 md:py-24 relative bg-black text-white">
                
                {/* This div creates the static vertical stripes for the whole section */}
                <div 
                  className="absolute inset-0 z-0 opacity-30" // Use z-0, not -z-10
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0px, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 100px)'
                  }}
                />
            
                {/* This container holds your content and sits on top of the background */}
                <div className="relative z-10 container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
                  <ServicesSection />
                </div>
              </section>
            </div>
        </>
    )
}