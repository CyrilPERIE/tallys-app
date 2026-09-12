import { Changelog } from "@/src/components/changelog";
import { BadgeIcon } from "@/src/components/_common/badge-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/ui/card";
import { ArrowRightIcon, BinocularsIcon, ChartLineIcon, GhostIcon, HorseIcon, ShapesIcon } from "@phosphor-icons/react";
import Link from "next/link";

export const Root = () => {
    const itemCardSteps: Omit<ItemCardStepProps, 'index'>[] = [
        {
            title: "Récupération",
            description: "Collecte automatique des programmes, réunions, courses, partants et rapports depuis l’API PMU.",
            href: "/recuperation",
            icon: <GhostIcon weight="bold" className="text-primary size-8 sm:size-10" />,
        },
        {
            title: "Exploration des données",
            description: "Etude de la structure, des biais et du pouvoir prédictif des variables disponibles",
            href: "/exploration",
            icon: <BinocularsIcon weight="bold" className="text-primary size-8 sm:size-10" />,
        },
        {
            title: "Modélisation des données",
            description: "Création de modèles statistiques ou entraînement de modèles de machine learning pour prédire les résultats des courses",
            href: "/modelisation",
            icon: <ShapesIcon weight="bold" className="text-primary size-8 sm:size-10" />,
        },
        {
            title: "Résultats",
            description: "Observation des résultats des paris effectués à l'aide des modèles",
            href: "/resultats",
            icon: <ChartLineIcon weight="bold" className="text-primary size-8 sm:size-10" />,
        },

    ]
  return (
    <div className="min-w-0">
      <Card className="mb-8">
        <CardHeader className="justify-center">
          <BadgeIcon>
            <HorseIcon weight="bold" className="text-primary size-12 sm:size-16" />
          </BadgeIcon>
          <CardTitle>
            <p className="text-center text-xl font-bold sm:text-2xl">Tallys</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="mx-auto max-w-2xl">
          <p className="text-center text-sm text-muted-foreground text-pretty">
            Projet de collecte, d’analyse et de prédiction sur les courses
            hippiques PMU. L’application récupère les données brutes, les
            explore, entraîne des modèles et expose leurs résultats sous forme
            de métriques exploitables.
          </p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {itemCardSteps.map((item, index) => (
          <ItemCardStep key={index} {...item} index={index} />
        ))}
      </div>
      <Changelog />
      {/* TODO: Ajouter une section de publications */}
    </div>
  );
};

interface ItemCardStepProps {
  icon: React.ReactNode;
  index: number;
  title: string;
  description: string;
  href: string;
}

const ItemCardStep = ({
  icon,
  index,
  title,
  description,
  href,
}: ItemCardStepProps) => {
  return (
    <Card>
      <CardContent className="flex min-w-0 flex-row gap-3 sm:gap-4">
        <div className="shrink-0">
          <BadgeIcon>{icon}</BadgeIcon>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold">
            <span className="mr-2">{index + 1}.</span>
            {title}
          </p>
          <p className="text-sm text-muted-foreground text-pretty">
            {description}
          </p>
          <Link
            href={href}
            className="mt-1 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <span>Accéder</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
