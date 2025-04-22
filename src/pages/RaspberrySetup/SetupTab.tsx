
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const SetupTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurazione del Raspberry Pi</CardTitle>
        <CardDescription>
          Passi per installare e configurare l'applicazione
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">1. Requisiti</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Raspberry Pi 3 o superiore (consigliato Raspberry Pi 4)</li>
            <li>Sistema operativo Raspberry Pi OS (precedentemente Raspbian)</li>
            <li>Node.js 18 o superiore</li>
            <li>Connessione internet sempre attiva</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">2. Installazione</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm">
            <p># Aggiorna il sistema</p>
            <p>sudo apt update && sudo apt upgrade -y</p>
            <p>&nbsp;</p>
            <p># Installa Node.js</p>
            <p>curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -</p>
            <p>sudo apt install -y nodejs</p>
            <p>&nbsp;</p>
            <p># Clona il repository</p>
            <p>git clone https://github.com/tuo-username/morning-mind-meld.git</p>
            <p>cd morning-mind-meld</p>
            <p>&nbsp;</p>
            <p># Installa le dipendenze</p>
            <p>npm install</p>
            <p>&nbsp;</p>
            <p># Crea il file di configurazione</p>
            <p>cp .env.example .env</p>
            <p>nano .env # Modifica con i tuoi dati</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">3. Configurazione GitHub</h3>
          <p className="mb-2">GitHub non dovrebbe più richiedere username e password direttamente. Dal 2021, GitHub ha disabilitato l'autenticazione con password per le operazioni Git:</p>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-4">
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4" />
                {isOpen ? "Nascondi dettagli" : "Mostra soluzioni di autenticazione"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-3 mt-2">
                <div>
                  <h4 className="font-medium mb-1">1. Autenticazione con SSH (Raccomandata)</h4>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    <p># Genera una chiave SSH</p>
                    <p>ssh-keygen -t ed25519 -C "tua.email@example.com"</p>
                    <p>&nbsp;</p>
                    <p># Avvia l'agente SSH</p>
                    <p>eval "$(ssh-agent -s)"</p>
                    <p>ssh-add ~/.ssh/id_ed25519</p>
                    <p>&nbsp;</p>
                    <p># Copia la chiave pubblica</p>
                    <p>cat ~/.ssh/id_ed25519.pub</p>
                    <p>&nbsp;</p>
                    <p># Aggiungi la chiave alle impostazioni SSH di GitHub:</p>
                    <p># Vai su https://github.com/settings/ssh/new</p>
                    <p>&nbsp;</p>
                    <p># Testa la connessione</p>
                    <p>ssh -T git@github.com</p>
                    <p>&nbsp;</p>
                    <p># Clona repo usando SSH</p>
                    <p>git clone git@github.com:tuo-username/morning-mind-meld.git</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">2. Personal Access Token (PAT)</h4>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    <p># Configurazione globale</p>
                    <p>git config --global user.name "Il tuo nome"</p>
                    <p>git config --global user.email "tua.email@example.com"</p>
                    <p>&nbsp;</p>
                    <p># Genera un token: https://github.com/settings/tokens</p>
                    <p>&nbsp;</p>
                    <p># Usa HTTPS con il token come password</p>
                    <p>git clone https://github.com/tuo-username/morning-mind-meld.git</p>
                    <p># Quando richiesto, usa il token come password</p>
                    <p>&nbsp;</p>
                    <p># Salva le credenziali (opzionale)</p>
                    <p>git config --global credential.helper cache</p>
                    <p>git config --global credential.helper 'cache --timeout=3600'</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-md text-sm text-blue-800">
            <p className="font-semibold">Nota importante:</p>
            <p>GitHub ha rimosso il supporto per l'autenticazione con password per le operazioni Git da agosto 2021. Usa SSH o un Personal Access Token invece.</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">4. Configurazione API Google</h3>
          <p className="mb-2">Per accedere a Google Calendar e Gmail, è necessario configurare le API Google:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Visita la Google Cloud Console e crea un nuovo progetto</li>
            <li>Abilita le API di Gmail e Google Calendar</li>
            <li>Crea credenziali OAuth e scarica il file JSON</li>
            <li>Salva il file di credenziali nella directory del progetto</li>
            <li>Aggiorna il file .env con il percorso delle credenziali</li>
          </ol>
          <Button className="mt-3" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Guida dettagliata PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SetupTab;
