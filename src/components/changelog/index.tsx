import { cn } from "@/src/lib/utils";
import { Card } from "@/src/ui/card";

import { CardHeader, CardContent, CardFooter } from "@/src/ui/card";
import {
  ArticleIcon,
  Code,
  FileIcon,
  Fire,
  RobotIcon,
} from "@phosphor-icons/react";

type ChangelogItem = {
  title: string;
  date: Date;
  content: React.ReactNode;
  icon: React.ReactNode;
  footer?: React.ReactNode;
};

const changelogItems = [
  {
    icon: <Fire size={22} className="text-primary" />,
    title: "Lancement du projet",
    date: new Date("2026-07-31"),
    content: (
      <div>
        <p>
          L{`'`}objectif est de créer un outil de prédiction de résultats sur
          les courses de chevaux.
        </p>
        <p>
          Pour cela, les calculs statistiques et modèles IA développés seront
          basés sur les données historiques disponibles via l{`'`}API publique
          PMU
        </p>
      </div>
    ),
  },
  {
    icon: <RobotIcon size={22} className="text-primary" />,
    title: "Première version du scraper",
    date: new Date("2026-08-17"),
    content: (
      <div>
        <p className="mb-1">
          Un premier gros travail de recherche a été réalisé afin de déterminer
          les données historiques disponibles via l{`'`}API publique PMU.
        </p>
        <ul className="mb-2 list-disc space-y-1 pl-5">
          <li>
            Découverte de l{`'`}API publique PMU et des endpoints disponibles.
          </li>
          <li>Découverte des données disponibles et de leur structure.</li>
          <li>
            Compréhension des différents paramètres de l{`'`}API et de leur
            impact sur les données.
          </li>
          <li>
            Découverte de la pagination de l{`'`}API et de son fonctionnement.
          </li>
        </ul>
        <p className="mb-1">
          Suite à ces compréhensions, j{`'`}ai pu mettre en place une première
          pipeline de récupération des données permettant de récupérer tout l
          {`'`}historique des courses PMU depuis le 01/01/2014.
        </p>
        <p>
          Pour le moment le scraper stocke les JSON de réponse dans la base de
          données, cela permet de faire des tests et de visualiser.
        </p>
      </div>
    ),
    footer: (
      <div>
        <p>
          Un autre besoin a été identifié entre temps (que j{`'`}expliquerai
          peut-être plus tard si il aboutit) nécessitant la mise en place de
          scheduler pour une récupération régulière des données.
        </p>
      </div>
    ),
  },
  {
    icon: <ArticleIcon size={22} className="text-primary" />,
    title: "Première version de l'interface",
    date: new Date("2026-08-23"),
    content: (
      <div>
        <p>
          J{`'`}ai pu mettre en place une première version de l{`'`}interface
          permettant de visualiser les données récupérées.
        </p>
        <p>
          Ceci me sert de POC afin de valider les paradigmes de développement,
          la structure du projet et l{`'`}allure générale de l{`'`}application.
        </p>
        <p className="mb-1">
          Les seules données facilement calculables sont celles du scraper dont
          les données stockées n{`'`}ont pas encore été parsées ou transformées.
        </p>
      </div>
    ),
    footer: (
      <div>
        <p>
          Le déploiement a été fait via Railway en attendant d{`'`}avoir une
          machine dédiée en physique.
        </p>
      </div>
    ),
  },
  {
    icon: <FileIcon size={22} className="text-primary" />,
    title: "Ajout de notebooks",
    date: new Date("2026-09-12"),
    content: (
      <div>
        <p>
          J{`'`}ai ajouté des notebooks permettant de visualiser les données
          récupérées.
        </p>
        <p>
          Ces notebooks sont utilisés pour explorer les données et pour faire
          des premiers tests naïfs et voir si les données sont exploitables et
          peuvent mener quelque part.
        </p>
      </div>
    ),
  },
];

export const Changelog = () => {
  return (
    <div className="min-w-0">
      <div className="mb-4 flex min-w-0 items-center gap-2">
        <Code size={24} className="shrink-0 text-primary" weight="bold" />
        <p className="text-xl font-bold sm:text-2xl">Statut du projet</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {changelogItems
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((item) => (
            <ChangelogItem key={item.title} {...item} className="min-w-0" />
          ))}
      </div>
    </div>
  );
};

const ChangelogItem = ({
  title,
  date,
  content,
  footer,
  icon,
  className,
}: ChangelogItem & { className: string }) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <div className="flex items-start gap-2">
          <span className="shrink-0">{icon}</span>
          <p className="text-base font-bold text-pretty sm:text-lg">{title}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {date.toLocaleDateString("fr-FR")}
        </p>
      </CardHeader>
      <CardContent className="min-w-0 text-sm text-pretty">{content}</CardContent>
      {footer && (
        <CardFooter className="text-sm text-muted-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};
