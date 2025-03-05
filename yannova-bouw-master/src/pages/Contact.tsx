import Navigation from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F0FB]/30">
      <Navigation />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-6">Contact</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <p className="text-lg text-construction-600">
              Heeft u een vraag of wilt u een offerte aanvragen? Vul onderstaand formulier in en we nemen zo spoedig mogelijk contact met u op.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-construction-600">
                <Phone className="h-5 w-5 text-[#33C3F0]" />
                <span>+32 489 96 00 01</span>
              </div>
              <div className="flex items-center gap-3 text-construction-600">
                <Mail className="h-5 w-5 text-[#33C3F0]" />
                <span>Info@yannova.be</span>
              </div>
              <div className="flex items-center gap-3 text-construction-600">
                <MapPin className="h-5 w-5 text-[#33C3F0]" />
                <span>Molenstraat 1A - 3140 Keerbergen</span>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F0FB]/50 rounded-md p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;