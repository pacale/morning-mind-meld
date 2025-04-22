import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Server, Terminal, Clock, Mail } from "lucide-react";
import OverviewTab from "./RaspberrySetup/OverviewTab";
import SetupTab from "./RaspberrySetup/SetupTab";
import SchedulerTab from "./RaspberrySetup/SchedulerTab";
import TroubleshootingTab from "./RaspberrySetup/TroubleshootingTab";

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
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="setup">
          <SetupTab />
        </TabsContent>
        
        <TabsContent value="scheduler">
          <SchedulerTab />
        </TabsContent>
        
        <TabsContent value="troubleshooting">
          <TroubleshootingTab />
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
