
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Server, Terminal, Clock, Mail } from "lucide-react";

const RaspberrySetup = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild size="sm" className="mr-2">
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Torna alla home</Link>
        </Button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Morning Mind Meld su Raspberry Pi</h1>
        <p className="text-xl text-muted-foreground">
          Configura il tuo assistente mattutino personale su un Raspberry Pi
        </p>
      </div>

      <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Panoramica</TabsTrigger>
          <TabsTrigger value="setup">Configurazione</TabsTrigger>
          <TabsTrigger value="scheduler">Schedulazione</TabsTrigger>
          <TabsTrigger value="troubleshooting">Risoluzione Problemi</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Come funziona?</CardTitle>
              <CardDescription>
                Panoramica dell'architettura e del funzionamento dell'applicazione su Raspberry Pi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <Server className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Hostato Localmente</h3>
                    <p className="text-muted-foreground">
                      L'applicazione viene eseguita sul tuo Raspberry Pi, mantenendo i tuoi dati sotto il tuo controllo.
                      Non è necessario dipendere da servizi cloud esterni per l'invio dei tuoi briefing quotidiani.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Schedulazione Automatica</h3>
                    <p className="text-muted-foreground">
                      Utilizzando cron jobs su Linux, l'applicazione si attiverà automaticamente ogni mattina
                      all'orario che preferisci per generare e inviare il tuo briefing personale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Briefing via Email</h3>
                    <p className="text-muted-foreground">
                      Riceverai ogni mattina una email con il riassunto del tuo calendario, le email non lette
                      e le ultime notizie, formattato in modo chiaro e leggibile.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="setup">
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
                <h3 className="font-semibold text-lg mb-2">3. Configurazione API Google</h3>
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
        </TabsContent>
        
        <TabsContent value="scheduler">
          <Card>
            <CardHeader>
              <CardTitle>Configurazione della Schedulazione</CardTitle>
              <CardDescription>
                Come impostare l'esecuzione automatica ogni mattina
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Utilizzo di Cron</h3>
                  <p className="mb-3">
                    Per eseguire automaticamente lo script ogni mattina alle 7:00, configureremo un cron job:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    <p># Apri l'editor crontab</p>
                    <p>crontab -e</p>
                    <p>&nbsp;</p>
                    <p># Aggiungi questa riga (per esecuzione alle 7:00)</p>
                    <p>0 7 * * * cd /percorso/al/progetto && /usr/bin/node scripts/generateAndSend.js {'>>'} logs/morning-meld.log 2{'>'}&#38;1</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Test manuale</h3>
                  <p className="mb-3">
                    Per testare lo script senza attendere la schedulazione:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    <p>cd /percorso/al/progetto</p>
                    <p>node scripts/generateAndSend.js</p>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
                  <h3 className="font-semibold text-amber-800 mb-1">Nota Importante</h3>
                  <p className="text-amber-700">
                    Assicurati che il Raspberry Pi sia configurato per avviarsi automaticamente dopo un riavvio
                    o un'interruzione di corrente, per garantire che la schedulazione funzioni sempre correttamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="troubleshooting">
          <Card>
            <CardHeader>
              <CardTitle>Risoluzione Problemi</CardTitle>
              <CardDescription>
                Soluzioni ai problemi più comuni
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email non ricevute</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verifica che il Raspberry Pi abbia una connessione internet attiva</li>
                    <li>Controlla i log in <code>logs/morning-meld.log</code></li>
                    <li>Verifica che le credenziali Google siano corrette e non scadute</li>
                    <li>Assicurati che l'account Gmail utilizzato permetta l'accesso da app meno sicure o utilizzi OAuth correttamente</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Lo script non si avvia</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verifica che crontab sia configurato correttamente con <code>crontab -l</code></li>
                    <li>Assicurati che i percorsi nel crontab siano assoluti e non relativi</li>
                    <li>Controlla i permessi di esecuzione dello script</li>
                    <li>Verifica la presenza di errori nei log di sistema <code>sudo journalctl -e</code></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Problemi con le API di Google</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Riautorizza l'applicazione seguendo nuovamente la procedura di configurazione OAuth</li>
                    <li>Verifica che le API necessarie siano abilitate nella console Google Cloud</li>
                    <li>Controlla le quote di utilizzo delle API nella console Google Cloud</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
                  <h3 className="font-semibold text-blue-800 mb-1">Supporto</h3>
                  <p className="text-blue-700">
                    Per problemi non risolti, consulta la documentazione completa o apri una issue sul repository GitHub del progetto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-10 text-center">
        <Button asChild>
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Torna alla home</Link>
        </Button>
      </div>
    </div>
  );
};

export default RaspberrySetup;
