
import Image from 'next/image';
import { Building, Target, Users, Lightbulb, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import img1 from "../../images/img1.jpg";

const AboutPage = () => {
  const teamMembers = [
    { name: 'Akash Mahato', role: 'Founder & CEO', image: 'https://picsum.photos/seed/team1/400/400', dataAiHint: 'professional headshot' },
    { name: 'Kaif Ansari', role: 'Lead Strategist', image: 'https://picsum.photos/seed/team2/400/400', dataAiHint: 'business portrait' },
    { name: 'Sohail Sheikh', role: 'Creative Director', image: 'https://picsum.photos/seed/team3/400/400', dataAiHint: 'designer photo' },
  ];

  const values = [
    { icon: <Lightbulb className="w-8 h-8 text-primary" />, title: 'Innovation', description: 'We push boundaries and challenge the status quo to deliver groundbreaking results.' },
    { icon: <Users className="w-8 h-8 text-primary" />, title: 'Collaboration', description: 'We believe the best results come from strong partnerships and open communication.' },
    { icon: <Target className="w-8 h-8 text-primary" />, title: 'Excellence', description: 'We are committed to the highest standards of quality in everything we do.' },
  ];

  const contactDetails = [
    { icon: <Phone className="w-10 h-10 text-primary" />, title: 'Contact Number', detail: '9518798588' },
    { icon: <Mail className="w-10 h-10 text-primary" />, title: 'Email', detail: 'wonderingvibes39@gmail.com' },
    { icon: <MapPin className="w-10 h-10 text-primary" />, title: 'Address', detail: 'Plot no 198, Vishaka Society, Near Nirmal Nagar, Gorewada, Nagpur, 440013' },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex justify-center items-center py-12 mt-12">
  <div className="relative w-[80%] md:w-[60%] lg:w-[40%] aspect-video rounded-2xl overflow-hidden shadow-lg">
    <video
      src="/videos/about.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover brightness-105"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
</section>


      {/* About Content */}
      <section className="py-20 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground">About HOMIZ Media</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a dynamic team of portfolio managers and social media strategists dedicated to amplifying your brand's voice and maximizing its reach.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center"><Target className="w-8 h-8 mr-4 text-primary" /> Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To empower brands with data-driven social media strategies and robust portfolio management, fostering sustainable growth and creating lasting impact in the digital landscape. We translate your vision into measurable success.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center"><Lightbulb className="w-8 h-8 mr-4 text-primary" /> Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To be the leading force in digital brand evolution, pioneering innovative techniques that redefine what's possible in portfolio growth and social engagement. We envision a future where every brand can achieve its full potential.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={img1}
                alt="Team collaborating"
                fill
                className="object-cover"
                data-ai-hint="business meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((value, index) => (
              <div key={index} className="p-8 border border-border rounded-xl">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    data-ai-hint={member.dataAiHint}
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-lg">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground max-w-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="py-20 md:py-32 text-center bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Brand?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's create something amazing together. Get in touch with us today to discuss your project.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/#contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
