import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    onderwerp: "",
    bericht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo spoedig mogelijk contact met u op.",
    });
    setFormData({
      naam: "",
      email: "",
      telefoon: "",
      onderwerp: "",
      bericht: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
      <div className="space-y-2">
        <Label htmlFor="naam">Naam *</Label>
        <Input
          id="naam"
          name="naam"
          value={formData.naam}
          onChange={handleChange}
          required
          placeholder="Uw volledige naam"
          data-testid="input-naam"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mailadres *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="voorbeeld@email.nl"
          data-testid="input-email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefoon">Telefoonnummer</Label>
        <Input
          id="telefoon"
          name="telefoon"
          type="tel"
          value={formData.telefoon}
          onChange={handleChange}
          placeholder="+31 6 1234 5678"
          data-testid="input-telefoon"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="onderwerp">Onderwerp *</Label>
        <Input
          id="onderwerp"
          name="onderwerp"
          value={formData.onderwerp}
          onChange={handleChange}
          required
          placeholder="Waar kunnen we u mee helpen?"
          data-testid="input-onderwerp"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bericht">Bericht *</Label>
        <Textarea
          id="bericht"
          name="bericht"
          value={formData.bericht}
          onChange={handleChange}
          required
          placeholder="Uw vraag of opmerking..."
          rows={6}
          data-testid="input-bericht"
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" data-testid="button-submit">
        Verstuur Bericht
      </Button>
    </form>
  );
}
