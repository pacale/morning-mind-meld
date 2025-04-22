
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SetupTab = () => (
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
        <p className="mb-2">Se GitHub richiede username e password durante git clone o git pull:</p>
        <div className="bg-muted p-3 rounded-md font-mono text-sm">
          <p># Configurazione globale del nome utente e email</p>
          <p>git config --global user.name "Il tuo nome"</p>
          <p>git config --global user.email "tua.email@example.com"</p>
          <p>&nbsp;</p>
          <p># Configurazione del token di accesso personale (PAT)</p>
          <p># 1. Visita: https://github.com/settings/tokens</p>
          <p># 2. Clicca su "Generate new token" e segui le istruzioni</p>
          <p># 3. Utilizza il token come password quando richiesto</p>
          <p>&nbsp;</p>
          <p># Salvataggio delle credenziali nella cache (evita richieste ripetute)</p>
          <p>git config --global credential.helper cache</p>
          <p>git config --global credential.helper 'cache --timeout=3600'</p>
          <p>&nbsp;</p>
          <p># Alternativa: salvataggio permanente</p>
          <p>git config --global credential.helper store</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md mt-2 text-sm text-yellow-800">
          <p className="font-semibold">Nota sulla sicurezza:</p>
          <p>La modalità 'store' salva le credenziali in chiaro. Usala solo su dispositivi personali sicuri.</p>
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

export default SetupTab;
