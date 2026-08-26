import { ChartLineIcon } from "@phosphor-icons/react";
import { PageIntroduction } from "@/src/components/_common/page_summary";
import { Wip } from "@/src/components/_common/wip";

export const Resultats = () => {
  return (
    <>
      <PageIntroduction
        icon={<ChartLineIcon weight="bold" className="text-primary size-12" />}
        title="Résultats"
        description="Parce que rien ne vaut le réel, voici le résultat de l'application du modèle en direct."
        className="mb-4 sm:mb-12"
      />
      <Wip />
    </>
  );
};
