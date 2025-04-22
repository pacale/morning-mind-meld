
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SchedulerTab = () => (
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
);

export default SchedulerTab;
