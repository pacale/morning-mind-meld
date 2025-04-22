
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Clock, Mail } from "lucide-react";

const OverviewTab = () => (
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
);

export default OverviewTab;
