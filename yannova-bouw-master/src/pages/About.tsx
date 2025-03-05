import Navigation from "@/components/Navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Quote } from "lucide-react";
import Map from "@/components/Map";

const About = () => {
  const timelineEvents = [
    { year: "2013", event: "Oprichting Yannova Bouw door Ruslan" },
    { year: "2015", event: "Uitbreiding specialisatie in veranda's" },
    { year: "2018", event: "100ste tevreden klant" },
    { year: "2020", event: "Uitbreiding werkgebied" }
  ];

  const testimonials = [
    {
      quote: "De veranda die Yannova voor ons heeft gebouwd is precies wat we wilden. Perfect vakmanschap!",
      author: "Familie Peeters, Mechelen"
    },
    {
      quote: "Zeer tevreden over de professionele aanpak en het eindresultaat van onze ramen en deuren.",
      author: "Mark & Anna, Keerbergen"
    },
    {
      quote: "Van begin tot eind een uitstekende service. Ruslan denkt echt mee met de klant.",
      author: "Familie De Smet, Putte"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-construction-800 mb-6">Over Ons</h1>
        
        {/* Main Content */}
        <div className="prose max-w-none mb-16">
          <p className="text-lg text-construction-600 mb-8">
            Yannova Bouw, opgericht door Ruslan, is al meer dan een decennium een begrip in de regio 
            Mechelen, Keerbergen, Putte, Heist-op-den-Berg, Bonheiden en Haacht. Gedreven door een 
            passie voor het creëren van licht en ruimte, specialiseren we ons in het ontwerpen en 
            plaatsen van op maat gemaakte veranda's, ramen en deuren die perfect aansluiten bij uw 
            woning en levensstijl.
          </p>

          <p className="text-lg text-construction-600 mb-8">
            Van de uiterst precieze opmeting door Ruslan zelf tot de vlekkeloze plaatsing door ons 
            ervaren team, bij Yannova Bouw nemen we het volledige traject in eigen handen. Zo 
            garanderen we een naadloze afwerking en een resultaat dat uw verwachtingen overtreft.
          </p>

          <p className="text-lg text-construction-600 mb-6">
            Onze expertise ligt in:
          </p>
          <ul className="list-disc pl-6 mb-8 text-construction-600 space-y-3">
            <li className="text-lg">Ontwerp en Plaatsing van Veranda's, Ramen en Deuren</li>
            <li className="text-lg">Nieuwbouwprojecten</li>
            <li className="text-lg">Renovatie en verbouwingen</li>
            <li className="text-lg">Duurzame bouwoplossingen</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-construction-800 mb-4">Veranda's: Uw Extra Leefruimte</h3>
            <p className="text-lg text-construction-600">
              Vergroot uw leefruimte en geniet het hele jaar door van het buitenleven. Een veranda 
              biedt niet alleen extra ruimte, maar creëert ook een naadloze verbinding tussen uw 
              woning en tuin, waarbij u optimaal kunt genieten van natuurlijk licht en een prachtig 
              uitzicht in alle seizoenen.
            </p>
          </div>
        </div>

        {/* Team Photos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-construction-800 mb-8">Ons Team</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/placeholder.svg" 
              alt="Yannova Bouw Team" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold mb-2">Het Yannova Team</h3>
              <p className="text-construction-600">Ons ervaren team van vakspecialisten</p>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-construction-800 mb-8">Onze Realisaties</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Veranda project ${index}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-construction-800 mb-8">Onze Geschiedenis</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4 animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-construction-800">{event.year}</h3>
                  <p className="text-construction-600">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-construction-800 mb-8">Wat Onze Klanten Zeggen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-construction-600 mb-4 italic">{testimonial.quote}</p>
                <p className="text-construction-800 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-construction-800 mb-8">Ons Werkgebied</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-semibold text-construction-800 mb-4">
            Klaar voor uw Droomproject?
          </h2>
          <p className="text-lg text-construction-600 mb-8">
            Contacteer ons voor een vrijblijvend gesprek over uw wensen en mogelijkheden
          </p>
          <Button 
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Vraag een Vrijblijvende Offerte Aan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
