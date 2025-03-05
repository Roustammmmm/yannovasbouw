import Navigation from "@/components/Navigation";
import { Building2, Hammer, DoorOpen, SunDim } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Nieuwbouw",
      description: "Wij bouwen uw droomwoning: energiezuinig, duurzaam en volledig afgestemd op uw wensen.",
      cta: "Ontdek de mogelijkheden",
      link: "/services/nieuwbouw"
    },
    {
      icon: Hammer,
      title: "Renovatie",
      description: "Wij renoveren uw woning met respect voor het originele karakter, gecombineerd met modern comfort en duurzame oplossingen.",
      cta: "Bekijk onze aanpak",
      link: "/services/renovatie"
    },
    {
      icon: DoorOpen,
      title: "Ramen & Deuren",
      description: "Verlaag uw energiefactuur met onze vakkundig geplaatste, energiezuinige ramen en deuren.",
      cta: "Lees meer",
      link: "/services/ramen-deuren"
    },
    {
      icon: SunDim,
      title: "Veranda's",
      description: "Creëer extra leefruimte vol licht. Wij ontwerpen en plaatsen de perfecte veranda, naadloos geïntegreerd met uw woning.",
      cta: "Bekijk projecten",
      link: "/services/verandas"
    }
  ];

  const testimonials = [
    {
      quote: "De veranda die Yannova heeft gebouwd is precies wat we wilden. Een echte aanwinst voor ons huis!",
      author: "Familie Peeters",
      service: "Veranda's"
    },
    {
      quote: "Zeer tevreden over de renovatie. Alles werd perfect afgewerkt en ze hielden zich aan de planning.",
      author: "Mark Janssens",
      service: "Renovatie"
    },
    {
      quote: "De nieuwe ramen hebben echt een verschil gemaakt in ons energieverbruik.",
      author: "Linda De Smet",
      service: "Ramen & Deuren"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-construction-800 mb-6">Onze Diensten</h1>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-construction-700 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-semibold text-construction-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="text-construction-600 text-center mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-auto text-construction-700 hover:text-construction-800"
                  onClick={() => window.location.href = service.link}
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-construction-800 mb-8">Onze Projecten</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3, 4].map((project) => (
                <CarouselItem key={project} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <img 
                        src="/placeholder.svg" 
                        alt={`Project ${project}`}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-construction-800 mb-8">Wat Onze Klanten Zeggen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <p className="text-construction-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-semibold text-construction-800">{testimonial.author}</p>
                    <p className="text-construction-500">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;