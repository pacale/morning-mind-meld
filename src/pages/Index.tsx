
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Mail, Newspaper, Server } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Morning Mind Meld</h1>
          <p className="text-gray-600">Il tuo briefing mattutino personalizzato</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Inizia la giornata con le informazioni che contano</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ricevi ogni mattina alle 7:00 una email con un riassunto organizzato 
            del tuo calendario, delle email non lette e delle ultime notizie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/raspberry-setup">
                <Server className="mr-2 h-5 w-5" />
                Configura su Raspberry Pi
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Google Calendar</CardTitle>
              <CardDescription>
                Visualizza gli appuntamenti del giorno
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ottieni un riepilogo chiaro di tutti gli appuntamenti programmati per la giornata,
                con orari, titoli e dettagli essenziali.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Email non lette</CardTitle>
              <CardDescription>
                Prioritizza le comunicazioni importanti
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Visualizza le email non lette più recenti con mittente, oggetto e 
                un breve riassunto del contenuto, così sai cosa richiedere la tua attenzione.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Newspaper className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Ultime notizie</CardTitle>
              <CardDescription>
                Rimani aggiornato sul mondo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Leggi una selezione curata delle notizie più rilevanti della giornata
                da fonti affidabili e personalizzate in base ai tuoi interessi.
              </p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Perché hostarlo su Raspberry Pi?</h3>
          <div className="space-y-3 text-blue-700">
            <p>✓ <strong>Privacy garantita</strong> - Tutti i tuoi dati rimangono sotto il tuo controllo</p>
            <p>✓ <strong>Sempre attivo</strong> - Il Raspberry Pi consuma pochissima energia</p>
            <p>✓ <strong>Personalizzabile</strong> - Modifica lo script in base alle tue esigenze</p>
            <p>✓ <strong>Economico</strong> - Nessun costo di hosting mensile</p>
          </div>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <Link to="/raspberry-setup">
                <Server className="mr-2 h-4 w-4" />
                Scopri come configurarlo
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">© 2025 Morning Mind Meld - Il tuo assistente mattutino personale</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
