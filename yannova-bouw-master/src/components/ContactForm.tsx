import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const workTypes = [
  "Badkamerrenovatie",
  "Keukenrenovatie",
  "Vloerrenovatie",
  "Schilderwerken",
  "Totaalrenovatie",
  "Anders",
] as const;

const budgetRanges = [
  "Minder dan €5.000",
  "€5.000 - €10.000",
  "€10.000 - €20.000",
  "€20.000 - €30.000",
  "€30.000 - €50.000",
  "Meer dan €50.000",
] as const;

const referralSources = [
  "Via vrienden/familie",
  "Zoekmachine (Google, etc.)",
  "Sociale media",
  "Advertentie",
  "Anders",
] as const;

const formSchema = z.object({
  firstName: z.string().min(2, "Voornaam moet minimaal 2 karakters bevatten"),
  lastName: z.string().min(2, "Achternaam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().optional(),
  street: z.string().min(2, "Straatnaam + huisnummer is verplicht"),
  postalCode: z.string().min(6, "Ongeldige postcode").max(7),
  city: z.string().min(2, "Plaats is verplicht"),
  workTypes: z.array(z.string()).min(1, "Selecteer minimaal één type werk"),
  otherWorkType: z.string().optional(),
  description: z.string().min(10, "Beschrijf uw project (minimaal 10 karakters)"),
  budget: z.string(),
  startDate: z.date().optional(),
  referralSource: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "U moet akkoord gaan met de privacyverklaring",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workTypes: [],
      privacyConsent: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      
      toast({
        title: "Formulier verzonden",
        description: "We nemen zo spoedig mogelijk contact met u op.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#33C3F0] font-medium">Voornaam</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Uw voornaam" 
                    {...field} 
                    className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#33C3F0] font-medium">Achternaam</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Uw achternaam" 
                    {...field} 
                    className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#33C3F0] font-medium">E-mailadres</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="uw@email.nl" 
                    {...field} 
                    className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#33C3F0] font-medium">Telefoonnummer</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="06 12345678" 
                    {...field} 
                    className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormDescription className="text-construction-500">
                  Optioneel, maar wel aan te raden
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-[#33C3F0] font-medium">Straatnaam + huisnummer</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Bouwstraat 123" 
                    {...field} 
                    className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#33C3F0] font-medium">Postcode</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="1234 AB" 
                    {...field} 
                    className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#33C3F0] font-medium">Plaats</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Amsterdam" 
                  {...field} 
                  className="border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel className="text-[#33C3F0] font-medium">Type Werkzaamheden</FormLabel>
          {workTypes.map((type) => (
            <FormField
              key={type}
              control={form.control}
              name="workTypes"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(type)}
                      onCheckedChange={(checked) => {
                        const value = field.value || [];
                        return checked
                          ? field.onChange([...value, type])
                          : field.onChange(
                              value.filter((val) => val !== type)
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{type}</FormLabel>
                </FormItem>
              )}
            />
          ))}
          <FormMessage />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#33C3F0] font-medium">Beschrijving van de Werken</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Beschrijf hier uw project en gewenste werkzaamheden zo gedetailleerd mogelijk"
                  className="min-h-[150px] border border-[#cccccc] bg-[#F1F0FB]/80 text-[#33C3F0] rounded-md p-2 placeholder:text-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#33C3F0] font-medium">Budget</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecteer uw budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[#33C3F0] font-medium">Gewenste Startdatum</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Kies een datum</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Heeft u een voorkeur voor de startdatum van de werken?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referralSource"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#33C3F0] font-medium">Hoe heeft u ons gevonden?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecteer een optie" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {referralSources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="privacyConsent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Ik ga akkoord met de{" "}
                  <a
                    href="/privacy"
                    className="text-[#33C3F0] hover:underline"
                  >
                    privacyverklaring
                  </a>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row gap-6 pt-8">
          <Button 
            type="submit" 
            className="w-full sm:w-1/2 bg-[#003366] hover:bg-[#002855] text-white font-medium py-4 text-lg transition-all duration-300 shadow-md hover:shadow-lg rounded-md"
          >
            Verzenden
          </Button>
          <Button 
            type="reset"
            variant="outline"
            onClick={() => form.reset()}
            className="w-full sm:w-1/2 bg-[#cccccc] hover:bg-[#bbbbbb] text-white border-0 font-medium py-4 text-lg transition-all duration-300 rounded-md"
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
