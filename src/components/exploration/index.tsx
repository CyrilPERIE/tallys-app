import { BinocularsIcon } from "@phosphor-icons/react";
import { PageIntroduction } from "@/src/components/_common/page_summary";
import Notebooks from "@/src/components/_common/notebooks";

export const Exploration = () => {
  return (
    <>
    <PageIntroduction
      icon={<BinocularsIcon weight="bold" className="text-primary size-12" />}
      title="Exploration des données"
      description="Dashboard de données aidant à comprendre la structure, les biais et le pouvoir prédictif des variables disponibles"
      className="mb-4 sm:mb-12"
    />
    <Notebooks notebookIds={['001_Exploration']} />
    </>
  );
};
