import { Changelog } from "@/src/components/changelog";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-bold mb-2">Tallys</p>
      <p className="text-sm text-muted-foreground mb-2">Outils de suivi des courses de chevaux.</p>      
      <Changelog />
    </div>
  );
}
