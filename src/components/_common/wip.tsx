import { ClockIcon } from "@phosphor-icons/react";

export const Wip = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <ClockIcon size={24} weight="bold" className="text-primary mr-2" />
      <p className="text-sm text-muted-foreground">
        Travail en cours, les efforts sont en cours sur la consolidation de la
        récupération des données et l&apos;exploration des données.
      </p>
    </div>
  );
};
