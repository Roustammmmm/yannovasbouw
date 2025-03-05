import { ArrowRight, Building2, Hammer, DoorOpen, Star, Phone, Mail, MapPin, CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Moderne gebouwgevel van Yannova bouwproject met professionele afwerking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="animate-fadeIn max-w-3xl">
            <div className="inline-block bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg mb-4">
              <p className="text-lg md:text-xl text-[#33C3F0]">
                Specialist in bouw, renovatie, ramen en deuren
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Transformeer uw ruimte met vakmanschap en visie
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Met meer dan 10 jaar ervaring zijn wij uw betrouwbare partner voor alle bouw- en renovatieprojecten. Van kleine renovaties tot complete verbouwingen.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-construction-700 hover:bg-construction-800 transition-colors"
              >
                Vraag een offerte aan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-[#33C3F0]/20 hover:bg-[#33C3F0]/30 backdrop-blur-sm border border-[#33C3F0]/30 transition-all duration-300 group"
              >
                Bekijk onze projecten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-construction-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vakmanschap",
                description: "Meer dan 10 jaar ervaring in de bouwsector",
                icon: CheckCircle2,
              },
              {
                title: "Kwaliteit",
                description: "Gebruik van hoogwaardige materialen en technieken",
                icon: Star,
              },
              {
                title: "Service",
                description: "Persoonlijke begeleiding van begin tot eind",
                icon: Phone,
              },
            ].map((usp, index) => (
              <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-lg shadow-sm">
                <usp.icon 
                  className="h-8 w-8 text-[#33C3F0] animate-pulse-subtle flex-shrink-0 shadow-[0_0_15px_rgba(51,195,240,0.5)]" 
                />
                <div>
                  <h3 className="text-lg font-semibold text-construction-800 mb-2">{usp.title}</h3>
                  <p className="text-construction-600">{usp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-[#D3E4FD]/30 to-[#33C3F0]/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-construction-600 max-w-2xl mx-auto">
              Van nieuwbouw tot renovatie, wij bieden complete oplossingen voor al uw bouwprojecten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nieuwbouw & Verbouw",
                description: "Van complete nieuwbouwprojecten tot uitbouwen en verbouwingen. Wij realiseren uw droomproject met oog voor detail en kwaliteit.",
                items: ["Nieuwbouw", "Verbouw", "Uitbouw", "Aanbouw"],
                icon: Building2,
              },
              {
                title: "Renovatie",
                description: "Specialist in het renoveren van woningen en bedrijfspanden. Van kleine renovaties tot complete transformaties.",
                items: ["Badkamers", "Keukens", "Dakkapellen", "Vloeren"],
                icon: Hammer,
              },
              {
                title: "Ramen | Deuren | Veranda's",
                description: "Hoogwaardige ramen en deuren voor optimaal comfort en veiligheid. Vakkundige montage en uitstekende after-service.",
                items: ["Kunststof kozijnen", "Aluminium kozijnen", "Veiligheidsdeuren", "Schuifpuien"],
                icon: DoorOpen,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-white/90 to-[#D3E4FD]/20 backdrop-blur-sm border border-[#33C3F0]/10 shadow-sm hover:shadow-[0_8px_30px_rgb(51,195,240,0.2)] transition-all duration-300 group rounded-2xl overflow-hidden"
              >
                <CardHeader className="text-center pb-2">
                  <div className="rounded-full bg-gray-100/80 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-200/80 transition-colors">
                    <service.icon className="h-8 w-8 text-gray-600 group-hover:text-gray-800 transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-6 text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#33C3F0] rounded-full mr-2 animate-pulse-subtle shadow-[0_0_10px_rgba(51,195,240,0.5)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom kiezen voor ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
              Waarom kiezen voor Yannova-Bouw?
            </h2>
            <p className="text-lg text-construction-600 max-w-2xl mx-auto">
              Als ervaren specialist in bouw, renovatie en schrijnwerk bieden wij oplossingen die perfect aansluiten bij uw wensen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618090584176-7132b9911657?auto=format&fit=crop&q=80" 
                alt="Professioneel team van Yannova-Bouw aan het werk" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Persoonlijke aanpak",
                  description: "Wij luisteren naar uw specifieke wensen en werken samen met u aan het perfecte eindresultaat.",
                },
                {
                  title: "Kwaliteitsmaterialen",
                  description: "Wij werken uitsluitend met hoogwaardige materialen voor een duurzaam resultaat.",
                },
                {
                  title: "Vakkundige uitvoering",
                  description: "Ons team bestaat uit ervaren vakmensen met oog voor detail en kwaliteit.",
                },
                {
                  title: "Complete ontzorging",
                  description: "Van ontwerp tot realisatie, wij nemen alle zorgen uit handen voor een zorgeloos bouwproces.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-2 h-2 bg-[#33C3F0] rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-all duration-300"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-construction-800 mb-2">{item.title}</h3>
                    <p className="text-construction-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-construction-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
              Wat onze klanten zeggen
            </h2>
            <p className="text-lg text-construction-600 max-w-2xl mx-auto">
              De mening van onze klanten is voor ons het belangrijkst. Hier zijn enkele ervaringen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Greet Vandenberg",
                location: "Keerbergen",
                quote: "De renovatie van onze badkamer is perfect uitgevoerd. Het team was punctueel, professioneel en heeft alles netjes opgeleverd. Een aanrader!",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
              },
              {
                name: "Jan Peters",
                location: "Mechelen",
                quote: "Yannova heeft onze veranda compleet vernieuwd. Het resultaat heeft onze verwachtingen overtroffen. Duidelijke communicatie en zeer vakkundig werk.",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200"
              },
              {
                name: "Sophie Martens",
                location: "Tremelo",
                quote: "We zijn ontzettend blij met onze nieuwe ramen en deuren. Het verschil in isolatie is enorm merkbaar. Professioneel team met oog voor detail.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-[#33C3F0]/20 shadow-sm hover:shadow-md transition-all group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center pb-6">
                    <div className="mb-4 relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#33C3F0] p-0.5 relative z-10">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#33C3F0]/10 rounded-full -z-10 animate-pulse-subtle"></div>
                    </div>
                    
                    <div className="relative">
                      <MessageSquare className="w-10 h-10 text-[#33C3F0]/20 absolute -top-2 -left-2" />
                      <p className="text-construction-600 mb-4 italic relative">"{testimonial.quote}"</p>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-construction-800">{testimonial.name}</h4>
                    <p className="text-sm text-construction-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-800 mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-lg text-construction-600 max-w-2xl mx-auto">
              Antwoorden op de meest gestelde vragen over onze diensten
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Wat is de doorlooptijd van een renovatieproject?",
                  answer: "De doorlooptijd hangt af van de omvang van het project. Voor kleine renovaties zoals een badkamer rekenen we doorgaans 2-3 weken. Voor grotere projecten zoals een complete woningrenovatie kan dit oplopen tot 3-6 maanden. We stellen altijd een gedetailleerde planning op voordat we beginnen."
                },
                {
                  question: "Verzorgen jullie ook de benodigde vergunningen?",
                  answer: "Ja, als onderdeel van onze complete service kunnen wij de aanvraag van de benodigde vergunningen voor u verzorgen. We bespreken dit tijdens de offerte-fase zodat u precies weet wat er bij komt kijken."
                },
                {
                  question: "Welke garantie bieden jullie op de werkzaamheden?",
                  answer: "Wij bieden standaard 10 jaar garantie op al onze werkzaamheden. Voor specifieke materialen gelden de garantievoorwaarden van de fabrikant. We werken uitsluitend met hoogwaardige materialen van gerenommeerde merken."
                },
                {
                  question: "Kunnen jullie een totaalconcept aanbieden, inclusief ontwerp?",
                  answer: "Zeker! We bieden complete totaalconcepten aan, van ontwerp tot realisatie. We werken samen met ervaren architecten en interieurontwerpers om uw visie werkelijkheid te maken. Zo heeft u één aanspreekpunt voor het hele project."
                },
                {
                  question: "Wat is de gemiddelde levertijd voor ramen en deuren?",
                  answer: "De gemiddelde levertijd voor ramen en deuren is 6-8 weken na het definitief maken van de bestelling. Deze termijn kan variëren afhankelijk van het materiaal, de specificaties en de drukte bij de fabrikant. We houden u gedurende het proces op de hoogte."
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 shadow-sm bg-white">
                  <AccordionTrigger className="text-left text-construction-800 font-medium py-4 hover:text-[#33C3F0] transition-colors">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#33C3F0]" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-construction-600 py-4 px-6 border-t">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-construction-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Neem Contact Op
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Heeft u een project in gedachten? Wij denken graag met u mee en maken een vrijblijvende offerte op maat.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+32 489 96 00 01</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>Info@yannova.be</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>Molenstraat 1A - 3140 Keerbergen</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#33C3F0] mb-6">
                Offerte Aanvragen
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Naam"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-700"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-700"
                />
                <textarea
                  placeholder="Uw bericht"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-construction-700"
                ></textarea>
                <Button className="w-full bg-construction-700 hover:bg-construction-800">
                  Verstuur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-construction-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Yannova-Bouw</h3>
              <p className="text-white/70 mb-6 max-w-md">
                Specialist in bouw, renovatie, ramen en deuren. Met meer dan 10 jaar ervaring zijn wij uw partner voor alle bouwprojecten in Keerbergen en omgeving.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-white/70 hover:text-white transition-colors">Nieuwbouw</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white transition-colors">Renovatie</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white transition-colors">Ramen & Deuren</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white transition-colors">Veranda's</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#33C3F0]" />
                  <span>+32 489 96 00 01</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#33C3F0]" />
                  <span>Info@yannova.be</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#33C3F0]" />
                  <span>Molenstraat 1A - 3140 Keerbergen</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">© 2024 Yannova-Bouw. Alle rechten voorbehouden.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacybeleid</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Algemene voorwaarden</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
