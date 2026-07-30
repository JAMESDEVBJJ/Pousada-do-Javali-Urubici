import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Sobre } from "./components/site/Sobre";
import { Valores } from "./components/site/Valores";
import { Gallery } from "./components/site/Gallery";
import { Localizacao } from "./components/site/Localizacao";
import { Attractions } from "./components/site/Attractions";
import { Contato } from "./components/site/Contato";
import { Footer } from "./components/site/Footer";
import { WhatsAppTeaser } from "./components/site/WhatsAppTeaser";
import { waLink } from "./data";

export default function App() {
  const [activeAlbum, setActiveAlbum] = useState("exterior");

  return (
    <div className="min-h-screen w-full bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Sobre onSelectChale={setActiveAlbum} />
        <Valores />
        <Gallery active={activeAlbum} onActiveChange={setActiveAlbum} />
        <Localizacao />
        <Attractions />
        <Contato />
      </main>
      <Footer />

      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="size-7" />
      </a>

      <WhatsAppTeaser />
    </div>
  );
}
