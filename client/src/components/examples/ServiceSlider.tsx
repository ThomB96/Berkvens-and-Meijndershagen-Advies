import ServiceSlider from '../ServiceSlider';
import firstHomeImage from "@assets/generated_images/First_home_buyers_celebration_6717e5d7.png";
import nextHomeImage from "@assets/generated_images/Family_upgrading_to_bigger_home_7743af46.png";
import renovationImage from "@assets/generated_images/Home_renovation_inspiration_08181638.png";

export default function ServiceSliderExample() {
  const mockCards = [
    {
      title: "Eerste huis kopen",
      description: "Maak uw droom waar met de juiste hypotheek voor uw eerste eigen huis.",
      image: firstHomeImage,
    },
    {
      title: "Volgend huis kopen",
      description: "Doorgroeien naar een grotere woning met optimale financiering.",
      image: nextHomeImage,
    },
    {
      title: "Verbouwen",
      description: "Realiseer uw verbouwplannen met een passende hypotheek.",
      image: renovationImage,
    },
    {
      title: "Overwaarde opnemen",
      description: "Benut de overwaarde van uw woning voor andere doeleinden.",
      image: firstHomeImage,
    },
    {
      title: "Oversluiten",
      description: "Profiteer van lagere rentetarieven door over te sluiten.",
      image: nextHomeImage,
    },
    {
      title: "Hypotheekscan",
      description: "Laat uw huidige hypotheek scannen op verbetermogelijkheden.",
      image: renovationImage,
    },
  ];

  return <ServiceSlider cards={mockCards} />;
}
