import { BinocularsIcon, GhostIcon } from "@phosphor-icons/react";
import { PageIntroduction } from "@/src/components/_common/page_summary";
import { Wip } from "@/src/components/_common/wip";

export const Exploration = () => {
  return (
    <>
    <PageIntroduction
      icon={<BinocularsIcon weight="bold" className="text-primary size-12" />}
      title="Exploration des données"
      description="Dashboard de données aidant à comprendre la structure, les biais et le pouvoir prédictif des variables disponibles"
      className="mb-4 sm:mb-12"
    />
    <Wip />
    </>
  );
};
