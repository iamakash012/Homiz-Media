import Image from "next/image";



  const portfolioItems = [
    {
      tag: "SOCIAL MEDIA",
      title: "Project Alpha",
      description: "Social Media Strategy & Analytics",
      image: "https://framerusercontent.com/images/kHcAMrZsxUQaQIsQJEssJbYVNQ.png",
      width: 600,
      height: 800,
    },
    {
      tag: "FINANCE",
      title: "Project Beta",
      description: "Data-Driven Portfolio Management",
      image: "https://framerusercontent.com/images/jWt34RwCKzmMNkR0hXUIM2QE.png",
      width: 800,
      height: 600,
    },
    {
      tag: "CAMPAIGN",
      title: "Project Gamma",
      description: "Creative Social Media Campaign",
      image: "https://framerusercontent.com/images/G0Y7utmP1mDBNdb4HsFsz8uac.jpg?scale-down-to=2048",
      width: 600,
      height: 600,
    },
    {
      tag: "INVESTMENT",
      title: "Project Delta",
      description: "Market Analysis & Investment Strategy",
      image: "https://framerusercontent.com/images/rRs2IWwLc5muLuu8n9z5Xpyrg.png",
      width: 800,
      height: 600,
    },
    {
      tag: "BRANDING",
      title: "Project Epsilon",
      description: "Complete Brand Identity Design",
      image: "https://framerusercontent.com/images/sncE0CfpHwd6tNvuBHlhMoO1Hs.png",
      width: 600,
      height: 800,
    },
    {
      tag: "WEB DEV",
      title: "Project Zeta",
      description: "Full-Stack Web Development",
      image: "https://framerusercontent.com/images/cMJgawAcxlqkF3mJvxDehL3CYY.png",
      width: 800,
      height: 600,
    },
  ];
export default function Project(){
    return (
        <>
                 {/* Portfolio Showcase */}
          <section id="portfolio" className="relative w-full py-20 md:py-24 overflow-hidden">
                    {/* Striped Background Overlay - This remains the same */}
                    <div 
                      className="absolute inset-0 -z-10"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0px, rgba(255, 255, 255, 0.07) 1px, transparent 1px, transparent 100px)'
                      }}
                    />
    
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio Showcase</h2>
                      
                      {/* CORRECTED: Changed md- to md: and lg- to lg: */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((item, index) => (
                          <div 
                            key={index}
                            className="group relative bg-gradient-to-r from-neutral-800 to-neutral-900 
                                      rounded-2xl overflow-hidden
                                      transition-all duration-300 ease-in-out hover:scale-105"
                          >
                            {/* Shine Effect Layer */}
                            <div 
                              className="absolute top-0 -left-full h-full w-1/2 z-10
                                        bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        transition-all duration-700 ease-in-out group-hover:left-full"
                              style={{ transform: 'skewX(-25deg)' }}
                            ></div>
                            
                            {/* Image and Banner Container */}
                            <div className="relative overflow-hidden z-20">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                                className="w-full h-auto object-cover aspect-[4/3] 
                                          transition-transform duration-500 ease-in-out group-hover:scale-110"
                              />
                              {/* 'View Project' Banner Overlay */}
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg tracking-wider">
                                  View Project
                                </span>
                              </div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="relative p-5 z-20">
                              <h3 className="font-bold text-lg text-white">{item.title}</h3>
                              <p className="text-sm text-neutral-400 mt-1">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
            </section>
          </>
    )
}