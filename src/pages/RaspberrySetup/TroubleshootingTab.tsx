
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TroubleshootingTab = () => (
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
);

export default TroubleshootingTab;
