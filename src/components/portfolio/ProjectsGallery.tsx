import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
    { id: 1, image: 'https://picsum.photos/seed/arch1/400/300', title: "Architectural Patterns", dataAiHint: 'architectural patterns' },
    { id: 2, image: 'https://picsum.photos/seed/car1/400/300', title: "Vintage Automobile", dataAiHint: 'vintage automobile' },
    { id: 3, image: 'https://picsum.photos/seed/mount1/400/300', title: "Mountain Landscapes", dataAiHint: 'mountain landscape' },
    { id: 4, image: 'https://picsum.photos/seed/arch2/400/300', title: "Modernist Structure", dataAiHint: 'modern architecture' },
    { id: 5, image: 'https://picsum.photos/seed/car2/400/300', title: "Classic Sportscar", dataAiHint: 'classic car' },
    { id: 6, image: 'https://picsum.photos/seed/mount2/400/300', title: "Dawn Peaks", dataAiHint: 'mountain sunrise' },
];

export function ProjectsGallery() {
    return (
        <div className="bg-gray-900/50 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Explore Your Projects</h3>
                <Button variant="ghost" className="text-white hover:bg-white/10">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {projects.map(project => (
                    <div key={project.id} className="group project-glow-effect rounded-lg">
                        <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                width={400} 
                                height={300} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                data-ai-hint={project.dataAiHint} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
