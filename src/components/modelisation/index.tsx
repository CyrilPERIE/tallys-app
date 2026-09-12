import { ShapesIcon } from "@phosphor-icons/react";
import { PageIntroduction } from "@/src/components/_common/page_summary";
import { Wip } from "@/src/components/_common/wip";

export const Modelisation = () => {
  return (
    <>
      <PageIntroduction
        icon={<ShapesIcon weight="bold" className="size-10 text-primary sm:size-12" />}
        title="Modélisation des données"
        description="Comparaison des performances de différents modèles mis en œuvre pour prédire le résultat d'une course de chevaux"
        className="mb-4 sm:mb-12"
      />
      <Wip />
    </>
  );
};
